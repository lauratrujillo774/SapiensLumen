import { connection } from '../config/mysql/dbmysql.js';
import { leerToken } from '../utils/seguridad.js';

// Exige "Authorization: Bearer <token>". Deja el usuario de la BD en req.usuario
export async function requiereSesion(req, res, next) {
    try {
        const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
        const payload = leerToken(token);
        if (!payload) return res.status(401).json({ message: 'Sesión no válida o vencida.' });

        const [filas] = await connection.query('SELECT * FROM usuarios WHERE id_usuario = ? AND activo = 1', [payload.id]);
        if (!filas[0]) return res.status(401).json({ message: 'La cuenta ya no existe.' });

        req.usuario = filas[0];
        next();
    } catch (error) {
        console.error('Error validando sesión:', error.message);
        res.status(500).json({ message: 'No se pudo validar la sesión.' });
    }
}
