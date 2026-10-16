import { Router } from 'express';
import { connection } from '../../config/mysql/dbmysql.js';
import { requiereSesion } from '../../middleware/sesion.js';
import { leerProgreso } from '../../services/progreso.service.js';

const router = Router();
router.use(requiereSesion);

// GET /api/progreso/hechos -> temas que ESTA cuenta ya domina (para las marcas de "tema hecho")
router.get('/hechos', async (req, res) => {
    try {
        const [filas] = await connection.query(
            `SELECT d.id_tema, t.id_area FROM desempeno_tema d JOIN temas t ON t.id_tema = d.id_tema
             WHERE d.id_estudiante = ? AND d.porcentaje_dominio >= 60`,
            [req.usuario.id_usuario],
        );
        res.json({ temas: filas.map((f) => ({ idTema: f.id_tema, idArea: f.id_area })) });
    } catch (error) {
        console.error('Error en temas hechos:', error.message);
        res.status(500).json({ message: 'No se pudieron cargar tus temas.' });
    }
});

// GET /api/progreso -> avance real del estudiante (puntos, nivel, racha, materias, temas a reforzar...)
router.get('/', async (req, res) => {
    try {
        let grado = null;
        try { grado = JSON.parse(req.usuario.preferencias || '{}').grade || null; } catch { /* sin grado */ }
        res.json(await leerProgreso(req.usuario.id_usuario, grado));
    } catch (error) {
        console.error('Error en progreso:', error.message);
        res.status(500).json({ message: 'No se pudo cargar tu progreso.' });
    }
});

export default router;
