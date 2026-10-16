import { randomInt } from 'node:crypto';
import { connection } from '../config/mysql/dbmysql.js';
import { leerAjustes, notificar } from './notificaciones.service.js';
import { leerProgreso } from './progreso.service.js';
import { listarLogros } from './logros.service.js';

/* ============================================================
   Compañeros
   - Para invitar hay que escribir el correo de alguien que YA tenga cuenta.
   - La otra persona recibe la invitación en su campana y en su correo (con un código).
   - Si la acepta, ambos se ven en "Compañeros": progreso, insignias y ranking
     (siempre respetando "Perfil visible" y "Mostrar en el ranking" de Ajustes).
   ============================================================ */

export class ErrorCompaneros extends Error {
    constructor(mensaje, estado = 400) { super(mensaje); this.estado = estado; }
}

const CORREO_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALFABETO = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // sin O/0 ni I/1 para que no se confundan

function nuevoCodigo() {
    let c = '';
    for (let i = 0; i < 8; i++) c += ALFABETO[randomInt(ALFABETO.length)];
    return c;
}

const nombreCorto = (u) => `${u.nombre} ${u.apellido ? u.apellido.charAt(0) + '.' : ''}`.trim();
const personaPublica = (f, prefijo = '') => ({
    id: f[`${prefijo}id_usuario`],
    nombre: f[`${prefijo}nombre`],
    apellido: f[`${prefijo}apellido`],
    foto_url: f[`${prefijo}foto_url`],
});

/* ---------- ayudas ---------- */
async function relacionEntre(a, b) {
    const [filas] = await connection.query(
        'SELECT * FROM companeros WHERE (id_solicitante = ? AND id_destinatario = ?) OR (id_solicitante = ? AND id_destinatario = ?) LIMIT 1',
        [a, b, b, a],
    );
    return filas[0] || null;
}

async function sonCompaneros(a, b) {
    const r = await relacionEntre(a, b);
    return Boolean(r && r.estado === 'aceptada');
}

/* ---------- 1) buscar: ¿existe la cuenta? ---------- */
export async function buscarPorCorreo(yo, correoBruto) {
    const correo = String(correoBruto || '').trim().toLowerCase();
    if (!CORREO_VALIDO.test(correo)) throw new ErrorCompaneros('Escribe un correo válido.');
    const [filas] = await connection.query('SELECT id_usuario, nombre, apellido, foto_url FROM usuarios WHERE correo = ? AND activo = 1 LIMIT 1', [correo]);
    const otro = filas[0];
    if (!otro) throw new ErrorCompaneros('No existe ninguna cuenta en Sapiens Lumen con ese correo. Pídele que se registre primero.', 404);
    if (otro.id_usuario === yo.id_usuario) throw new ErrorCompaneros('Ese es tu propio correo. Escribe el de tu compañero.');

    const rel = await relacionEntre(yo.id_usuario, otro.id_usuario);
    let estado = 'ninguna';
    if (rel?.estado === 'aceptada') estado = 'companero';
    else if (rel?.estado === 'pendiente') estado = rel.id_solicitante === yo.id_usuario ? 'enviada' : 'recibida';
    return { usuario: { ...personaPublica(otro), nombreCorto: nombreCorto(otro) }, estado };
}

/* ---------- 2) invitar ---------- */
export async function invitar(yo, correoBruto) {
    const { usuario, estado } = await buscarPorCorreo(yo, correoBruto);

    if (estado === 'companero') throw new ErrorCompaneros(`${usuario.nombre} ya es tu compañero.`, 409);
    if (estado === 'enviada') throw new ErrorCompaneros(`Ya le enviaste una invitación a ${usuario.nombre}. Espera su respuesta.`, 409);
    if (estado === 'recibida') {
        // ya te había invitado: ambos querían lo mismo, se acepta directamente
        const rel = await relacionEntre(yo.id_usuario, usuario.id);
        await responder(yo, rel.id_companero, true);
        return { aceptada: true, usuario, mensaje: `${usuario.nombre} ya te había invitado: ¡ahora son compañeros!` };
    }

    // pudo haber una invitación rechazada antes: se descarta para crear una nueva
    const previa = await relacionEntre(yo.id_usuario, usuario.id);
    if (previa) await connection.query('DELETE FROM companeros WHERE id_companero = ?', [previa.id_companero]);

    let codigo;
    for (let i = 0; i < 5; i++) {
        codigo = nuevoCodigo();
        try {
            await connection.query('INSERT INTO companeros (id_solicitante, id_destinatario, codigo) VALUES (?, ?, ?)', [yo.id_usuario, usuario.id, codigo]);
            break;
        } catch (e) {
            if (e.code !== 'ER_DUP_ENTRY' || i === 4) throw e;
        }
    }

    const quien = `${yo.nombre} ${yo.apellido || ''}`.trim();
    await notificar(usuario.id, {
        tipo: 'invitacion',
        titulo: `${quien} te invitó a ser su compañero`,
        mensaje: 'Si aceptas, podrán ver el progreso, las insignias y el ranking del otro.',
        url: `/companeros/companeros.html?codigo=${codigo}`,
        correo: {
            asunto: `${quien} te invitó a ser su compañero en Sapiens Lumen`,
            parrafos: [
                `Hola ${usuario.nombre}, <strong>${quien}</strong> quiere ser tu compañero en Sapiens Lumen.`,
                'Si aceptas, podrán ver el progreso, las insignias y el ranking del otro. Entra con tu cuenta y acepta la invitación, o escribe este código en la sección Compañeros:',
            ],
            destacado: codigo,
            boton: { texto: 'Ver la invitación', url: `/companeros/companeros.html?codigo=${codigo}` },
        },
    });
    return { aceptada: false, usuario, mensaje: `Le enviamos la invitación a ${usuario.nombre}.` };
}

/* ---------- 3) responder ---------- */
export async function responder(yo, idRelacion, aceptar) {
    const [filas] = await connection.query('SELECT * FROM companeros WHERE id_companero = ? AND id_destinatario = ?', [Number(idRelacion), yo.id_usuario]);
    const rel = filas[0];
    if (!rel) throw new ErrorCompaneros('No encontramos esa invitación.', 404);
    if (rel.estado !== 'pendiente') throw new ErrorCompaneros('Esa invitación ya fue respondida.', 409);

    await connection.query('UPDATE companeros SET estado = ?, fecha_respuesta = NOW() WHERE id_companero = ?', [aceptar ? 'aceptada' : 'rechazada', rel.id_companero]);
    // las notificaciones de invitación quedan resueltas
    await connection.query("UPDATE notificaciones SET leida = 1 WHERE id_usuario = ? AND tipo = 'invitacion' AND url LIKE ?", [yo.id_usuario, `%codigo=${rel.codigo}%`]);

    if (aceptar) {
        const quien = `${yo.nombre} ${yo.apellido || ''}`.trim();
        await notificar(rel.id_solicitante, {
            tipo: 'companero',
            titulo: `${quien} aceptó tu invitación`,
            mensaje: 'Ya son compañeros: pueden ver su progreso, insignias y ranking.',
            url: '/companeros/companeros.html',
            correo: {
                asunto: `${quien} aceptó tu invitación en Sapiens Lumen`,
                parrafos: [`¡Buenas noticias! <strong>${quien}</strong> aceptó tu invitación. Ya son compañeros y pueden ver el progreso, las insignias y el ranking del otro.`],
                boton: { texto: 'Ver mis compañeros', url: '/companeros/companeros.html' },
            },
        });
    }
    return { estado: aceptar ? 'aceptada' : 'rechazada' };
}

export async function aceptarPorCodigo(yo, codigoBruto) {
    const codigo = String(codigoBruto || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (codigo.length !== 8) throw new ErrorCompaneros('El código tiene 8 letras y números.');
    const [filas] = await connection.query('SELECT * FROM companeros WHERE codigo = ?', [codigo]);
    const rel = filas[0];
    if (!rel || rel.id_destinatario !== yo.id_usuario) throw new ErrorCompaneros('Ese código no es válido para tu cuenta. Revisa que lo escribiste bien y que entraste con el correo al que llegó la invitación.', 404);
    return responder(yo, rel.id_companero, true);
}

// Datos de una invitación por su código (para mostrar "X te invitó" antes de aceptar)
export async function invitacionPorCodigo(yo, codigoBruto) {
    const codigo = String(codigoBruto || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    const [filas] = await connection.query(
        `SELECT c.id_companero, c.estado, u.id_usuario, u.nombre, u.apellido, u.foto_url
         FROM companeros c JOIN usuarios u ON u.id_usuario = c.id_solicitante
         WHERE c.codigo = ? AND c.id_destinatario = ?`,
        [codigo, yo.id_usuario],
    );
    if (!filas[0]) return null;
    return { id: filas[0].id_companero, estado: filas[0].estado, de: personaPublica(filas[0]) };
}

/* ---------- 4) cancelar invitación o quitar compañero ---------- */
export async function eliminarRelacion(yo, idRelacion) {
    const [r] = await connection.query(
        'DELETE FROM companeros WHERE id_companero = ? AND (id_solicitante = ? OR id_destinatario = ?)',
        [Number(idRelacion), yo.id_usuario, yo.id_usuario],
    );
    if (!r.affectedRows) throw new ErrorCompaneros('No encontramos esa relación.', 404);
}

/* ---------- 5) listar ---------- */
export async function listar(yo) {
    const [filas] = await connection.query(
        `SELECT c.id_companero, c.estado, c.id_solicitante, c.fecha_solicitud, c.fecha_respuesta,
                o.id_usuario AS o_id_usuario, o.nombre AS o_nombre, o.apellido AS o_apellido, o.foto_url AS o_foto_url
         FROM companeros c
         JOIN usuarios o ON o.id_usuario = IF(c.id_solicitante = ?, c.id_destinatario, c.id_solicitante)
         WHERE (c.id_solicitante = ? OR c.id_destinatario = ?) AND c.estado IN ('pendiente','aceptada')
         ORDER BY c.fecha_solicitud DESC`,
        [yo.id_usuario, yo.id_usuario, yo.id_usuario],
    );
    const salida = { companeros: [], recibidas: [], enviadas: [] };
    for (const f of filas) {
        const base = { idRelacion: f.id_companero, ...personaPublica(f, 'o_') };
        if (f.estado === 'aceptada') salida.companeros.push({ ...base, desde: f.fecha_respuesta });
        else if (f.id_solicitante === yo.id_usuario) salida.enviadas.push({ ...base, fecha: f.fecha_solicitud });
        else salida.recibidas.push({ ...base, fecha: f.fecha_solicitud });
    }
    return salida;
}

/* ---------- 6) ver a un compañero ---------- */
export async function verCompanero(yo, idOtro) {
    idOtro = Number(idOtro);
    if (!(await sonCompaneros(yo.id_usuario, idOtro))) throw new ErrorCompaneros('Esa persona no es tu compañero.', 403);
    const [filas] = await connection.query('SELECT id_usuario, nombre, apellido, foto_url, preferencias FROM usuarios WHERE id_usuario = ?', [idOtro]);
    const otro = filas[0];
    if (!otro) throw new ErrorCompaneros('Esa cuenta ya no existe.', 404);

    const ajustes = await leerAjustes(idOtro);
    if (!ajustes.perfil_visible) {
        return { persona: personaPublica(otro), privado: true };
    }
    let grado = null;
    try { grado = JSON.parse(otro.preferencias || '{}').grade || null; } catch { /* sin grado */ }

    const progreso = await leerProgreso(idOtro, grado);
    const logros = (await listarLogros(idOtro)).filter((l) => l.obtenida);
    return {
        persona: personaPublica(otro),
        privado: false,
        progreso: {
            nivel: progreso.nivel,
            puntosTotales: progreso.puntosTotales,
            racha: progreso.racha,
            rachaMaxima: progreso.rachaMaxima,
            retosCompletados: progreso.retosCompletados,
            porcentajeAciertos: progreso.porcentajeAciertos,
            temasDominados: progreso.temasDominados,
            temasTotal: progreso.temasTotal,
            porcentajeGeneral: progreso.porcentajeGeneral,
            grado,
            materias: progreso.materias,
        },
        insignias: logros.map((l) => ({ id: l.id, nombre: l.nombre, descripcion: l.descripcion, icono: l.icono, fecha: l.fecha })),
    };
}

/* ---------- 7) ranking entre compañeros ---------- */
export async function ranking(yo) {
    const [filas] = await connection.query(
        `SELECT u.id_usuario, u.nombre, u.apellido, u.foto_url,
                COALESCE(p.puntos_totales, 0) AS puntos, COALESCE(p.racha_actual, 0) AS racha, COALESCE(p.id_nivel, 1) AS id_nivel,
                COALESCE(a.mostrar_ranking, 1) AS mostrar,
                (SELECT COUNT(*) FROM estudiante_insignia e WHERE e.id_estudiante = u.id_usuario) AS insignias
         FROM usuarios u
         LEFT JOIN perfil_gamificacion p ON p.id_estudiante = u.id_usuario
         LEFT JOIN ajustes_usuario a ON a.id_usuario = u.id_usuario
         WHERE u.id_usuario = ?
            OR u.id_usuario IN (
                SELECT IF(c.id_solicitante = ?, c.id_destinatario, c.id_solicitante)
                FROM companeros c
                WHERE c.estado = 'aceptada' AND (c.id_solicitante = ? OR c.id_destinatario = ?))`,
        [yo.id_usuario, yo.id_usuario, yo.id_usuario, yo.id_usuario],
    );

    const visibles = filas
        .filter((f) => f.id_usuario === yo.id_usuario || f.mostrar)   // yo siempre me veo; los demás solo si lo permiten
        .sort((a, b) => b.puntos - a.puntos || b.racha - a.racha || a.nombre.localeCompare(b.nombre));

    const [niveles] = await connection.query('SELECT id_nivel, nombre FROM niveles');
    const nombreNivel = new Map(niveles.map((n) => [n.id_nivel, n.nombre]));
    const miFila = filas.find((f) => f.id_usuario === yo.id_usuario);

    return {
        // si apagaste "Mostrar en el ranking", los demás no te ven; tú sí ves tu posición
        yoOculto: !miFila?.mostrar,
        ocultos: filas.filter((f) => f.id_usuario !== yo.id_usuario && !f.mostrar).length,
        lista: visibles.map((f, i) => ({
            posicion: i + 1,
            ...personaPublica(f),
            yo: f.id_usuario === yo.id_usuario,
            puntos: Number(f.puntos),
            racha: Number(f.racha),
            nivel: nombreNivel.get(f.id_nivel) || `Nivel ${f.id_nivel}`,
            insignias: Number(f.insignias),
        })),
    };
}
