import { Router } from 'express';
import { requiereSesion } from '../../middleware/sesion.js';
import { limitarPorMinuto } from '../../middleware/limite.js';
import { responderTutor, hayIA, ErrorIA } from '../../services/tutor.service.js';

const router = Router();
router.use(requiereSesion);

// Tope diario por estudiante, para cuidar el cupo gratuito de la IA
const MAX_POR_DIA = Number(process.env.TUTOR_MAX_DIA) || 60;
const usoDiario = new Map();   // id -> { dia, n }
function pasaDelLimiteDiario(id) {
    const hoy = new Date().toISOString().slice(0, 10);
    const u = usoDiario.get(id);
    if (!u || u.dia !== hoy) { usoDiario.set(id, { dia: hoy, n: 1 }); return false; }
    if (u.n >= MAX_POR_DIA) return true;
    u.n++;
    return false;
}

const gradoDe = (u) => {
    try {
        const p = typeof u.preferencias === 'string' ? JSON.parse(u.preferencias) : (u.preferencias || {});
        const g = parseInt(p.grade, 10);
        return g >= 6 && g <= 11 ? g : null;
    } catch { return null; }
};

// GET /api/tutor/estado -> ¿el tutor está disponible?
router.get('/estado', (req, res) => res.json({ disponible: hayIA() }));

// POST /api/tutor/mensaje  { mensajes: [{rol:'usuario'|'tutor', texto}], idTema? }
router.post('/mensaje', limitarPorMinuto(10), async (req, res) => {
    try {
        if (!hayIA()) return res.status(503).json({ message: 'El tutor todavía no está activado en el servidor.' });
        if (pasaDelLimiteDiario(req.usuario.id_usuario)) {
            return res.status(429).json({ message: 'Llegaste al máximo de preguntas de hoy. ¡Vuelve mañana con más dudas!' });
        }
        const idTema = parseInt(req.body?.idTema, 10) > 0 ? parseInt(req.body.idTema, 10) : null;
        const r = await responderTutor({ usuario: { nombre: req.usuario.nombre }, grado: gradoDe(req.usuario), mensajes: req.body?.mensajes, idTema });
        res.json(r);
    } catch (error) {
        if (error instanceof ErrorIA) return res.status(502).json({ message: error.message });
        console.error('Error en el tutor:', error.message);
        res.status(500).json({ message: 'El tutor no pudo responder. Intenta de nuevo.' });
    }
});

export default router;
