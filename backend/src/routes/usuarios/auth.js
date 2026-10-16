import { Router } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { requiereSesion } from '../../middleware/sesion.js';
import { connection } from '../../config/mysql/dbmysql.js';
import { hashContrasena, verificarContrasena, crearToken, leerToken } from '../../utils/seguridad.js';

const router = Router();

// id_rol 1 = Estudiante (tabla roles)
const ROL_ESTUDIANTE = 1;
// Las cuentas de Google no tienen contraseña: este valor nunca coincide con ninguna
const SIN_CONTRASENA = '!google';

const CORREO_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Fila de la BD -> objeto que recibe el front (nunca incluye el hash)
// preferencias es texto JSON en la BD
function leerPreferencias(valor) {
    if (valor && typeof valor === 'object') return valor;
    try { return JSON.parse(valor || '{}') || {}; } catch { return {}; }
}

function usuarioPublico(fila) {
    return {
        id: fila.id_usuario,
        nombre: fila.nombre,
        apellido: fila.apellido,
        correo: fila.correo,
        foto_url: fila.foto_url,
        preferencias: leerPreferencias(fila.preferencias),
        fecha_registro: fila.fecha_registro,
        ultimo_acceso: fila.ultimo_acceso,
    };
}

const respuestaSesion = (fila) => ({
    token: crearToken({ id: fila.id_usuario }),
    usuario: usuarioPublico(fila),
});

const registrarAcceso = (id) => connection.query('UPDATE usuarios SET ultimo_acceso = NOW() WHERE id_usuario = ?', [id]);

async function buscarPorCorreo(correo) {
    const [filas] = await connection.query('SELECT * FROM usuarios WHERE correo = ? LIMIT 1', [correo]);
    return filas[0] || null;
}

// GET /api/auth/config -> el front pide aquí el Client ID de Google
router.get('/config', (req, res) => {
    res.json({ googleClientId: process.env.GOOGLE_CLIENT_ID || null });
});

// POST /api/auth/registro
router.post('/registro', async (req, res) => {
    try {
        const nombre = String(req.body.nombre || '').trim();
        const apellido = String(req.body.apellido || '').trim();
        const correo = String(req.body.correo || '').trim().toLowerCase();
        const contrasena = String(req.body.contrasena || '');
        const preferencias = req.body.preferencias && typeof req.body.preferencias === 'object' ? req.body.preferencias : {};

        if (!nombre || !apellido || !correo || !contrasena) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }
        if (!CORREO_VALIDO.test(correo)) {
            return res.status(400).json({ message: 'El correo no es válido.' });
        }
        if (contrasena.length < 6) {
            return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres.' });
        }
        if (await buscarPorCorreo(correo)) {
            return res.status(409).json({ message: 'Este correo ya está registrado.' });
        }

        const hash = await hashContrasena(contrasena);
        // fecha_registro la pone MySQL sola (DEFAULT CURRENT_TIMESTAMP)
        const [resultado] = await connection.query(
            'INSERT INTO usuarios (id_rol, nombre, apellido, correo, contrasena_hash, preferencias) VALUES (?, ?, ?, ?, ?, ?)',
            [ROL_ESTUDIANTE, nombre, apellido, correo, hash, JSON.stringify(preferencias)],
        );
        const [filas] = await connection.query('SELECT * FROM usuarios WHERE id_usuario = ?', [resultado.insertId]);
        res.status(201).json(respuestaSesion(filas[0]));
    } catch (error) {
        console.error('Error en registro:', error.message);
        res.status(500).json({ message: 'No se pudo crear la cuenta.' });
    }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const correo = String(req.body.correo || '').trim().toLowerCase();
        const contrasena = String(req.body.contrasena || '');
        const usuario = await buscarPorCorreo(correo);

        // Mismo mensaje si el correo no existe o la clave falla (no revela cuál)
        if (!usuario || !(await verificarContrasena(contrasena, usuario.contrasena_hash))) {
            const soloGoogle = usuario && usuario.contrasena_hash === SIN_CONTRASENA;
            return res.status(401).json({
                message: soloGoogle
                    ? 'Esta cuenta se creó con Google. Usa "Continuar con Google".'
                    : 'Correo o contraseña incorrectos.',
            });
        }
        if (!usuario.activo) {
            return res.status(403).json({ message: 'Esta cuenta está desactivada.' });
        }
        await registrarAcceso(usuario.id_usuario);
        res.json(respuestaSesion(usuario));
    } catch (error) {
        console.error('Error en login:', error.message);
        res.status(500).json({ message: 'No se pudo iniciar sesión.' });
    }
});

// POST /api/auth/google  { credential }  -> inicia sesión o crea la cuenta
router.post('/google', async (req, res) => {
    try {
        const clientId = process.env.GOOGLE_CLIENT_ID;
        if (!clientId) {
            return res.status(501).json({ message: 'Google no está configurado en el servidor (GOOGLE_CLIENT_ID).' });
        }
        const credential = String(req.body.credential || '');
        if (!credential) return res.status(400).json({ message: 'Falta la credencial de Google.' });

        // Google comprueba la firma y la vigencia del token
        const respuesta = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`);
        if (!respuesta.ok) return res.status(401).json({ message: 'La credencial de Google no es válida.' });
        const datos = await respuesta.json();

        if (datos.aud !== clientId || String(datos.email_verified) !== 'true') {
            return res.status(401).json({ message: 'La credencial de Google no es válida.' });
        }

        const correo = String(datos.email).toLowerCase();
        let usuario = await buscarPorCorreo(correo);

        if (!usuario) {
            const nombre = datos.given_name || (datos.name || 'Usuario').split(' ')[0];
            const apellido = datos.family_name || '';
            const [resultado] = await connection.query(
                'INSERT INTO usuarios (id_rol, nombre, apellido, correo, contrasena_hash, foto_url, preferencias) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [ROL_ESTUDIANTE, nombre, apellido, correo, SIN_CONTRASENA, datos.picture || null, JSON.stringify({})],
            );
            const [filas] = await connection.query('SELECT * FROM usuarios WHERE id_usuario = ?', [resultado.insertId]);
            usuario = filas[0];
        } else if (!usuario.foto_url && datos.picture) {
            await connection.query('UPDATE usuarios SET foto_url = ? WHERE id_usuario = ?', [datos.picture, usuario.id_usuario]);
            usuario.foto_url = datos.picture;
        }
        if (!usuario.activo) {
            return res.status(403).json({ message: 'Esta cuenta está desactivada.' });
        }
        await registrarAcceso(usuario.id_usuario);
        res.json(respuestaSesion(usuario));
    } catch (error) {
        console.error('Error con Google:', error.message);
        res.status(500).json({ message: 'No se pudo iniciar sesión con Google.' });
    }
});

// ---------- Perfil (requiere sesión) ----------
const carpetaAvatares = fileURLToPath(new URL('../../../uploads/avatars', import.meta.url));
const AVATAR_PLATAFORMA = /^img\/companions\/[a-z0-9_-]{1,40}\.png$/; // avatares que trae la plataforma
const ID_COMPANION = /^[a-z0-9_-]{1,40}$/;

// Solo se aceptan estas preferencias y con estos valores
function limpiarPreferencias(entrada = {}) {
    const limpia = {};
    const grado = parseInt(entrada.grade, 10);
    if (grado >= 6 && grado <= 11) limpia.grade = grado;
    if (typeof entrada.companionId === 'string' && ID_COMPANION.test(entrada.companionId)) {
        limpia.companionId = entrada.companionId;
    }
    return limpia;
}

const esFotoSubida = (url) => typeof url === 'string' && url.startsWith('/uploads/avatars/');
function borrarFotoSubida(url) {
    if (!esFotoSubida(url)) return;
    fs.promises.unlink(path.join(carpetaAvatares, path.basename(url))).catch(() => {});
}

async function usuarioActualizado(id) {
    const [filas] = await connection.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id]);
    return usuarioPublico(filas[0]);
}

// GET /api/auth/yo -> datos del usuario de la sesión
router.get('/yo', requiereSesion, (req, res) => {
    res.json({ usuario: usuarioPublico(req.usuario) });
});

// PATCH /api/auth/preferencias -> guarda grado y compañero en la columna preferencias
router.patch('/preferencias', requiereSesion, async (req, res) => {
    try {
        const mezcla = { ...leerPreferencias(req.usuario.preferencias), ...limpiarPreferencias(req.body) };
        await connection.query('UPDATE usuarios SET preferencias = ? WHERE id_usuario = ?', [JSON.stringify(mezcla), req.usuario.id_usuario]);
        res.json({ usuario: await usuarioActualizado(req.usuario.id_usuario) });
    } catch (error) {
        console.error('Error guardando preferencias:', error.message);
        res.status(500).json({ message: 'No se pudieron guardar las preferencias.' });
    }
});

// PATCH /api/auth/perfil -> datos personales editables; rol y campos de auditoría quedan protegidos
router.patch('/perfil', requiereSesion, async (req, res) => {
    try {
        const u = req.usuario;
        const body = req.body || {};
        const campos = [];
        const valores = [];

        if (body.nombre !== undefined) {
            const nombre = String(body.nombre).trim();
            if (!nombre || nombre.length > 80) return res.status(400).json({ message: 'El nombre es obligatorio (máximo 80 letras).' });
            campos.push('nombre = ?'); valores.push(nombre);
        }
        if (body.apellido !== undefined) {
            const apellido = String(body.apellido).trim();
            if (!apellido || apellido.length > 80) return res.status(400).json({ message: 'El apellido es obligatorio (máximo 80 letras).' });
            campos.push('apellido = ?'); valores.push(apellido);
        }
        if (body.correo !== undefined) {
            const correo = String(body.correo).trim().toLowerCase();
            if (!correo || correo.length > 150 || !CORREO_VALIDO.test(correo)) {
                return res.status(400).json({ message: 'Ingresa un correo electrónico válido (máximo 150 caracteres).' });
            }
            if (u.contrasena_hash === SIN_CONTRASENA && correo !== u.correo.toLowerCase()) {
                return res.status(400).json({ message: 'El correo de una cuenta vinculada con Google no se puede cambiar aquí.' });
            }
            const usuarioConCorreo = await buscarPorCorreo(correo);
            if (usuarioConCorreo && usuarioConCorreo.id_usuario !== u.id_usuario) {
                return res.status(409).json({ message: 'Ese correo ya está registrado.' });
            }
            campos.push('correo = ?'); valores.push(correo);
        }
        if (body.contrasena) {
            if (u.contrasena_hash === SIN_CONTRASENA) {
                return res.status(400).json({ message: 'Esta cuenta entra con Google y no tiene contraseña.' });
            }
            if (String(body.contrasena).length < 6) return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres.' });
            // para cambiar la contraseña hay que demostrar que se conoce la actual
            if (!(await verificarContrasena(String(body.contrasena_actual || ''), u.contrasena_hash))) {
                return res.status(403).json({ message: 'La contraseña actual no es correcta.' });
            }
            campos.push('contrasena_hash = ?'); valores.push(await hashContrasena(String(body.contrasena)));
        }
        if (body.foto_url !== undefined) {
            // vacío = quitar la foto; solo se permite un avatar de la plataforma
            const url = body.foto_url ? String(body.foto_url) : null;
            if (url && !AVATAR_PLATAFORMA.test(url)) return res.status(400).json({ message: 'Avatar no válido.' });
            campos.push('foto_url = ?'); valores.push(url);
            borrarFotoSubida(u.foto_url);
        }
        if (body.preferencias) {
            const mezcla = { ...leerPreferencias(u.preferencias), ...limpiarPreferencias(body.preferencias) };
            campos.push('preferencias = ?'); valores.push(JSON.stringify(mezcla));
        }
        if (!campos.length) return res.status(400).json({ message: 'No hay nada que actualizar.' });

        await connection.query(`UPDATE usuarios SET ${campos.join(', ')} WHERE id_usuario = ?`, [...valores, u.id_usuario]);
        res.json({ usuario: await usuarioActualizado(u.id_usuario) });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: 'Ese correo ya está registrado.' });
        }
        console.error('Error actualizando perfil:', error.message);
        res.status(500).json({ message: 'No se pudo actualizar el perfil.' });
    }
});

// DELETE /api/auth/cuenta { contrasena?, confirmar: "ELIMINAR" }
// Borra la cuenta y TODO lo suyo (progreso, puntos, insignias, compañeros, notificaciones). No se puede deshacer.
router.delete('/cuenta', requiereSesion, async (req, res) => {
    try {
        const u = req.usuario;
        const body = req.body || {};
        if (String(body.confirmar || '').trim().toUpperCase() !== 'ELIMINAR') {
            return res.status(400).json({ message: 'Escribe ELIMINAR para confirmar.' });
        }
        // Las cuentas con contraseña deben confirmarla; las de Google confirman con la palabra de arriba
        if (u.contrasena_hash !== SIN_CONTRASENA && !(await verificarContrasena(String(body.contrasena || ''), u.contrasena_hash))) {
            return res.status(403).json({ message: 'La contraseña no es correcta.' });
        }

        // Si algún grupo depende de este usuario como docente, la base de datos no deja borrarlo
        const [grupos] = await connection.query('SELECT COUNT(*) AS n FROM grupos WHERE id_docente = ?', [u.id_usuario]);
        if (Number(grupos[0].n) > 0) {
            return res.status(409).json({ message: 'Esta cuenta tiene grupos a su cargo. Pide ayuda a un administrador para eliminarla.' });
        }

        // Las tablas dependientes (intentos, puntos, insignias, compañeros, notificaciones...) se borran en cascada
        await connection.query('DELETE FROM usuarios WHERE id_usuario = ?', [u.id_usuario]);
        borrarFotoSubida(u.foto_url);
        res.json({ ok: true });
    } catch (error) {
        console.error('Error eliminando la cuenta:', error.message);
        res.status(500).json({ message: 'No se pudo eliminar la cuenta. Intenta de nuevo.' });
    }
});

// POST /api/auth/foto (multipart, campo "foto") -> sube la foto de perfil
const FORMATOS = [
    { ext: 'png', firma: (b) => b.length > 8 && b[0] === 0x89 && b.toString('latin1', 1, 4) === 'PNG' },
    { ext: 'jpg', firma: (b) => b.length > 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
    { ext: 'webp', firma: (b) => b.length > 12 && b.toString('latin1', 0, 4) === 'RIFF' && b.toString('latin1', 8, 12) === 'WEBP' },
];

router.post('/foto', requiereSesion, async (req, res) => {
    try {
        const archivo = req.files && req.files.foto;
        if (!archivo || Array.isArray(archivo)) return res.status(400).json({ message: 'Selecciona una imagen.' });
        if (archivo.truncated) return res.status(413).json({ message: 'La imagen pesa más de 2 MB.' });

        // El formato se decide por el contenido real del archivo, no por su nombre
        const formato = FORMATOS.find((x) => x.firma(archivo.data));
        if (!formato) return res.status(400).json({ message: 'Solo se aceptan imágenes PNG, JPG o WEBP.' });

        // La foto se guarda en la base de datos (el disco del servidor en internet se borra al reiniciar)
        const tipo = { png: 'image/png', jpg: 'image/jpeg', webp: 'image/webp' }[formato.ext];
        await connection.query(
            `INSERT INTO fotos_usuario (id_usuario, tipo, datos) VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE tipo = VALUES(tipo), datos = VALUES(datos)`,
            [req.usuario.id_usuario, tipo, archivo.data]);

        borrarFotoSubida(req.usuario.foto_url);
        await connection.query('UPDATE usuarios SET foto_url = ? WHERE id_usuario = ?', [`/api/fotos/${req.usuario.id_usuario}?v=${Date.now()}`, req.usuario.id_usuario]);
        res.json({ usuario: await usuarioActualizado(req.usuario.id_usuario) });
    } catch (error) {
        console.error('Error subiendo foto:', error.message);
        res.status(500).json({ message: 'No se pudo guardar la foto.' });
    }
});

export default router;
