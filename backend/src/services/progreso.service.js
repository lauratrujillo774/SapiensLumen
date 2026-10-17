import { connection } from '../config/mysql/dbmysql.js';
import { AREAS } from '../data/curriculo.js';
import { listarLogros } from './logros.service.js';

/* Progreso real del estudiante, calculado desde la base de datos. */

const claveDeArea = (nombre) => Object.entries(AREAS).find(([, a]) => a.nombre === nombre)?.[0] || null;

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

// Un tema cuenta como "dominado" con 60 % de dominio o más (igual que en el juego)
const DOMINIO_MINIMO = 60;

export async function leerProgreso(idUsuario, grado = null) {
    await connection.query('INSERT IGNORE INTO perfil_gamificacion (id_estudiante) VALUES (?)', [idUsuario]);
    const [[perfil]] = await connection.query('SELECT * FROM perfil_gamificacion WHERE id_estudiante = ?', [idUsuario]);

    const [[totales]] = await connection.query(
        `SELECT COUNT(*) AS retos, COALESCE(SUM(aciertos), 0) AS aciertos, COALESCE(SUM(aciertos + errores), 0) AS respondidas
         FROM intentos_reto WHERE id_estudiante = ? AND estado = 'completado'`,
        [idUsuario],
    );

    // Avance por materia del grado del estudiante (o de todos los grados si no se conoce)
    const filtroGrado = grado ? 'AND t.grado = ?' : '';
    const [materias] = await connection.query(
        `SELECT a.id_area, a.nombre,
                COUNT(DISTINCT t.id_tema) AS temas_total,
                COUNT(DISTINCT CASE WHEN d.id_tema IS NOT NULL THEN t.id_tema END) AS temas_jugados,
                COUNT(DISTINCT CASE WHEN d.porcentaje_dominio >= ${DOMINIO_MINIMO} THEN t.id_tema END) AS temas_dominados,
                COALESCE(AVG(d.porcentaje_dominio), 0) AS dominio_promedio
         FROM areas_academicas a
         JOIN temas t ON t.id_area = a.id_area ${filtroGrado}
         LEFT JOIN desempeno_tema d ON d.id_tema = t.id_tema AND d.id_estudiante = ?
         GROUP BY a.id_area, a.nombre
         HAVING temas_total > 0
         ORDER BY a.id_area`,
        grado ? [String(grado), idUsuario] : [idUsuario],
    );

    const [debiles] = await connection.query(
        `SELECT t.id_tema, t.nombre, t.grado, a.nombre AS area, d.porcentaje_dominio
         FROM desempeno_tema d JOIN temas t ON t.id_tema = d.id_tema JOIN areas_academicas a ON a.id_area = t.id_area
         WHERE d.id_estudiante = ? AND d.es_tema_debil = 1 ORDER BY d.porcentaje_dominio LIMIT 5`,
        [idUsuario],
    );

    const [actividad] = await connection.query(
        `SELECT DATE_FORMAT(DATE(fecha), '%Y-%m-%d') AS dia, SUM(puntos) AS puntos
         FROM movimientos_puntos WHERE id_estudiante = ? AND fecha >= DATE_SUB(CURDATE(), INTERVAL 13 DAY)
         GROUP BY dia ORDER BY dia`,
        [idUsuario],
    );

    const [recientes] = await connection.query(
        `SELECT i.id_intento, i.fecha_fin, i.puntaje_obtenido, i.aciertos, i.errores, t.id_tema, t.nombre AS tema, a.nombre AS area
         FROM intentos_reto i JOIN retos r ON r.id_reto = i.id_reto JOIN temas t ON t.id_tema = r.id_tema JOIN areas_academicas a ON a.id_area = t.id_area
         WHERE i.id_estudiante = ? AND i.estado = 'completado' ORDER BY i.fecha_fin DESC LIMIT 5`,
        [idUsuario],
    );

    const logros = await listarLogros(idUsuario);
    const respondidas = Number(totales.respondidas);

    const porMateria = materias.map((m) => {
        const total = Number(m.temas_total);
        const dominados = Number(m.temas_dominados);
        return {
            id: m.id_area,
            nombre: m.nombre,
            clave: claveDeArea(m.nombre),
            temasTotal: total,
            temasJugados: Number(m.temas_jugados),
            temasDominados: dominados,
            dominioPromedio: Math.round(Number(m.dominio_promedio)),
            porcentaje: Math.round((dominados / total) * 100),
        };
    });
    const sumaTotal = porMateria.reduce((s, m) => s + m.temasTotal, 0);
    const sumaDominados = porMateria.reduce((s, m) => s + m.temasDominados, 0);

    return {
        grado: grado || null,
        puntosTotales: perfil.puntos_totales,
        racha: perfil.racha_actual,
        rachaMaxima: perfil.racha_maxima,
        nivel: await describirNivel(perfil.puntos_totales),
        retosCompletados: Number(totales.retos),
        aciertos: Number(totales.aciertos),
        respondidas,
        porcentajeAciertos: respondidas ? Math.round((Number(totales.aciertos) / respondidas) * 100) : 0,
        temasTotal: sumaTotal,
        temasDominados: sumaDominados,
        temasJugados: porMateria.reduce((s, m) => s + m.temasJugados, 0),
        porcentajeGeneral: sumaTotal ? Math.round((sumaDominados / sumaTotal) * 100) : 0,
        materias: porMateria,
        temasParaReforzar: debiles.map((d) => ({ id: d.id_tema, nombre: d.nombre, grado: d.grado, area: d.area, dominio: Math.round(Number(d.porcentaje_dominio)) })),
        actividad: actividad.map((a) => ({ dia: a.dia, puntos: Number(a.puntos) })),
        recientes: recientes.map((r) => ({ id: r.id_intento, tema: r.tema, idTema: r.id_tema, area: r.area, puntos: r.puntaje_obtenido, aciertos: r.aciertos, errores: r.errores, fecha: r.fecha_fin })),
        insignias: { obtenidas: logros.filter((l) => l.obtenida).length, total: logros.length },
    };
}
