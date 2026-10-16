import { Router } from 'express';
import { requiereSesion } from '../../middleware/sesion.js';
import { listarNotificaciones, resumenNotificaciones, marcarLeidas } from '../../services/notificaciones.service.js';

const router = Router();
router.use(requiereSesion);

const manejar = (accion) => async (req, res) => {
    try { await accion(req, res); } catch (error) {
        console.error('Error en notificaciones:', error.message);
        res.status(500).json({ message: 'No se pudieron cargar las notificaciones.' });
    }
};

// GET /api/notificaciones -> últimas notificaciones + contadores
router.get('/', manejar(async (req, res) => {
    res.json({ ...(await resumenNotificaciones(req.usuario.id_usuario)), notificaciones: await listarNotificaciones(req.usuario.id_usuario) });
}));

// GET /api/notificaciones/resumen -> solo los contadores (lo consulta la campana cada rato)
router.get('/resumen', manejar(async (req, res) => res.json(await resumenNotificaciones(req.usuario.id_usuario))));

// POST /api/notificaciones/leer { id? } -> marca una (o todas) como leídas
router.post('/leer', manejar(async (req, res) => {
    const id = parseInt((req.body || {}).id, 10);
    await marcarLeidas(req.usuario.id_usuario, id > 0 ? id : null);
    res.json(await resumenNotificaciones(req.usuario.id_usuario));
}));

export default router;
