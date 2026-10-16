import crypto from 'node:crypto';

// ---------- Contraseñas (scrypt, viene con Node: no necesita librerías) ----------
const scrypt = (clave, sal) => new Promise((resolve, reject) => {
    crypto.scrypt(clave, sal, 64, (error, derivada) => (error ? reject(error) : resolve(derivada)));
});

// Guarda "sal:hash" en contrasena_hash. Nunca se guarda la contraseña real.
export async function hashContrasena(contrasena) {
    const sal = crypto.randomBytes(16).toString('hex');
    const hash = await scrypt(contrasena, sal);
    return `${sal}:${hash.toString('hex')}`;
}

export async function verificarContrasena(contrasena, guardado) {
    if (!guardado || !guardado.includes(':')) return false;
    const [sal, hashHex] = guardado.split(':');
    const esperado = Buffer.from(hashHex, 'hex');
    const calculado = await scrypt(contrasena, sal);
    return esperado.length === calculado.length && crypto.timingSafeEqual(esperado, calculado);
}

// ---------- Token de sesión (formato JWT HS256) ----------
const base64url = (texto) => Buffer.from(texto).toString('base64url');

function secreto() {
    if (!process.env.JWT_SECRET) throw new Error('Falta JWT_SECRET en backend/.env');
    return process.env.JWT_SECRET;
}

export function crearToken(payload, diasValido = 7) {
    const cabecera = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const cuerpo = base64url(JSON.stringify({
        ...payload,
        exp: Math.floor(Date.now() / 1000) + diasValido * 24 * 60 * 60,
    }));
    const firma = crypto.createHmac('sha256', secreto()).update(`${cabecera}.${cuerpo}`).digest('base64url');
    return `${cabecera}.${cuerpo}.${firma}`;
}

// Devuelve el payload si el token es válido y no ha vencido; si no, null
export function leerToken(token) {
    try {
        const [cabecera, cuerpo, firma] = String(token).split('.');
        const esperada = crypto.createHmac('sha256', secreto()).update(`${cabecera}.${cuerpo}`).digest('base64url');
        const a = Buffer.from(firma || '');
        const b = Buffer.from(esperada);
        if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
        const payload = JSON.parse(Buffer.from(cuerpo, 'base64url').toString());
        return payload.exp > Math.floor(Date.now() / 1000) ? payload : null;
    } catch {
        return null;
    }
}
