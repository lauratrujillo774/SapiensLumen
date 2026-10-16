import { Router } from 'express';
import { requiereSesion } from '../../middleware/sesion.js';
import { cargarTema, hayIA } from '../../services/contenido.service.js';
import { obtenerReto, estadoPreguntas, iniciarGeneracionPreguntas, considerarAmpliar } from '../../services/preguntas.service.js';
import { iniciarIntento, responder, pedirPista, finalizar, leerPerfil, ErrorJuego } from '../../services/juego.service.js';

const router = Router();
router.use(requiereSesion);

// Máximo 10 temas nuevos por minuto y usuario (para que nadie dispare cientos de generaciones)
const pedidos = new Map();
function limiteExcedido(idUsuario) {
    const ahora = Date.now();
    const recientes = (pedidos.get(idUsuario) || []).filter((t) => ahora - t < 60_000);
    if (recientes.length >= 10) { pedidos.set(idUsuario, recientes); return true; }
    recientes.push(ahora);
    pedidos.set(idUsuario, recientes);
    return false;
}

const manejar = (accion) => async (req, res) => {
    try {
        await accion(req, res);
    } catch (error) {
        if (error instanceof ErrorJuego) return res.status(error.estado).json({ message: error.message });
        console.error('Error en el juego:', error.message);
        res.status(500).json({ message: 'Ocurrió un error en el juego. Intenta de nuevo.' });
    }
};

const idDe = (valor) => { const n = parseInt(valor, 10); return n > 0 ? n : null; };

// GET /api/juego/tema/:id -> ¿hay preguntas? Si no, la IA las prepara (202 mientras tanto)
router.get('/tema/:id', manejar(async (req, res) => {
    const idTema = idDe(req.params.id);
    if (!idTema) return res.status(400).json({ message: 'Tema no válido.' });
    if (!(await cargarTema(idTema))) return res.status(404).json({ message: 'Tema no encontrado.' });

    const reto = await obtenerReto(idTema);
    if (reto) return res.json({ estado: 'listo', reto: { titulo: reto.titulo, total: reto.total } });

    const estado = estadoPreguntas(idTema);
    if (estado === 'generando') return res.status(202).json({ estado: 'generando' });
    if (estado && estado.error) return res.json({ estado: 'error', message: estado.error });

    if (!hayIA()) {
        return res.status(503).json({ estado: 'sin_ia', message: 'La IA todavía no está activada. Falta una clave gratis (GEMINI_API_KEY o GROQ_API_KEY) en el servidor.' });
    }
    if (limiteExcedido(req.usuario.id_usuario)) return res.status(429).json({ message: 'Estás pidiendo muchos temas seguidos. Espera un momento.' });
    iniciarGeneracionPreguntas(idTema);
    res.status(202).json({ estado: 'generando' });
}));

// POST /api/juego/tema/:id/iniciar -> nueva partida (preguntas SIN las respuestas)
router.post('/tema/:id/iniciar', manejar(async (req, res) => {
    const idTema = idDe(req.params.id);
    if (!idTema) return res.status(400).json({ message: 'Tema no válido.' });
    const reto = await obtenerReto(idTema);
    if (!reto) throw new ErrorJuego('Las preguntas de este tema todavía no están listas.', 409);
    const partida = await iniciarIntento(req.usuario.id_usuario, reto.id);
    res.json(partida);
    // En segundo plano: si a esta cuenta le quedan pocas preguntas sin ver, la IA prepara más (nuevas y distintas)
    considerarAmpliar(idTema, req.usuario.id_usuario, reto.id).catch((e) => console.error('No se pudo revisar el banco de preguntas:', e.message));
}));

// POST /api/juego/intento/:id/responder  { idPregunta, idOpcion | texto }
router.post('/intento/:id/responder', manejar(async (req, res) => {
    const idIntento = idDe(req.params.id);
    if (!idIntento) return res.status(400).json({ message: 'Partida no válida.' });
    res.json(await responder(req.usuario.id_usuario, idIntento, req.body || {}));
}));

// POST /api/juego/intento/:id/pista  { idPregunta }
router.post('/intento/:id/pista', manejar(async (req, res) => {
    const idIntento = idDe(req.params.id);
    if (!idIntento) return res.status(400).json({ message: 'Partida no válida.' });
    res.json(await pedirPista(req.usuario.id_usuario, idIntento, (req.body || {}).idPregunta));
}));

// POST /api/juego/intento/:id/finalizar -> resultados, puntos, nivel y racha
router.post('/intento/:id/finalizar', manejar(async (req, res) => {
    const idIntento = idDe(req.params.id);
    if (!idIntento) return res.status(400).json({ message: 'Partida no válida.' });
    res.json(await finalizar(req.usuario.id_usuario, idIntento));
}));

// GET /api/juego/perfil -> puntos, nivel y racha del estudiante
router.get('/perfil', manejar(async (req, res) => {
    res.json(await leerPerfil(req.usuario.id_usuario));
}));

export default router;
