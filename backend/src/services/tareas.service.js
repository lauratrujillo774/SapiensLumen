import { connection } from '../config/mysql/dbmysql.js';
import { notificar } from './notificaciones.service.js';

/* ============================================================
   Tareas automáticas (cada pocas horas, mientras el servidor esté encendido):
   - Recordatorio: si el estudiante lleva 3 días o más sin jugar (máximo 1 cada 7 días).
   - Resumen semanal: solo a quien lo activó en Ajustes (1 cada 7 días).
   Ambos respetan los ajustes de cada usuario.
   ============================================================ */

const DIAS_SIN_JUGAR = 3;
const LOTE = 200;

async function recordatorios() {
    const [filas] = await connection.query(
        `SELECT u.id_usuario, u.nombre,
                DATEDIFF(CURDATE(), COALESCE(p.ultima_actividad, DATE(u.fecha_registro))) AS dias,
                p.ultima_actividad IS NULL AS nunca
         FROM usuarios u
         LEFT JOIN perfil_gamificacion p ON p.id_estudiante = u.id_usuario
         LEFT JOIN ajustes_usuario a ON a.id_usuario = u.id_usuario
         WHERE u.activo = 1 AND u.id_rol = 1
           AND COALESCE(a.notif_recordatorios, 1) = 1
           AND (a.ultimo_recordatorio IS NULL OR a.ultimo_recordatorio <= DATE_SUB(CURDATE(), INTERVAL 7 DAY))
           AND DATEDIFF(CURDATE(), COALESCE(p.ultima_actividad, DATE(u.fecha_registro))) >= ?
         LIMIT ?`,
        [DIAS_SIN_JUGAR, LOTE],
    );
    for (const f of filas) {
        const mensaje = f.nunca
            ? 'Aún no has jugado ninguna vez. ¡Elige un tema y gana tus primeros puntos!'
            : `Llevas ${f.dias} días sin estudiar. ¡Un juego corto basta para mantener tu racha!`;
        await connection.query('INSERT INTO ajustes_usuario (id_usuario, ultimo_recordatorio) VALUES (?, CURDATE()) ON DUPLICATE KEY UPDATE ultimo_recordatorio = CURDATE()', [f.id_usuario]);
        await notificar(f.id_usuario, {
            tipo: 'recordatorio',
            titulo: `${f.nombre}, ¡te extrañamos! 🦆`,
            mensaje,
            url: '/cursos/cursos.html',
            correo: {
                asunto: `${f.nombre}, ¡Quacky te extraña en Sapiens Lumen!`,
                parrafos: [`Hola ${f.nombre}, ${mensaje}`],
                boton: { texto: 'Seguir aprendiendo', url: '/cursos/cursos.html' },
            },
        });
    }
    return filas.length;
}

async function resumenesSemanales() {
    const [filas] = await connection.query(
        `SELECT u.id_usuario, u.nombre
         FROM usuarios u JOIN ajustes_usuario a ON a.id_usuario = u.id_usuario
         WHERE u.activo = 1 AND a.notif_semanal = 1
           AND (a.ultimo_resumen IS NULL OR a.ultimo_resumen <= DATE_SUB(CURDATE(), INTERVAL 7 DAY))
         LIMIT ?`,
        [LOTE],
    );
    for (const f of filas) {
        const [[s]] = await connection.query(
            `SELECT COUNT(*) AS retos, COALESCE(SUM(puntaje_obtenido), 0) AS puntos
             FROM intentos_reto WHERE id_estudiante = ? AND estado = 'completado' AND fecha_fin >= DATE_SUB(NOW(), INTERVAL 7 DAY)`,
            [f.id_usuario],
        );
        const [[p]] = await connection.query('SELECT racha_actual FROM perfil_gamificacion WHERE id_estudiante = ?', [f.id_usuario]);
        const [[b]] = await connection.query('SELECT COUNT(*) AS n FROM estudiante_insignia WHERE id_estudiante = ? AND fecha_obtencion >= DATE_SUB(NOW(), INTERVAL 7 DAY)', [f.id_usuario]);

        await connection.query('UPDATE ajustes_usuario SET ultimo_resumen = CURDATE() WHERE id_usuario = ?', [f.id_usuario]);
        const resumen = Number(s.retos) === 0
            ? 'Esta semana no completaste juegos. ¡Esta puede ser la semana para retomar tu racha!'
            : `Esta semana completaste ${s.retos} juego(s) y ganaste ${s.puntos} puntos${Number(b.n) ? ` y ${b.n} insignia(s) nueva(s)` : ''}. Tu racha actual es de ${p?.racha_actual || 0} día(s).`;
        await notificar(f.id_usuario, {
            tipo: 'resumen',
            titulo: 'Tu resumen de la semana',
            mensaje: resumen,
            url: '/progreso/progreso.html',
            correo: {
                asunto: `📊 Tu resumen semanal en Sapiens Lumen`,
                parrafos: [`Hola ${f.nombre}, ${resumen}`],
                boton: { texto: 'Ver mi progreso', url: '/progreso/progreso.html' },
            },
        });
    }
    return filas.length;
}

export async function ejecutarTareas() {
    try {
        const r = await recordatorios();
        const w = await resumenesSemanales();
        if (r || w) console.log(`Tareas automáticas: ${r} recordatorio(s), ${w} resumen(es) semanal(es).`);
    } catch (error) {
        console.error('Error en las tareas automáticas:', error.message);
    }
}

export function iniciarTareas() {
    setTimeout(ejecutarTareas, 60_000).unref();
    setInterval(ejecutarTareas, 6 * 60 * 60 * 1000).unref();
}
