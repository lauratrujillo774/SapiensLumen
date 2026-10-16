import { connection } from '../config/mysql/dbmysql.js';
import { enviarCorreo, plantilla, urlApp } from './correo.service.js';

/* ============================================================
   Notificaciones: aparecen en la campana y, si el usuario lo permite en Ajustes
   y el correo está configurado, también llegan a su correo registrado.
   ============================================================ */

// Qué ajuste controla cada tipo de aviso
const AJUSTE_POR_TIPO = {
    invitacion: 'notif_companeros',
    companero: 'notif_companeros',
    logro: 'notif_logros',
    recordatorio: 'notif_recordatorios',
    resumen: 'notif_semanal',
};

export const AJUSTES_PREDETERMINADOS = {
    notif_recordatorios: 1, notif_logros: 1, notif_semanal: 0, notif_companeros: 1, perfil_visible: 1, mostrar_ranking: 1,
};

export async function leerAjustes(idUsuario) {
    await connection.query('INSERT IGNORE INTO ajustes_usuario (id_usuario) VALUES (?)', [idUsuario]);
    const [filas] = await connection.query('SELECT * FROM ajustes_usuario WHERE id_usuario = ?', [idUsuario]);
    return filas[0];
}

/**
 * Crea la notificación y (según los ajustes) manda el correo.
 * @param {number} idUsuario destinatario
 * @param {{tipo:string, titulo:string, mensaje:string, url?:string, correo?:{asunto:string, parrafos:string[], boton?:{texto:string,url:string}, destacado?:string}}} datos
 */
export async function notificar(idUsuario, { tipo, titulo, mensaje, url = null, correo = null }) {
    try {
        const ajustes = await leerAjustes(idUsuario);
        const clave = AJUSTE_POR_TIPO[tipo];
        if (clave && !ajustes[clave]) return null;   // el usuario apagó este tipo de aviso

        const [r] = await connection.query(
            'INSERT INTO notificaciones (id_usuario, tipo, titulo, mensaje, url) VALUES (?, ?, ?, ?, ?)',
            [idUsuario, tipo, titulo.slice(0, 120), mensaje.slice(0, 300), url],
        );

        if (correo) {
            const [filas] = await connection.query('SELECT correo, nombre FROM usuarios WHERE id_usuario = ?', [idUsuario]);
            if (filas[0]) {
                // sin await: el correo no hace esperar a quien disparó la acción
                const boton = correo.boton ? { texto: correo.boton.texto, url: correo.boton.url.startsWith('http') ? correo.boton.url : urlApp() + correo.boton.url } : null;
                enviarCorreo({
                    para: filas[0].correo,
                    asunto: correo.asunto,
                    texto: [...correo.parrafos.map((p) => p.replace(/<[^>]+>/g, '')), correo.destacado ? `Código: ${correo.destacado}` : '', boton ? `${boton.texto}: ${boton.url}` : ''].filter(Boolean).join('\n\n'),
                    html: plantilla({ titulo: correo.asunto, parrafos: correo.parrafos, boton, destacado: correo.destacado }),
                });
            }
        }
        return r.insertId;
    } catch (error) {
        console.error('No se pudo crear la notificación:', error.message);
        return null;
    }
}

export async function listarNotificaciones(idUsuario, limite = 20) {
    const [filas] = await connection.query(
        'SELECT id_notificacion AS id, tipo, titulo, mensaje, url, leida, fecha FROM notificaciones WHERE id_usuario = ? ORDER BY fecha DESC, id_notificacion DESC LIMIT ?',
        [idUsuario, limite],
    );
    return filas.map((f) => ({ ...f, leida: Boolean(f.leida) }));
}

export async function resumenNotificaciones(idUsuario) {
    const [[{ noLeidas }]] = await connection.query('SELECT COUNT(*) AS noLeidas FROM notificaciones WHERE id_usuario = ? AND leida = 0', [idUsuario]);
    const [[{ invitaciones }]] = await connection.query("SELECT COUNT(*) AS invitaciones FROM companeros WHERE id_destinatario = ? AND estado = 'pendiente'", [idUsuario]);
    return { noLeidas: Number(noLeidas), invitacionesPendientes: Number(invitaciones) };
}

export async function marcarLeidas(idUsuario, id = null) {
    if (id) await connection.query('UPDATE notificaciones SET leida = 1 WHERE id_usuario = ? AND id_notificacion = ?', [idUsuario, id]);
    else await connection.query('UPDATE notificaciones SET leida = 1 WHERE id_usuario = ? AND leida = 0', [idUsuario]);
}
