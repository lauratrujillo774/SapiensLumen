import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { connection } from '../config/mysql/dbmysql.js';
import { buscarVideos } from './youtube.service.js';
import { generarJSON, hayIA, nombreModelo, obtenerCliente, _usarClienteDePrueba, ErrorIA } from './ia.service.js';

/* ============================================================
   Lecciones generadas con IA (Claude)

   - Cada tema se genera UNA sola vez y se guarda en MySQL (tabla contenido_tema):
     a partir de la segunda persona que lo abre, se sirve desde la base de datos
     sin gastar nada de IA.
   - Si 100 estudiantes piden el mismo tema nuevo a la vez, se hace UNA sola llamada.
   - Máximo IA_CONCURRENCIA llamadas simultáneas (por defecto 3); las demás esperan turno.
   ============================================================ */

const modelo = nombreModelo;   // el proveedor (Gemini o Claude) se decide en ia.service.js

// Lo que debe devolver la IA (el SDK la obliga a respetar esta forma)
const ContenidoSchema = z.object({
    resumen: z.string(),
    objetivos: z.array(z.string()),
    partes: z.array(z.object({
        titulo: z.string(),
        emoji: z.string(),
        explicacion: z.string(),
        ejemplo: z.string(),
        idea_clave: z.string(),
    })),
    mapa_mental: z.object({
        centro: z.string(),
        ramas: z.array(z.object({ titulo: z.string(), hijos: z.array(z.string()) })),
    }),
    tarjetas: z.array(z.object({ frente: z.string(), reverso: z.string() })),
    busquedas_video: z.array(z.string()),
    num_preguntas: z.number(),
});

const SISTEMA = (grado) => `Eres un docente colombiano experto en pedagogía y en diseño de aprendizaje inclusivo. Escribes lecciones para estudiantes de ${grado}° (educación básica secundaria y media en Colombia), alineadas con los Estándares Básicos de Competencias y los Derechos Básicos de Aprendizaje del MEN.

Reglas de escritura (muy importantes; también están pensadas para estudiantes neurodivergentes: TDAH, dislexia, autismo):
- Español claro y literal. Oraciones cortas, de unas 18 palabras como máximo. Nada de ironía, doble sentido ni modismos difíciles.
- Una sola idea por parte. Cada parte se lee en menos de un minuto.
- Define cada término nuevo la primera vez que aparezca.
- Ejemplos concretos y cotidianos del contexto colombiano (pesos, arepas, fútbol, Transmilenio, Medellín...). Que el ejemplo muestre el procedimiento paso a paso, no solo el resultado.
- Sin relleno ni texto decorativo. Cuando haya pasos, usa líneas que empiecen con un guion.
- En matemáticas y ciencias escribe las fórmulas en texto plano con símbolos Unicode (², √, ×, ÷, π, ≤). No uses LaTeX ni Markdown.
- Sé riguroso: no inventes datos, fechas ni nombres. Si dudas, usa una formulación general y correcta.
- En inglés, explica en español y da los ejemplos en inglés con su traducción entre paréntesis.
- No incluyas enlaces ni direcciones web.`;

const PEDIDO = ({ tema, area, grado, descripcion }) => `Crea la lección del tema "${tema}" de la asignatura ${area}, grado ${grado}°.${descripcion ? `\nDescripción del tema: ${descripcion}` : ''}

Entrega:
- resumen: 2 frases que digan de qué trata el tema.
- objetivos: 3 frases que empiecen con un verbo en futuro (por ejemplo "Reconocerás...", "Resolverás...").
- partes: de 4 a 7 partes, en orden lógico y de lo más simple a lo más complejo. Cada parte tiene titulo corto, emoji (uno solo), explicacion (máximo 80 palabras), ejemplo (resuelto paso a paso, máximo 70 palabras) e idea_clave (una frase para recordar).
- mapa_mental: centro = el nombre del tema; de 3 a 6 ramas con 2 a 4 hijos cada una (frases de 1 a 6 palabras).
- tarjetas: de 6 a 12 tarjetas de repaso; frente = pregunta o término, reverso = respuesta corta.
- busquedas_video: 3 consultas para buscar en YouTube explicaciones en español de este tema (incluye el tema y la palabra "secundaria" o el grado).
- num_preguntas: cuántas preguntas debe tener el juego de este tema, entre 6 y 20. Un tema pequeño necesita pocas; un tema amplio, más.`;

/* ---------- control de concurrencia y de llamadas repetidas ---------- */
const enCurso = new Map();   // id_tema -> Promise (una sola generación por tema)
const fallos = new Map();    // id_tema -> { mensaje, hasta } (para no insistir de inmediato)
const ESPERA_TRAS_FALLO_MS = 60_000;
let activas = 0;
const cola = [];

function conLimite(tarea) {
    const maximo = Number(process.env.IA_CONCURRENCIA) || 3;
    return new Promise((resolver, rechazar) => {
        const correr = async () => {
            activas++;
            try { resolver(await tarea()); } catch (e) { rechazar(e); } finally {
                activas--;
                const siguiente = cola.shift();
                if (siguiente) siguiente();
            }
        };
        if (activas < maximo) correr(); else cola.push(correr);
    });
}

class ErrorContenido extends Error {}

function mensajeDeError(error) {
    if (error instanceof ErrorContenido || error instanceof ErrorIA) return error.message;
    if (error instanceof Anthropic.AuthenticationError) return 'La clave de Anthropic (ANTHROPIC_API_KEY) no es válida.';
    if (error instanceof Anthropic.PermissionDeniedError) return 'La clave de Anthropic no tiene permiso para usar este modelo.';
    if (error instanceof Anthropic.RateLimitError) return 'La IA está muy ocupada. Intenta de nuevo en un minuto.';
    if (error instanceof Anthropic.BadRequestError && /credit|balance/i.test(error.message)) {
        return 'La cuenta de Anthropic no tiene saldo. Recárgala en console.anthropic.com.';
    }
    if (error instanceof Anthropic.NotFoundError) return `El modelo "${modelo()}" no existe. Revisa ANTHROPIC_MODEL en el .env.`;
    if (error instanceof Anthropic.APIConnectionError) return 'No se pudo conectar con la IA. Revisa la conexión a internet.';
    return 'No se pudo preparar la lección. Intenta de nuevo en un momento.';
}

/* ---------- limpieza de lo que devuelve la IA ---------- */
const texto = (valor, max) => String(valor ?? '').trim().slice(0, max);
const lista = (valor, max, largo) => (Array.isArray(valor) ? valor : []).map((x) => texto(x, largo)).filter(Boolean).slice(0, max);

function normalizar(bruto) {
    const partes = (bruto.partes || [])
        .map((p) => ({
            titulo: texto(p.titulo, 90),
            emoji: texto(p.emoji, 8) || '📘',
            explicacion: texto(p.explicacion, 900),
            ejemplo: texto(p.ejemplo, 800),
            idea_clave: texto(p.idea_clave, 220),
        }))
        .filter((p) => p.titulo && p.explicacion)
        .slice(0, 8);
    if (partes.length < 3) throw new ErrorContenido('La IA devolvió una lección incompleta. Intenta de nuevo.');

    const ramas = (bruto.mapa_mental?.ramas || [])
        .map((r) => ({ titulo: texto(r.titulo, 70), hijos: lista(r.hijos, 5, 90) }))
        .filter((r) => r.titulo)
        .slice(0, 7);

    const tarjetas = (bruto.tarjetas || [])
        .map((t) => ({ frente: texto(t.frente, 200), reverso: texto(t.reverso, 300) }))
        .filter((t) => t.frente && t.reverso)
        .slice(0, 14);

    const numPreguntas = Math.min(20, Math.max(6, Math.round(Number(bruto.num_preguntas)) || partes.length * 2));

    return {
        resumen: texto(bruto.resumen, 500),
        objetivos: lista(bruto.objetivos, 5, 200),
        partes,
        mapa_mental: { centro: texto(bruto.mapa_mental?.centro, 100), ramas },
        tarjetas,
        busquedas_video: lista(bruto.busquedas_video, 3, 140),
        videos: [],
        numPreguntas,
    };
}

/* ---------- acceso a la base de datos ---------- */
async function cargarTema(idTema) {
    const [filas] = await connection.query(
        `SELECT t.id_tema, t.nombre, t.descripcion, t.grado, a.id_area, a.nombre AS area
         FROM temas t JOIN areas_academicas a ON a.id_area = t.id_area WHERE t.id_tema = ?`,
        [idTema],
    );
    return filas[0] || null;
}

async function guardar(idTema, contenido, nombreModelo, videosResueltos) {
    const { numPreguntas, ...resto } = contenido;
    await connection.query(
        `INSERT INTO contenido_tema (id_tema, contenido, modelo, num_preguntas, videos_resueltos)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE contenido = VALUES(contenido), modelo = VALUES(modelo),
            num_preguntas = VALUES(num_preguntas), videos_resueltos = VALUES(videos_resueltos),
            fecha_generacion = CURRENT_TIMESTAMP`,
        [idTema, JSON.stringify(resto), nombreModelo, numPreguntas, videosResueltos ? 1 : 0],
    );
}

/* ---------- API pública del servicio ---------- */

// Genera (con IA) y guarda la lección de un tema. Lanza error si algo falla.
export async function generarYGuardar(idTema) {
    const tema = await cargarTema(idTema);
    if (!tema) throw new ErrorContenido('Tema no encontrado.');

    const { data, uso } = await generarJSON({
        sistema: SISTEMA(tema.grado),
        pedido: PEDIDO({ tema: tema.nombre, area: tema.area, grado: tema.grado, descripcion: tema.descripcion }),
        schema: ContenidoSchema,
        maxTokens: 16000,
        esfuerzo: 'medium',
    });

    const contenido = normalizar(data);
    const videos = await buscarVideos(contenido.busquedas_video);
    if (videos) contenido.videos = videos;

    await guardar(idTema, contenido, modelo(), Boolean(videos));
    console.log(`Lección lista: tema ${idTema} "${tema.nombre}" (${uso})`);
    return contenido;
}

// Lee la lección guardada. Si faltaban los videos y ya hay YOUTUBE_API_KEY, los busca ahora.
export async function leerContenido(idTema) {
    const [filas] = await connection.query('SELECT * FROM contenido_tema WHERE id_tema = ?', [idTema]);
    const fila = filas[0];
    if (!fila) return null;

    const contenido = JSON.parse(fila.contenido);
    if (!fila.videos_resueltos && contenido.busquedas_video?.length) {
        const videos = await buscarVideos(contenido.busquedas_video);
        if (videos) {
            contenido.videos = videos;
            await connection.query('UPDATE contenido_tema SET contenido = ?, videos_resueltos = 1 WHERE id_tema = ?', [JSON.stringify(contenido), idTema]);
        }
    }
    return { ...contenido, numPreguntas: fila.num_preguntas };
}

// Estado de la generación de un tema: 'generando' | { error } | null
export function estadoGeneracion(idTema) {
    if (enCurso.has(idTema)) return 'generando';
    const fallo = fallos.get(idTema);
    if (fallo && fallo.hasta > Date.now()) return { error: fallo.mensaje };
    return null;
}

// Empieza a generar sin esperar. Si ya se está generando ese tema, no hace nada.
export function iniciarGeneracion(idTema) {
    if (enCurso.has(idTema)) return;
    fallos.delete(idTema);
    const trabajo = conLimite(() => generarYGuardar(idTema))
        .catch((error) => {
            console.error(`Error generando el tema ${idTema}:`, error.message);
            fallos.set(idTema, { mensaje: mensajeDeError(error), hasta: Date.now() + ESPERA_TRAS_FALLO_MS });
        })
        .finally(() => enCurso.delete(idTema));
    enCurso.set(idTema, trabajo);
}

// Guarda una lección ya redactada (por una persona o por Claude Code) sin llamar a la API.
// Pasa por la misma limpieza que la de la IA. Los videos se buscan después, cuando haya YOUTUBE_API_KEY.
export async function guardarContenidoManual(idTema, bruto, nombreModelo) {
    const contenido = normalizar(bruto);
    await guardar(idTema, contenido, nombreModelo, false);
    return contenido;
}

// Piezas que reutiliza el generador de preguntas (preguntas.service.js)
export { cargarTema, conLimite, mensajeDeError, modelo, ErrorContenido, hayIA, obtenerCliente, _usarClienteDePrueba };
