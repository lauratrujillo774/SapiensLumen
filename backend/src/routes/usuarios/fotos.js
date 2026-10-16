import { Router } from 'express';
import { connection } from '../../config/mysql/dbmysql.js';

const router = Router();

// GET /api/fotos/:id -> foto de perfil subida por el usuario
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!(id > 0)) return res.status(404).end();
    try {
        const [filas] = await connection.query('SELECT tipo, datos FROM fotos_usuario WHERE id_usuario = ?', [id]);
        if (!filas.length) return res.status(404).end();
        res.set('Content-Type', filas[0].tipo);
        res.set('Cache-Control', 'public, max-age=86400');   // la URL cambia (?v=) con cada foto nueva
        res.set('X-Content-Type-Options', 'nosniff');
        res.send(filas[0].datos);
    } catch (error) {
        console.error('Error leyendo foto:', error.message);
        res.status(500).end();
    }
});

export default router;
