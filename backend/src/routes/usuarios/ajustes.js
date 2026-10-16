import { Router } from 'express';
import { connection } from '../../config/mysql/dbmysql.js';
import { requiereSesion } from '../../middleware/sesion.js';
import { leerAjustes } from '../../services/notificaciones.service.js';
import { correoConfigurado } from '../../services/correo.service.js';

const router = Router();
router.use(requiereSesion);

const CAMPOS = ['notif_recordatorios', 'notif_logros', 'notif_semanal', 'notif_companeros', 'perfil_visible', 'mostrar_ranking'];
const publicos = (f) => Object.fromEntries(CAMPOS.map((c) => [c, Boolean(f[c])]));

// GET /api/ajustes
router.get('/', async (req, res) => {
    try {
        res.json({ ajustes: publicos(await leerAjustes(req.usuario.id_usuario)), correoActivo: correoConfigurado() });
    } catch (error) {
        console.error('Error leyendo ajustes:', error.message);
        res.status(500).json({ message: 'No se pudieron cargar los ajustes.' });
    }
});

// PATCH /api/ajustes { notif_logros: true, perfil_visible: false, ... }
router.patch('/', async (req, res) => {
    try {
        const cambios = CAMPOS.filter((c) => typeof (req.body || {})[c] === 'boolean');
        if (!cambios.length) return res.status(400).json({ message: 'No hay nada que guardar.' });
        await leerAjustes(req.usuario.id_usuario);   // asegura la fila
        await connection.query(
            `UPDATE ajustes_usuario SET ${cambios.map((c) => `${c} = ?`).join(', ')} WHERE id_usuario = ?`,
            [...cambios.map((c) => (req.body[c] ? 1 : 0)), req.usuario.id_usuario],
        );
        res.json({ ajustes: publicos(await leerAjustes(req.usuario.id_usuario)) });
    } catch (error) {
        console.error('Error guardando ajustes:', error.message);
        res.status(500).json({ message: 'No se pudieron guardar los ajustes.' });
    }
});

export default router;
