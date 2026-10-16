import { z } from 'zod';
import { connection } from '../config/mysql/dbmysql.js';
import {
    cargarTema, leerContenido, conLimite, mensajeDeError, ErrorContenido, hayIA,
} from './contenido.service.js';
import { generarJSON } from './ia.service.js';

/* ============================================================
   Preguntas del juego generadas con IA

   - Se generan UNA vez por tema y se guardan en tus tablas: retos, preguntas,
     opciones_respuesta y pistas. Después se sirven desde MySQL.
   - Si el tema ya tiene lección, las preguntas se basan en ESA lección
     (así se pregunta lo que el estudiante acaba de estudiar).
   - La cantidad de preguntas sale de contenido_tema.num_preguntas (según lo
     amplio que sea el tema); si no hay lección, se usa 10.
   ============================================================ */

const PreguntasSchema = z.object({
    preguntas: z.array(z.object({
        tipo: z.enum(['opcion_multiple', 'verdadero_falso', 'respuesta_corta']),
        enunciado: z.string(),
        opciones: z.array(z.string()),
        respuesta_correcta: z.string(),
        respuestas_aceptadas: z.array(z.string()),
        explicacion: z.string(),
        pistas: z.array(z.string()),
        dificultad: z.number(),
    })),
});

const SISTEMA = (grado) => `Eres un docente colombiano experto en evaluación formativa. Escribes preguntas de práctica para estudiantes de ${grado}°, alineadas con los Estándares Básicos de Competencias y los DBA del MEN. El estudiante juega, no presenta un examen: las preguntas deben ayudar a aprender.

Reglas (también pensadas para estudiantes neurodivergentes: TDAH, dislexia, autismo):
- Enunciados cortos, claros y literales. Una sola cosa por pregunta. Sin trampas, sin doble negación, sin ironía.
- Ordena de más fácil a más difícil (dificultad 1, 2 o 3). Empieza con preguntas que casi todos puedan acertar.
- En opcion_multiple da EXACTAMENTE 4 opciones: una correcta y tres distractores creíbles basados en errores comunes. Las opciones son cortas, no se repiten y no usan "todas las anteriores" ni "ninguna".
- respuesta_correcta en opcion_multiple debe ser el texto EXACTO de una de las opciones.
- En verdadero_falso, opciones = ["Verdadero", "Falso"] y respuesta_correcta es "Verdadero" o "Falso".
- En respuesta_corta, opciones = [] y la respuesta es corta y sin ambigüedad (un número, una palabra o una expresión). En respuestas_aceptadas incluye las variantes válidas (sinónimos, con o sin unidad, con coma o punto decimal).
- explicacion: paso a paso, en frases cortas, que explique por qué la respuesta es correcta (máximo 70 palabras).
- pistas: 2 pistas progresivas. La primera orienta, la segunda acerca más; ninguna da la respuesta.
- Mezcla los tipos: cerca del 60 % opcion_multiple, 20 % verdadero_falso y 20 % respuesta_corta.
- Matemáticas y ciencias: fórmulas en texto plano con símbolos Unicode (², √, ×, ÷, π). No uses LaTeX ni Markdown.
- Sé riguroso: una sola respuesta correcta y verificable. No inventes datos, fechas ni nombres.
- IDIOMA: TODO el texto va en español de Colombia: enunciados, opciones, respuestas, explicaciones y pistas. Nunca escribas una pregunta en inglés ni en otro idioma.
- En la asignatura de Inglés, las instrucciones y las explicaciones también van en español; solo las palabras, frases u oraciones que se están estudiando van en inglés y entre comillas (por ejemplo: ¿Cuál es la forma correcta de completar "She ___ to school every day"?). Las opciones pueden ser palabras o frases en inglés, porque son lo que se evalúa.`;

function pedido({ tema, area, grado, cantidad, leccion, evitar = [] }) {
    let base = '';
    if (leccion) {
        const resumen = {
            resumen: leccion.resumen,
            partes: leccion.partes.map((p) => ({ titulo: p.titulo, explicacion: p.explicacion, ejemplo: p.ejemplo, idea_clave: p.idea_clave })),
            tarjetas: leccion.tarjetas,
        };
        base = `\n\nEste es el contenido que el estudiante acaba de estudiar. Las preguntas deben poder resolverse con él:\n${JSON.stringify(resumen)}`;
    }
    return `Crea EXACTAMENTE ${cantidad} preguntas de práctica sobre el tema "${tema}" de la asignatura ${area}, grado ${grado}°. Escribe todo en español.${base}${bloqueEvitar(evitar)}`;
}

// Preguntas que el tema ya tiene: las nuevas deben ser distintas
function bloqueEvitar(evitar) {
    if (!evitar.length) return '';
    return '\n\nEste tema YA tiene las preguntas de abajo. Las nuevas deben ser DISTINTAS: otro enfoque, otros ejemplos y otros datos. No repitas ni reformules ninguna:\n'
        + evitar.slice(0, 60).map((e) => '- ' + e.slice(0, 140)).join('\n');
}

/* ---------- limpieza ---------- */
const limpiar = (s) => String(s ?? '').trim().replace(/\s+/g, ' ');
const clave = (s) => limpiar(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const PUNTOS = { 1: 10, 2: 15, 3: 20 };

function limpiarPregunta(p) {
    const enunciado = limpiar(p.enunciado).slice(0, 500);
    const explicacion = limpiar(p.explicacion).slice(0, 700);
    if (!enunciado || !explicacion) return null;
    const dificultad = Math.min(3, Math.max(1, Math.round(Number(p.dificultad)) || 2));
    const pistas = (p.pistas || []).map((x) => limpiar(x).slice(0, 250)).filter(Boolean).slice(0, 3);
    const base = { enunciado, explicacion, dificultad, pistas };

    if (p.tipo === 'opcion_multiple') {
        const vistas = new Set();
        const opciones = [];
        for (const o of p.opciones || []) {
            const texto = limpiar(o).slice(0, 200);
            if (texto && !vistas.has(clave(texto))) { vistas.add(clave(texto)); opciones.push(texto); }
        }
        const correcta = opciones.find((o) => clave(o) === clave(p.respuesta_correcta));
        if (opciones.length < 3 || opciones.length > 5 || !correcta) return null;
        return { ...base, tipo: 'opcion_multiple', opciones, respuesta_correcta: correcta, aceptadas: [] };
    }
    if (p.tipo === 'verdadero_falso') {
        const c = clave(p.respuesta_correcta);
        const verdadero = ['verdadero', 'true', 'v', 'cierto'].includes(c);
        const falso = ['falso', 'false', 'f'].includes(c);
        if (!verdadero && !falso) return null;
        return { ...base, tipo: 'verdadero_falso', opciones: ['Verdadero', 'Falso'], respuesta_correcta: verdadero ? 'Verdadero' : 'Falso', aceptadas: [] };
    }
    if (p.tipo === 'respuesta_corta') {
        const respuesta = limpiar(p.respuesta_correcta).slice(0, 120);
        if (!respuesta) return null;
        const vistas = new Set();
        const aceptadas = [];
        for (const a of [respuesta, ...(p.respuestas_aceptadas || [])]) {
            const texto = limpiar(a).slice(0, 120);
            if (texto && !vistas.has(clave(texto))) { vistas.add(clave(texto)); aceptadas.push(texto); }
        }
        return { ...base, tipo: 'respuesta_corta', opciones: [], respuesta_correcta: respuesta, aceptadas: aceptadas.slice(0, 6) };
    }
    return null;
}

/* ---------- base de datos ---------- */
export async function obtenerReto(idTema) {
    const [filas] = await connection.query(
        `SELECT r.id_reto, r.titulo, COUNT(p.id_pregunta) AS total
         FROM retos r LEFT JOIN preguntas p ON p.id_reto = r.id_reto
         WHERE r.id_tema = ? AND r.activo = 1
         GROUP BY r.id_reto, r.titulo HAVING total > 0 ORDER BY r.id_reto LIMIT 1`,
        [idTema],
    );
    return filas[0] ? { id: filas[0].id_reto, titulo: filas[0].titulo, total: Number(filas[0].total) } : null;
}

// Guarda preguntas (con sus opciones y pistas) dentro de un reto, a partir del número de orden indicado
async function insertarPreguntas(con, idReto, preguntas, ordenInicial) {
    let orden = ordenInicial;
    for (const p of preguntas) {
        const [fila] = await con.query(
            `INSERT INTO preguntas (id_reto, enunciado, tipo, respuesta_correcta, explicacion_paso_a_paso, orden, puntos)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [idReto, p.enunciado, p.tipo, p.respuesta_correcta, p.explicacion, orden++, PUNTOS[p.dificultad]],
        );
        // opción múltiple y verdadero/falso: una fila por opción. Respuesta corta: las respuestas aceptadas.
        const filasOpcion = p.tipo === 'respuesta_corta'
            ? p.aceptadas.map((t) => [fila.insertId, t, 1])
            : p.opciones.map((t) => [fila.insertId, t, clave(t) === clave(p.respuesta_correcta) ? 1 : 0]);
        for (const f of filasOpcion) {
            await con.query('INSERT INTO opciones_respuesta (id_pregunta, texto, es_correcta) VALUES (?, ?, ?)', f);
        }
        let n = 1;
        for (const texto of p.pistas) {
            await con.query('INSERT INTO pistas (id_pregunta, texto, orden) VALUES (?, ?, ?)', [fila.insertId, texto, n++]);
        }
    }
}

async function guardarReto(tema, preguntas) {
    const con = await connection.getConnection();
    try {
        await con.beginTransaction();
        const total = preguntas.reduce((s, p) => s + PUNTOS[p.dificultad], 0);
        const [reto] = await con.query(
            'INSERT INTO retos (id_tema, titulo, descripcion, nivel_dificultad, puntos_recompensa) VALUES (?, ?, ?, 2, ?)',
            [tema.id_tema, `Juego: ${tema.nombre}`.slice(0, 150), `Preguntas de práctica de ${tema.nombre}`, total],
        );
        await insertarPreguntas(con, reto.insertId, preguntas, 1);
        await con.commit();
        return reto.insertId;
    } catch (error) {
        await con.rollback();
        throw error;
    } finally {
        con.release();
    }
}

/* ---------- generación ---------- */

// Pide un lote de preguntas a la IA, con hasta 2 intentos si salen en inglés o con poca calidad.
// "evitar" son los enunciados que el tema ya tiene (para que las nuevas sean distintas).
async function generarLote({ tema, leccion, cantidad, minimo, evitar = [] }) {
    const exigeEspanol = !esAreaDeIngles(tema.area);
    let validas = [];
    let aviso = '';
    let uso = '';
    for (let intento = 1; intento <= 2 && validas.length < minimo; intento++) {
        // Esfuerzo bajo: es una tarea acotada y deja presupuesto para la respuesta.
        const respuesta = await generarJSON({
            sistema: SISTEMA(tema.grado),
            pedido: pedido({ tema: tema.nombre, area: tema.area, grado: tema.grado, cantidad, leccion, evitar }) + aviso,
            schema: PreguntasSchema,
            maxTokens: 16000,
            esfuerzo: 'low',
        });
        uso = respuesta.uso;

        let candidatas = respuesta.data.preguntas.map(limpiarPregunta).filter(Boolean);
        if (exigeEspanol) {
            const enEspanol = candidatas.filter((p) => !estaEnIngles(p));
            if (enEspanol.length < candidatas.length) {
                console.warn(`  Tema ${tema.id_tema}: ${candidatas.length - enEspanol.length} pregunta(s) salieron en inglés y se descartaron.`);
            }
            candidatas = enEspanol;
        }
        if (evitar.length) candidatas = candidatas.filter((p) => !seParece(p.enunciado, evitar));
        candidatas = candidatas
            .sort((a, b) => a.dificultad - b.dificultad)   // de fácil a difícil (el orden es estable)
            .slice(0, cantidad);

        validas = await revisar(tema, leccion, candidatas);
        aviso = '\n\nIMPORTANTE: el intento anterior no fue aceptable (preguntas en inglés, repetidas o con errores). Escribe ABSOLUTAMENTE TODO en español y que sean distintas a las ya existentes.';
    }
    return { validas, uso };
}

// ¿Este enunciado es igual o casi igual a alguno que ya existe?
const palabrasClave = (t) => new Set(clave(t).replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((w) => w.length > 2));
export function seParece(enunciado, existentes) {
    const a = palabrasClave(enunciado);
    if (!a.size) return false;
    return existentes.some((e) => {
        const b = palabrasClave(e);
        let comunes = 0;
        for (const w of a) if (b.has(w)) comunes++;
        return comunes / (a.size + b.size - comunes) >= 0.7;   // Jaccard
    });
}

export async function generarPreguntas(idTema) {
    const tema = await cargarTema(idTema);
    if (!tema) throw new ErrorContenido('Tema no encontrado.');
    if (await obtenerReto(idTema)) return;

    const leccion = await leerContenido(idTema);
    const cantidad = leccion?.numPreguntas || 10;
    const minimo = Math.min(5, cantidad);

    const { validas, uso } = await generarLote({ tema, leccion, cantidad, minimo });
    if (validas.length < minimo) {
        throw new ErrorContenido('La IA no devolvió suficientes preguntas confiables. Intenta de nuevo.');
    }

    if (await obtenerReto(idTema)) return;   // otra petición pudo terminar antes
    await guardarReto(tema, validas);
    console.log(`Preguntas listas: tema ${idTema} "${tema.nombre}" (${validas.length} de ${cantidad} pedidas; ${uso})`);
}

/* ---------- el banco de preguntas crece solo ----------
   Cada partida usa unas pocas preguntas del banco del tema. Para que las partidas no se repitan,
   cuando a una cuenta le quedan pocas preguntas sin ver, se piden en segundo plano más preguntas
   NUEVAS (distintas a las que ya existen) hasta un máximo. */
const FACTOR_MAXIMO = 5;      // el banco llega a tener hasta 5 partidas distintas por tema
const PARTIDAS_FRESCAS = 2;   // se intenta que a cada cuenta le queden al menos 2 partidas sin ver

export async function ampliarBanco(idTema) {
    const tema = await cargarTema(idTema);
    const reto = await obtenerReto(idTema);
    if (!tema || !reto) return;

    const leccion = await leerContenido(idTema);
    const cantidad = leccion?.numPreguntas || 10;
    if (reto.total >= cantidad * FACTOR_MAXIMO) return;

    const [existentes] = await connection.query('SELECT enunciado FROM preguntas WHERE id_reto = ?', [reto.id]);
    const evitar = existentes.map((e) => e.enunciado);
    const { validas, uso } = await generarLote({ tema, leccion, cantidad, minimo: Math.min(3, cantidad), evitar });
    if (validas.length < 3) throw new ErrorContenido('La IA no devolvió suficientes preguntas nuevas.');

    const con = await connection.getConnection();
    try {
        await con.beginTransaction();
        const [[{ maximo }]] = await con.query('SELECT COALESCE(MAX(orden), 0) AS maximo FROM preguntas WHERE id_reto = ?', [reto.id]);
        await insertarPreguntas(con, reto.id, validas, Number(maximo) + 1);
        await con.commit();
    } catch (error) {
        await con.rollback();
        throw error;
    } finally {
        con.release();
    }
    console.log(`Banco ampliado: tema ${idTema} "${tema.nombre}" +${validas.length} preguntas nuevas (${reto.total + validas.length} en total; ${uso})`);
}

const ampliando = new Map();
const fallosAmpliar = new Map();

export function iniciarAmpliacion(idTema) {
    if (ampliando.has(idTema)) return;
    const fallo = fallosAmpliar.get(idTema);
    if (fallo && fallo > Date.now()) return;
    const trabajo = conLimite(() => ampliarBanco(idTema))
        .catch((error) => {
            console.error(`No se pudo ampliar el banco del tema ${idTema}:`, error.message);
            fallosAmpliar.set(idTema, Date.now() + 5 * 60_000);   // se reintenta en 5 minutos
        })
        .finally(() => ampliando.delete(idTema));
    ampliando.set(idTema, trabajo);
}

/** Se llama al empezar una partida: si a esta cuenta le quedan pocas preguntas sin ver, pide más. */
export async function considerarAmpliar(idTema, idUsuario, idReto) {
    if (!hayIA()) return;
    const [[{ cantidad }]] = await connection.query(
        'SELECT COALESCE(ct.num_preguntas, 10) AS cantidad FROM retos r LEFT JOIN contenido_tema ct ON ct.id_tema = r.id_tema WHERE r.id_reto = ?', [idReto]);
    const [[{ total }]] = await connection.query('SELECT COUNT(*) AS total FROM preguntas WHERE id_reto = ?', [idReto]);
    if (Number(total) >= Number(cantidad) * FACTOR_MAXIMO) return;
    const [[{ vistas }]] = await connection.query(
        `SELECT COUNT(DISTINCT r.id_pregunta) AS vistas
         FROM respuestas_estudiante r JOIN intentos_reto i ON i.id_intento = r.id_intento
         JOIN preguntas p ON p.id_pregunta = r.id_pregunta
         WHERE i.id_estudiante = ? AND p.id_reto = ? AND r.num_intento_pregunta >= 1`, [idUsuario, idReto]);
    const frescas = Number(total) - Number(vistas);
    if (frescas >= Number(cantidad) * PARTIDAS_FRESCAS) return;
    iniciarAmpliacion(idTema);
}

/* ---------- idioma: fuera de la asignatura de Inglés, todo debe estar en español ---------- */
export const esAreaDeIngles = (area) => /^ingl/i.test(String(area || '').normalize('NFD').replace(/[̀-ͯ]/g, ''));

// Palabras muy frecuentes del inglés que NO existen en español
const PALABRAS_INGLES = new Set(('the of is are what which does not to and in for with that this from when then be by it or than where how why '
    + 'can will has have following correct approaches limit answer value number which its their these those would should').split(' '));

export function pareceIngles(texto) {
    // se quitan los fragmentos entre comillas o `código`: pueden citar palabras en otro idioma a propósito
    const sinCitas = String(texto || '').replace(/"[^"]*"|“[^”]*”|«[^»]*»|`[^`]*`|'[^']*'/g, ' ');
    const palabras = sinCitas.toLowerCase().match(/\p{L}+/gu) || [];
    if (palabras.length < 3) return false;
    const coincidencias = palabras.filter((p) => PALABRAS_INGLES.has(p)).length;
    return coincidencias >= 2 && coincidencias / palabras.length >= 0.2;
}

const estaEnIngles = (p) => pareceIngles(p.enunciado) || pareceIngles(p.explicacion) || p.pistas.some(pareceIngles);

/* ---------- segunda pasada: la IA revisa su propio trabajo ---------- */
const RevisionSchema = z.object({
    revision: z.array(z.object({
        n: z.number(),
        valida: z.boolean(),
        motivo: z.string(),
    })),
});

const SISTEMA_REVISION = `Eres un revisor académico muy estricto. Recibes preguntas de práctica para estudiantes colombianos con la respuesta que se considera correcta.
Marca valida=false si ocurre cualquiera de estas cosas:
- La respuesta marcada como correcta es incorrecta o discutible.
- Hay más de una respuesta correcta posible, o ninguna.
- Contiene un dato, una fecha, un nombre o una fórmula dudosa o inventada.
- El enunciado es ambiguo, confuso o no se puede resolver con el contenido estudiado.
- La explicación contradice la respuesta.
- El enunciado, las pistas o la explicación no están en español (solo se permiten en inglés las palabras o frases entre comillas que se están estudiando en la asignatura de Inglés).
Si todo está bien, valida=true. En "motivo" escribe una frase corta. Devuelve una entrada por cada pregunta, con su número n.`;

async function revisar(tema, leccion, preguntas) {
    if (process.env.IA_REVISAR === '0') return preguntas;
    try {
        const lista = preguntas.map((p, i) => ({
            n: i + 1,
            tipo: p.tipo,
            enunciado: p.enunciado,
            opciones: p.opciones,
            respuesta_correcta: p.respuesta_correcta,
            explicacion: p.explicacion,
        }));
        const base = leccion
            ? `\n\nContenido que el estudiante estudió:\n${JSON.stringify({ resumen: leccion.resumen, partes: leccion.partes.map((p) => ({ titulo: p.titulo, explicacion: p.explicacion, ejemplo: p.ejemplo })) })}`
            : '';
        const { data } = await generarJSON({
            sistema: SISTEMA_REVISION,
            pedido: `Tema: "${tema.nombre}" (${tema.area}, ${tema.grado}°).${base}\n\nPreguntas a revisar:\n${JSON.stringify(lista)}`,
            schema: RevisionSchema,
            maxTokens: 8000,
            esfuerzo: 'low',
        });
        const malas = new Set(data.revision.filter((r) => r.valida === false).map((r) => r.n));
        for (const r of data.revision) if (r.valida === false) console.warn(`  Pregunta descartada (tema ${tema.id_tema}, #${r.n}): ${r.motivo}`);
        return preguntas.filter((_, i) => !malas.has(i + 1));
    } catch (error) {
        // Si la revisión falla (por ejemplo por límite de uso), no se bloquea el juego: se usan las preguntas tal cual.
        console.warn(`No se pudo revisar las preguntas del tema ${tema.id_tema}: ${error.message}`);
        return preguntas;
    }
}

const enCurso = new Map();
const fallos = new Map();
const ESPERA_TRAS_FALLO_MS = 60_000;

export function estadoPreguntas(idTema) {
    if (enCurso.has(idTema)) return 'generando';
    const fallo = fallos.get(idTema);
    if (fallo && fallo.hasta > Date.now()) return { error: fallo.mensaje };
    return null;
}

export function iniciarGeneracionPreguntas(idTema) {
    if (enCurso.has(idTema)) return;
    fallos.delete(idTema);
    const trabajo = conLimite(() => generarPreguntas(idTema))
        .catch((error) => {
            console.error(`Error generando preguntas del tema ${idTema}:`, error.message);
            fallos.set(idTema, { mensaje: mensajeDeError(error), hasta: Date.now() + ESPERA_TRAS_FALLO_MS });
        })
        .finally(() => enCurso.delete(idTema));
    enCurso.set(idTema, trabajo);
}
