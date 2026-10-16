import { Router } from 'express';
import { requiereSesion } from '../../middleware/sesion.js';
import { listarLogros, evaluarInsignias } from '../../services/logros.service.js';

const router = Router();
router.use(requiereSesion);

// GET /api/logros -> todas las insignias, con cuáles tienes y cuánto falta
router.get('/', async (req, res) => {
    try {
        await evaluarInsignias(req.usuario.id_usuario);   // por si ya cumplía alguna y no se había otorgado
        const logros = await listarLogros(req.usuario.id_usuario);
        res.json({ logros, obtenidas: logros.filter((l) => l.obtenida).length, total: logros.length });
    } catch (error) {
        console.error('Error en logros:', error.message);
        res.status(500).json({ message: 'No se pudieron cargar los logros.' });
    }
});

export default router;
