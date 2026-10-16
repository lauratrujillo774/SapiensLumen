import { connection } from '../config/mysql/dbmysql.js';
import { notificar } from './notificaciones.service.js';

/* ============================================================
   Logros = insignias de tu tabla `insignias`, otorgadas según lo que el estudiante hace.
   Se guardan en `estudiante_insignia`.

   tipo_condicion:
     cantidad_retos -> juegos terminados
     puntos         -> puntos totales
     racha          -> mejor racha de días seguidos
     nivel          -> nivel alcanzado
     area           -> materias distintas en las que ha jugado
   ============================================================ */

export async function metricasDe(idUsuario) {
    await connection.query('INSERT IGNORE INTO perfil_gamificacion (id_estudiante) VALUES (?)', [idUsuario]);
    const [[perfil]] = await connection.query(
        'SELECT puntos_totales, racha_actual, racha_maxima, id_nivel FROM perfil_gamificacion WHERE id_estudiante = ?',
        [idUsuario],
    );
    const [[retos]] = await connection.query(
        "SELECT COUNT(*) AS n FROM intentos_reto WHERE id_estudiante = ? AND estado = 'completado'",
        [idUsuario],
    );
    const [[areas]] = await connection.query(
        `SELECT COUNT(DISTINCT t.id_area) AS n
         FROM intentos_reto i JOIN retos r ON r.id_reto = i.id_reto JOIN temas t ON t.id_tema = r.id_tema
         WHERE i.id_estudiante = ? AND i.estado = 'completado'`,
        [idUsuario],
    );
    return {
        cantidad_retos: Number(retos.n),
        puntos: Number(perfil.puntos_totales),
        racha: Number(Math.max(perfil.racha_maxima, perfil.racha_actual)),
        nivel: Number(perfil.id_nivel),
        area: Number(areas.n),
    };
}

const ICONO_POR_TIPO = { cantidad_retos: '🎯', puntos: '⭐', racha: '🔥', nivel: '🏅', area: '🧭' };

/** Todas las insignias, con cuáles tiene el usuario y cuánto le falta para las demás. */
export async function listarLogros(idUsuario) {
    const metricas = await metricasDe(idUsuario);
    const [insignias] = await connection.query('SELECT * FROM insignias ORDER BY FIELD(tipo_condicion, "cantidad_retos","racha","puntos","nivel","area"), valor_condicion');
    const [tengo] = await connection.query('SELECT id_insignia, fecha_obtencion FROM estudiante_insignia WHERE id_estudiante = ?', [idUsuario]);
    const fechas = new Map(tengo.map((t) => [t.id_insignia, t.fecha_obtencion]));

    return insignias.map((i) => {
        const actual = metricas[i.tipo_condicion] ?? 0;
        const meta = Number(i.valor_condicion);
        const obtenida = fechas.has(i.id_insignia);
        return {
            id: i.id_insignia,
            nombre: i.nombre,
            descripcion: i.descripcion,
            icono: ICONO_POR_TIPO[i.tipo_condicion] || '🏆',
            tipo: i.tipo_condicion,
            meta,
            actual: Math.min(actual, meta),
            obtenida,
            fecha: obtenida ? fechas.get(i.id_insignia) : null,
        };
    });
}

/**
 * Otorga las insignias que ya se cumplen y avisa (campana y, si lo permite, correo).
 * Devuelve las NUEVAS.
 */
export async function evaluarInsignias(idUsuario) {
    const metricas = await metricasDe(idUsuario);
    const [pendientes] = await connection.query(
        'SELECT * FROM insignias WHERE id_insignia NOT IN (SELECT id_insignia FROM estudiante_insignia WHERE id_estudiante = ?)',
        [idUsuario],
    );
    const nuevas = [];
    for (const i of pendientes) {
        if ((metricas[i.tipo_condicion] ?? 0) < Number(i.valor_condicion)) continue;
        const [r] = await connection.query('INSERT IGNORE INTO estudiante_insignia (id_estudiante, id_insignia) VALUES (?, ?)', [idUsuario, i.id_insignia]);
        if (!r.affectedRows) continue;   // otra petición la otorgó antes
        nuevas.push({ id: i.id_insignia, nombre: i.nombre, descripcion: i.descripcion, icono: ICONO_POR_TIPO[i.tipo_condicion] || '🏆' });
        await notificar(idUsuario, {
            tipo: 'logro',
            titulo: `¡Nueva insignia: ${i.nombre}!`,
            mensaje: i.descripcion,
            url: '/logros/logros.html',
            correo: {
                asunto: `🏆 ¡Desbloqueaste la insignia "${i.nombre}"!`,
                parrafos: [`¡Felicitaciones! Ganaste la insignia <strong>${i.nombre}</strong>.`, i.descripcion],
                boton: { texto: 'Ver mis logros', url: '/logros/logros.html' },
            },
        });
    }
    return nuevas;
}
