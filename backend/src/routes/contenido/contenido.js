import { Router } from 'express';
import { requiereSesion } from '../../middleware/sesion.js';
import { cargarTema, leerContenido, estadoGeneracion, iniciarGeneracion, hayIA } from '../../services/contenido.service.js';

const router = Router();

// Para que nadie dispare cientos de generaciones: máximo 10 temas nuevos por minuto y usuario
const pedidos = new Map();
function limiteExcedido(idUsuario) {
    const ahora = Date.now();
    const recientes = (pedidos.get(idUsuario) || []).filter((t) => ahora - t < 60_000);
    if (recientes.length >= 10) { pedidos.set(idUsuario, recientes); return true; }
    recientes.push(ahora);
    pedidos.set(idUsuario, recientes);
    return false;
}

// GET /api/contenido/tema/:id
//   200 { estado: 'listo', contenido }   -> lección lista (de la base de datos)
//   202 { estado: 'generando' }          -> la IA la está preparando; el front vuelve a preguntar
//   503 { estado: 'sin_ia' }             -> falta la clave de la IA
//   200 { estado: 'error', message }     -> falló la última generación
router.get('/tema/:id', requiereSesion, async (req, res) => {
    try {
        const idTema = parseInt(req.params.id, 10);
        if (!idTema) return res.status(400).json({ message: 'Tema no válido.' });
        if (!(await cargarTema(idTema))) return res.status(404).json({ message: 'Tema no encontrado.' });

        const contenido = await leerContenido(idTema);
        if (contenido) return res.json({ estado: 'listo', contenido });

        if (estadoGeneracion(idTema) === 'generando') return res.status(202).json({ estado: 'generando' });
        const estado = estadoGeneracion(idTema);
        if (estado && estado.error) return res.json({ estado: 'error', message: estado.error });

        if (!hayIA()) {
            return res.status(503).json({
                estado: 'sin_ia',
                message: 'La IA todavía no está activada. Falta una clave gratis (GEMINI_API_KEY o GROQ_API_KEY) en el servidor.',
            });
        }
        if (limiteExcedido(req.usuario.id_usuario)) {
            return res.status(429).json({ message: 'Estás pidiendo muchos temas seguidos. Espera un momento.' });
        }
        iniciarGeneracion(idTema);
        res.status(202).json({ estado: 'generando' });
    } catch (error) {
        console.error('Error leyendo contenido:', error.message);
        res.status(500).json({ message: 'No se pudo cargar la lección.' });
    }
});

export default router;
