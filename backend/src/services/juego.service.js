import { connection } from '../config/mysql/dbmysql.js';
import { evaluarInsignias } from './logros.service.js';
import { emitirEvento } from './n8n.service.js';

/* ============================================================
   Lógica del juego. Todo se califica AQUÍ, en el servidor:
   al navegador nunca le llega cuál es la respuesta correcta antes de responder.

   Reglas (pensadas para jugar sin presión):
   - Sin tiempo límite.
   - Opción múltiple y respuesta corta: 2 intentos. Verdadero/falso: 1.
   - Cada pregunta vale 10, 15 o 20 puntos según su dificultad.
   - Segundo intento: la mitad de los puntos. Cada pista: -2 puntos (mínimo 1).
   - Racha: acertar a la primera y sin pistas, varias veces seguidas, da +2 por cada
     acierto de la racha (máximo +10).
   - Terminar el juego da +10.
   ============================================================ */

export class ErrorJuego extends Error {
    constructor(mensaje, estado = 400) { super(mensaje); this.estado = estado; }
}

const maxIntentos = (tipo) => (tipo === 'verdadero_falso' ? 1 : 2);
const BONO_FINAL = 10;

/* ---------- comparar respuestas cortas ---------- */
function normalizarRespuesta(s) {
    return String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
        .replace(/(\d),(\d)/g, '$1.$2')   // 3,5 -> 3.5
        .replace(/[\s"'`´]/g, '')
        .replace(/^[a-z]=/, '')           // "x=5" -> "5"
        .replace(/[.;:!?]+$/, '');
}
function respuestasIguales(a, b) {
    const x = normalizarRespuesta(a), y = normalizarRespuesta(b);
    if (!x || !y) return false;
    if (x === y) return true;
    const nx = Number(x), ny = Number(y);
    return Number.isFinite(nx) && Number.isFinite(ny) && Math.abs(nx - ny) < 1e-9;
}

function mezclar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

/* ---------- acceso a datos ---------- */
async function cargarIntento(idIntento, idUsuario) {
    const [filas] = await connection.query(
        `SELECT i.id_intento, i.id_reto, i.estado, r.id_tema, r.titulo
         FROM intentos_reto i JOIN retos r ON r.id_reto = i.id_reto
         WHERE i.id_intento = ? AND i.id_estudiante = ?`,
        [idIntento, idUsuario],
    );
    if (!filas[0]) throw new ErrorJuego('Partida no encontrada.', 404);
    return filas[0];
}

// Las preguntas que le tocaron a ESTA partida (las partidas anteriores a este cambio usan todas las del reto)
async function preguntasDelIntento(idIntento, idReto, columnas = 'p.*') {
    const [propias] = await connection.query(
        `SELECT ${columnas} FROM intento_preguntas ip JOIN preguntas p ON p.id_pregunta = ip.id_pregunta
         WHERE ip.id_intento = ? ORDER BY ip.orden`,
        [idIntento],
    );
    if (propias.length) return propias;
    const [todas] = await connection.query(`SELECT ${columnas} FROM preguntas p WHERE p.id_reto = ? ORDER BY p.orden`, [idReto]);
    return todas;
}

async function cargarPregunta(idPregunta, idIntento, idReto) {
    const permitidas = await preguntasDelIntento(idIntento, idReto, 'p.id_pregunta');
    if (!permitidas.some((p) => p.id_pregunta === idPregunta)) throw new ErrorJuego('Pregunta no encontrada.', 404);
    const [filas] = await connection.query('SELECT * FROM preguntas WHERE id_pregunta = ?', [idPregunta]);
    if (!filas[0]) throw new ErrorJuego('Pregunta no encontrada.', 404);
    return filas[0];
}

/* ---------- elegir las preguntas de cada partida ---------- */
// Cuántas preguntas tiene una partida de este tema (según lo amplio del tema)
export async function cantidadPorPartida(idReto) {
    const [filas] = await connection.query(
        'SELECT ct.num_preguntas FROM retos r LEFT JOIN contenido_tema ct ON ct.id_tema = r.id_tema WHERE r.id_reto = ?',
        [idReto],
    );
    return Number(filas[0]?.num_preguntas) || 10;
}

/**
 * Elige las preguntas de una partida nueva:
 * - primero las que esta cuenta MENOS ha visto (las nunca vistas van antes);
 * - entre iguales, al azar;
 * - al final se ordenan de más fácil a más difícil.
 */
async function elegirPreguntas(idUsuario, idReto, cantidad) {
    const [banco] = await connection.query(
        `SELECT p.id_pregunta, p.puntos, COALESCE(v.veces, 0) AS veces
         FROM preguntas p
         LEFT JOIN (
            SELECT r.id_pregunta, COUNT(DISTINCT r.id_intento) AS veces
            FROM respuestas_estudiante r JOIN intentos_reto i ON i.id_intento = r.id_intento
            WHERE i.id_estudiante = ? AND r.num_intento_pregunta >= 1
            GROUP BY r.id_pregunta
         ) v ON v.id_pregunta = p.id_pregunta
         WHERE p.id_reto = ?`,
        [idUsuario, idReto],
    );
    const elegidas = mezclar(banco)                       // el azar rompe los empates
        .sort((a, b) => a.veces - b.veces)                // menos vistas primero (la ordenación es estable)
        .slice(0, cantidad);
    return mezclar(elegidas).sort((a, b) => a.puntos - b.puntos).map((p) => p.id_pregunta);
}

async function respuestasDe(idIntento, idPregunta) {
    const [filas] = await connection.query(
        'SELECT * FROM respuestas_estudiante WHERE id_intento = ? AND id_pregunta = ? ORDER BY id_respuesta',
        [idIntento, idPregunta],
    );
    return { pistas: filas.find((f) => f.num_intento_pregunta === 0) || null, intentos: filas.filter((f) => f.num_intento_pregunta >= 1) };
}

// Cuántas preguntas seguidas (ya terminadas) se acertaron a la primera y sin pistas
async function rachaActual(idIntento) {
    const [filas] = await connection.query(
        `SELECT r.es_correcta, r.num_intento_pregunta AS n, r.pistas_usadas, p.tipo
         FROM respuestas_estudiante r JOIN preguntas p ON p.id_pregunta = r.id_pregunta
         WHERE r.id_intento = ? AND r.num_intento_pregunta >= 1 ORDER BY r.id_respuesta`,
        [idIntento],
    );
    let racha = 0;
    for (const f of filas) {
        const terminada = f.es_correcta || f.n >= maxIntentos(f.tipo);
        if (!terminada) continue;
        racha = f.es_correcta && f.n === 1 && f.pistas_usadas === 0 ? racha + 1 : 0;
    }
    return racha;
}

/* ---------- iniciar ---------- */
export async function iniciarIntento(idUsuario, idReto) {
    await connection.query(
        "UPDATE intentos_reto SET estado = 'abandonado', fecha_fin = NOW() WHERE id_estudiante = ? AND id_reto = ? AND estado = 'en_curso'",
        [idUsuario, idReto],
    );
    const [intento] = await connection.query('INSERT INTO intentos_reto (id_estudiante, id_reto) VALUES (?, ?)', [idUsuario, idReto]);

    // Cada partida toma un grupo distinto del banco de preguntas del tema
    const elegidas = await elegirPreguntas(idUsuario, idReto, await cantidadPorPartida(idReto));
    for (const [i, idPregunta] of elegidas.entries()) {
        await connection.query('INSERT INTO intento_preguntas (id_intento, id_pregunta, orden) VALUES (?, ?, ?)', [intento.insertId, idPregunta, i + 1]);
    }
    const [datos] = elegidas.length
        ? await connection.query('SELECT id_pregunta, enunciado, tipo, puntos FROM preguntas WHERE id_pregunta IN (?)', [elegidas])
        : [[]];
    const preguntas = elegidas.map((id) => datos.find((d) => d.id_pregunta === id));
    const ids = elegidas;
    const [opciones] = ids.length
        ? await connection.query('SELECT id_opcion, id_pregunta, texto FROM opciones_respuesta WHERE id_pregunta IN (?) ORDER BY id_opcion', [ids])
        : [[]];
    const [pistas] = ids.length
        ? await connection.query('SELECT id_pregunta, COUNT(*) AS n FROM pistas WHERE id_pregunta IN (?) GROUP BY id_pregunta', [ids])
        : [[]];

    return {
        intento: intento.insertId,
        preguntas: preguntas.map((p) => {
            const propias = opciones.filter((o) => o.id_pregunta === p.id_pregunta).map((o) => ({ id: o.id_opcion, texto: o.texto }));
            return {
                id: p.id_pregunta,
                tipo: p.tipo,
                enunciado: p.enunciado,
                puntos: p.puntos,
                // en respuesta corta las filas son las respuestas aceptadas: NO se envían
                opciones: p.tipo === 'opcion_multiple' ? mezclar(propias) : p.tipo === 'verdadero_falso' ? propias : [],
                numPistas: Number(pistas.find((x) => x.id_pregunta === p.id_pregunta)?.n || 0),
            };
        }),
    };
}

/* ---------- responder ---------- */
export async function responder(idUsuario, idIntento, { idPregunta, idOpcion, texto }) {
    const intento = await cargarIntento(idIntento, idUsuario);
    if (intento.estado !== 'en_curso') throw new ErrorJuego('Esta partida ya terminó.', 409);
    const pregunta = await cargarPregunta(Number(idPregunta), idIntento, intento.id_reto);

    const previas = await respuestasDe(idIntento, pregunta.id_pregunta);
    const maximo = maxIntentos(pregunta.tipo);
    if (previas.intentos.some((r) => r.es_correcta) || previas.intentos.length >= maximo) {
        throw new ErrorJuego('Esta pregunta ya se respondió.', 409);
    }

    let correcta = false;
    let opcionElegida = null;
    let textoRespuesta = null;
    if (pregunta.tipo === 'respuesta_corta') {
        textoRespuesta = String(texto ?? '').trim().slice(0, 120);
        if (!textoRespuesta) throw new ErrorJuego('Escribe tu respuesta.');
        const [aceptadas] = await connection.query('SELECT texto FROM opciones_respuesta WHERE id_pregunta = ? AND es_correcta = 1', [pregunta.id_pregunta]);
        correcta = aceptadas.some((a) => respuestasIguales(a.texto, textoRespuesta));
    } else {
        const [filas] = await connection.query('SELECT id_opcion, es_correcta FROM opciones_respuesta WHERE id_opcion = ? AND id_pregunta = ?', [Number(idOpcion), pregunta.id_pregunta]);
        if (!filas[0]) throw new ErrorJuego('Elige una opción.');
        opcionElegida = filas[0].id_opcion;
        correcta = Boolean(filas[0].es_correcta);
    }

    const numIntento = previas.intentos.length + 1;
    const pistas = previas.pistas ? previas.pistas.pistas_usadas : 0;

    let puntos = 0, bono = 0, racha = 0;
    if (correcta) {
        puntos = pregunta.puntos;
        if (numIntento > 1) puntos = Math.floor(puntos / 2);
        puntos = Math.max(1, puntos - 2 * pistas);
        if (numIntento === 1 && pistas === 0) {
            const previa = await rachaActual(idIntento);
            racha = previa + 1;
            bono = Math.min(previa, 5) * 2;
        }
    }

    await connection.query(
        `INSERT INTO respuestas_estudiante (id_intento, id_pregunta, id_opcion, respuesta_texto, es_correcta, puntaje, num_intento_pregunta, pistas_usadas)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [idIntento, pregunta.id_pregunta, opcionElegida, textoRespuesta, correcta ? 1 : 0, puntos + bono, numIntento, pistas],
    );

    const terminada = correcta || numIntento >= maximo;
    const respuesta = { correcta, intento: numIntento, puedeReintentar: !terminada, puntos, bono, racha };
    if (terminada) {
        respuesta.respuestaCorrecta = pregunta.respuesta_correcta;
        respuesta.explicacion = pregunta.explicacion_paso_a_paso;
    }
    return respuesta;
}

/* ---------- pistas ---------- */
export async function pedirPista(idUsuario, idIntento, idPregunta) {
    const intento = await cargarIntento(idIntento, idUsuario);
    if (intento.estado !== 'en_curso') throw new ErrorJuego('Esta partida ya terminó.', 409);
    const pregunta = await cargarPregunta(Number(idPregunta), idIntento, intento.id_reto);

    const { pistas: filaPistas, intentos } = await respuestasDe(idIntento, pregunta.id_pregunta);
    if (intentos.some((r) => r.es_correcta) || intentos.length >= maxIntentos(pregunta.tipo)) {
        throw new ErrorJuego('Esta pregunta ya se respondió.', 409);
    }

    const [lista] = await connection.query('SELECT id_pista, texto FROM pistas WHERE id_pregunta = ? ORDER BY orden', [pregunta.id_pregunta]);
    let fila = filaPistas;
    if (!fila) {
        const [nueva] = await connection.query(
            'INSERT INTO respuestas_estudiante (id_intento, id_pregunta, es_correcta, puntaje, num_intento_pregunta, pistas_usadas) VALUES (?, ?, 0, 0, 0, 0)',
            [idIntento, pregunta.id_pregunta],
        );
        fila = { id_respuesta: nueva.insertId, pistas_usadas: 0 };
    }
    const usadas = fila.pistas_usadas;
    if (usadas >= lista.length) throw new ErrorJuego('Ya no hay más pistas para esta pregunta.', 404);

    const siguiente = lista[usadas];
    await connection.query('INSERT INTO pistas_usadas (id_respuesta, id_pista) VALUES (?, ?)', [fila.id_respuesta, siguiente.id_pista]);
    await connection.query('UPDATE respuestas_estudiante SET pistas_usadas = ? WHERE id_respuesta = ?', [usadas + 1, fila.id_respuesta]);
    return { texto: siguiente.texto, numero: usadas + 1, total: lista.length };
}

/* ---------- perfil de gamificación ---------- */
async function asegurarPerfil(idUsuario) {
    await connection.query('INSERT IGNORE INTO perfil_gamificacion (id_estudiante) VALUES (?)', [idUsuario]);
    const [filas] = await connection.query(
        `SELECT p.*, DATE_FORMAT(p.ultima_actividad, '%Y-%m-%d') AS ultima, DATEDIFF(CURDATE(), p.ultima_actividad) AS dias
         FROM perfil_gamificacion p WHERE p.id_estudiante = ?`,
        [idUsuario],
    );
    return filas[0];
}

async function describirNivel(puntos) {
    const [niveles] = await connection.query('SELECT id_nivel, nombre, puntos_requeridos FROM niveles ORDER BY puntos_requeridos');
    let actual = niveles[0];
    for (const n of niveles) if (puntos >= n.puntos_requeridos) actual = n;
    const siguiente = niveles.find((n) => n.puntos_requeridos > puntos) || null;
    return {
        id: actual.id_nivel,
        nombre: actual.nombre,
        desde: actual.puntos_requeridos,
        siguiente: siguiente ? { nombre: siguiente.nombre, puntos: siguiente.puntos_requeridos } : null,
    };
}

export async function leerPerfil(idUsuario) {
    const p = await asegurarPerfil(idUsuario);
    const [[{ temas }]] = await connection.query(
        `SELECT COUNT(DISTINCT r.id_tema) AS temas FROM intentos_reto i JOIN retos r ON r.id_reto = i.id_reto
         WHERE i.id_estudiante = ? AND i.estado = 'completado'`,
        [idUsuario],
    );
    // Estrellas: la mejor de cada tema (90 % o más = 3, 70 % = 2, 40 % = 1), igual que al terminar una partida
    const [[{ estrellas }]] = await connection.query(
        `SELECT COALESCE(SUM(mejor), 0) AS estrellas FROM (
            SELECT r.id_tema, MAX(CASE
                WHEN i.aciertos + i.errores = 0 THEN 0
                WHEN ROUND(i.aciertos * 100 / (i.aciertos + i.errores)) >= 90 THEN 3
                WHEN ROUND(i.aciertos * 100 / (i.aciertos + i.errores)) >= 70 THEN 2
                WHEN ROUND(i.aciertos * 100 / (i.aciertos + i.errores)) >= 40 THEN 1
                ELSE 0 END) AS mejor
            FROM intentos_reto i JOIN retos r ON r.id_reto = i.id_reto
            WHERE i.id_estudiante = ? AND i.estado = 'completado'
            GROUP BY r.id_tema) t`,
        [idUsuario],
    );
    return {
        puntosTotales: p.puntos_totales,
        estrellas: Number(estrellas),
        racha: p.racha_actual,
        rachaMaxima: p.racha_maxima,
        temasJugados: Number(temas),
        nivel: await describirNivel(p.puntos_totales),
    };
}

/* ---------- finalizar ---------- */
export async function finalizar(idUsuario, idIntento) {
    const intento = await cargarIntento(idIntento, idUsuario);
    if (intento.estado === 'abandonado') throw new ErrorJuego('Esta partida ya no está activa.', 409);

    const preguntas = await preguntasDelIntento(idIntento, intento.id_reto, 'p.id_pregunta, p.tipo, p.enunciado, p.respuesta_correcta, p.explicacion_paso_a_paso');
    const [respuestas] = await connection.query(
        'SELECT * FROM respuestas_estudiante WHERE id_intento = ? AND num_intento_pregunta >= 1 ORDER BY id_respuesta',
        [idIntento],
    );

    let aciertos = 0, respondidas = 0, puntosRespuestas = 0;
    const repaso = [];
    for (const p of preguntas) {
        const propias = respuestas.filter((r) => r.id_pregunta === p.id_pregunta);
        if (propias.length) respondidas++;
        const acerto = propias.some((r) => r.es_correcta);
        if (acerto) aciertos++;
        puntosRespuestas += propias.reduce((s, r) => s + r.puntaje, 0);
        const primeraSinAyuda = propias[0] && propias[0].es_correcta && propias[0].pistas_usadas === 0;
        if (!primeraSinAyuda) {
            repaso.push({ pregunta: p.enunciado, respuestaCorrecta: p.respuesta_correcta, explicacion: p.explicacion_paso_a_paso, acerto });
        }
    }
    const total = preguntas.length;
    const completo = respondidas === total;
    const bono = completo ? BONO_FINAL : 0;
    const xp = puntosRespuestas + bono;
    const porcentaje = total ? Math.round((aciertos / total) * 100) : 0;
    const estrellas = porcentaje >= 90 ? 3 : porcentaje >= 70 ? 2 : porcentaje >= 40 ? 1 : 0;

    // Solo se suman puntos la primera vez que se cierra esta partida
    if (intento.estado === 'en_curso') {
        await connection.query(
            "UPDATE intentos_reto SET estado = 'completado', fecha_fin = NOW(), puntaje_obtenido = ?, aciertos = ?, errores = ? WHERE id_intento = ?",
            [xp, aciertos, total - aciertos, idIntento],
        );
        if (xp > 0) {
            await connection.query('INSERT INTO movimientos_puntos (id_estudiante, id_intento, puntos, concepto) VALUES (?, ?, ?, ?)',
                [idUsuario, idIntento, xp, intento.titulo.slice(0, 120)]);
        }

        const perfil = await asegurarPerfil(idUsuario);
        let racha = perfil.racha_actual;
        if (perfil.ultima === null) racha = 1;
        else if (perfil.dias === 0) racha = Math.max(1, racha);
        else if (perfil.dias === 1) racha += 1;
        else racha = 1;
        const puntosTotales = perfil.puntos_totales + xp;
        const nivel = await describirNivel(puntosTotales);
        await connection.query(
            'UPDATE perfil_gamificacion SET puntos_totales = ?, id_nivel = ?, racha_actual = ?, racha_maxima = ?, ultima_actividad = CURDATE() WHERE id_estudiante = ?',
            [puntosTotales, nivel.id, racha, Math.max(perfil.racha_maxima, racha), idUsuario],
        );

        // desempeño acumulado en el tema (para detectar temas débiles)
        const [prev] = await connection.query('SELECT total_respuestas, total_aciertos FROM desempeno_tema WHERE id_estudiante = ? AND id_tema = ?', [idUsuario, intento.id_tema]);
        const totalResp = (prev[0]?.total_respuestas || 0) + respondidas;
        const totalAc = (prev[0]?.total_aciertos || 0) + aciertos;
        const dominio = totalResp ? Math.round((totalAc / totalResp) * 10000) / 100 : 0;
        await connection.query(
            `INSERT INTO desempeno_tema (id_estudiante, id_tema, total_respuestas, total_aciertos, porcentaje_dominio, es_tema_debil)
             VALUES (?, ?, ?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE total_respuestas = VALUES(total_respuestas), total_aciertos = VALUES(total_aciertos),
                porcentaje_dominio = VALUES(porcentaje_dominio), es_tema_debil = VALUES(es_tema_debil)`,
            [idUsuario, intento.id_tema, totalResp, totalAc, dominio, totalResp >= 5 && dominio < 60 ? 1 : 0],
        );
    }

    // Insignias que se ganaron con esta partida (también avisan en la campana y por correo)
    const insigniasNuevas = intento.estado === 'en_curso' ? await evaluarInsignias(idUsuario).catch((e) => { console.error('Error evaluando insignias:', e.message); return []; }) : [];

    const perfil = await leerPerfil(idUsuario);
    if (intento.estado === 'en_curso') {
        emitirEvento('partida_finalizada', {
            usuario: { id: idUsuario }, idTema: intento.id_tema, total, aciertos, porcentaje, estrellas, xp,
            nivel: perfil.nivel, racha: perfil.racha, insignias: insigniasNuevas.map((i) => i.nombre || i),
        });
    }
    return {
        total, aciertos, errores: total - aciertos, porcentaje, estrellas, xp, bono,
        puntosTotales: perfil.puntosTotales, racha: perfil.racha, nivel: perfil.nivel,
        idTema: intento.id_tema, dominado: porcentaje >= 60, repaso, insigniasNuevas,
    };
}
