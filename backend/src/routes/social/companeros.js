import { Router } from 'express';
import { requiereSesion } from '../../middleware/sesion.js';
import { limitarPorMinuto } from '../../middleware/limite.js';
import {
    ErrorCompaneros, buscarPorCorreo, invitar, responder, aceptarPorCodigo, invitacionPorCodigo,
    eliminarRelacion, listar, verCompanero, ranking,
} from '../../services/companeros.service.js';

const router = Router();
router.use(requiereSesion);

const manejar = (accion) => async (req, res) => {
    try {
        await accion(req, res);
    } catch (error) {
        if (error instanceof ErrorCompaneros) return res.status(error.estado).json({ message: error.message });
        console.error('Error en compañeros:', error.message);
        res.status(500).json({ message: 'Ocurrió un error. Intenta de nuevo.' });
    }
};

const id = (v) => { const n = parseInt(v, 10); return n > 0 ? n : null; };

// GET /api/companeros -> compañeros, invitaciones recibidas y enviadas
router.get('/', manejar(async (req, res) => res.json(await listar(req.usuario))));

// GET /api/companeros/ranking
router.get('/ranking', manejar(async (req, res) => res.json(await ranking(req.usuario))));

// GET /api/companeros/buscar?correo=  -> valida que la cuenta exista
router.get('/buscar', limitarPorMinuto(20), manejar(async (req, res) => res.json(await buscarPorCorreo(req.usuario, req.query.correo))));

// POST /api/companeros/invitar { correo }
router.post('/invitar', limitarPorMinuto(10), manejar(async (req, res) => {
    res.status(201).json(await invitar(req.usuario, (req.body || {}).correo));
}));

// POST /api/companeros/codigo { codigo } -> aceptar con el código del correo
router.post('/codigo', limitarPorMinuto(10), manejar(async (req, res) => {
    res.json(await aceptarPorCodigo(req.usuario, (req.body || {}).codigo));
}));

// GET /api/companeros/invitacion/:codigo -> quién te invitó (para mostrar antes de aceptar)
router.get('/invitacion/:codigo', limitarPorMinuto(20), manejar(async (req, res) => {
    const inv = await invitacionPorCodigo(req.usuario, req.params.codigo);
    if (!inv) return res.status(404).json({ message: 'Esa invitación no existe o no es para tu cuenta.' });
    res.json(inv);
}));

// POST /api/companeros/responder { idRelacion, aceptar }
router.post('/responder', manejar(async (req, res) => {
    const idRelacion = id((req.body || {}).idRelacion);
    if (!idRelacion) return res.status(400).json({ message: 'Invitación no válida.' });
    res.json(await responder(req.usuario, idRelacion, Boolean((req.body || {}).aceptar)));
}));

// GET /api/companeros/:idUsuario/progreso -> progreso e insignias de un compañero
router.get('/:idUsuario/progreso', manejar(async (req, res) => {
    const otro = id(req.params.idUsuario);
    if (!otro) return res.status(400).json({ message: 'Compañero no válido.' });
    res.json(await verCompanero(req.usuario, otro));
}));

// DELETE /api/companeros/:idRelacion -> cancelar invitación o dejar de ser compañeros
router.delete('/:idRelacion', manejar(async (req, res) => {
    const rel = id(req.params.idRelacion);
    if (!rel) return res.status(400).json({ message: 'Relación no válida.' });
    await eliminarRelacion(req.usuario, rel);
    res.json({ ok: true });
}));

export default router;
