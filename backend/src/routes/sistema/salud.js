import { Router } from 'express';
import { connection } from '../../config/mysql/dbmysql.js';

const router = Router();

// GET /api/salud -> comprueba que el servidor y la base de datos responden
router.get('/', async (req, res) => {
    try {
        await connection.query('SELECT 1');
        res.json({ servidor: 'ok', baseDeDatos: 'ok' });
    } catch (error) {
        res.status(503).json({ servidor: 'ok', baseDeDatos: 'sin conexión', message: error.message });
    }
});

export default router;
