import { Router } from 'express';
import { connection } from '../../config/mysql/dbmysql.js';
import { AREAS } from '../../data/curriculo.js';

const router = Router();

// "Ciencias Naturales" -> "ciencias_naturales" (clave estable para iconos y colores del front)
const claveDe = (nombre) => {
    const conocida = Object.entries(AREAS).find(([, a]) => a.nombre.toLowerCase() === String(nombre).toLowerCase());
    if (conocida) return conocida[0];
    return String(nombre).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '_');
};
const ORDEN = Object.keys(AREAS);

function leerGrado(valor) {
    const grado = parseInt(valor, 10);
    return grado >= 6 && grado <= 11 ? grado : null;
}

// GET /api/curriculo/areas?grado=7 -> asignaturas que se ven en ese grado
router.get('/areas', async (req, res) => {
    try {
        const grado = leerGrado(req.query.grado);
        if (!grado) return res.status(400).json({ message: 'El grado debe estar entre 6 y 11.' });

        const [filas] = await connection.query(
            `SELECT a.id_area, a.nombre, a.descripcion, COUNT(t.id_tema) AS total_temas
             FROM areas_academicas a
             JOIN temas t ON t.id_area = a.id_area AND t.grado = ?
             WHERE a.activa = 1
             GROUP BY a.id_area, a.nombre, a.descripcion`,
            [String(grado)],
        );
        const areas = filas
            .map((f) => ({
                id: f.id_area,
                clave: claveDe(f.nombre),
                nombre: f.nombre,
                descripcion: f.descripcion,
                totalTemas: Number(f.total_temas),
            }))
            .sort((a, b) => {
                const ia = ORDEN.indexOf(a.clave), ib = ORDEN.indexOf(b.clave);
                return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
            });
        res.json({ grado, areas });
    } catch (error) {
        console.error('Error listando áreas:', error.message);
        res.status(500).json({ message: 'No se pudieron cargar las asignaturas.' });
    }
});

// GET /api/curriculo/temas?area=1&grado=7 -> temas de una asignatura en un grado
router.get('/temas', async (req, res) => {
    try {
        const grado = leerGrado(req.query.grado);
        const idArea = parseInt(req.query.area, 10);
        if (!grado || !idArea) return res.status(400).json({ message: 'Faltan el área o el grado.' });

        const [areas] = await connection.query('SELECT id_area, nombre, descripcion FROM areas_academicas WHERE id_area = ? AND activa = 1', [idArea]);
        if (!areas[0]) return res.status(404).json({ message: 'Asignatura no encontrada.' });

        const [temas] = await connection.query(
            'SELECT id_tema, nombre, descripcion FROM temas WHERE id_area = ? AND grado = ? ORDER BY id_tema',
            [idArea, String(grado)],
        );
        res.json({
            grado,
            area: { id: areas[0].id_area, clave: claveDe(areas[0].nombre), nombre: areas[0].nombre, descripcion: areas[0].descripcion },
            temas: temas.map((t) => ({ id: t.id_tema, nombre: t.nombre, descripcion: t.descripcion })),
        });
    } catch (error) {
        console.error('Error listando temas:', error.message);
        res.status(500).json({ message: 'No se pudieron cargar los temas.' });
    }
});

// GET /api/curriculo/temas/:id -> un tema con su asignatura (para la página del tema)
router.get('/temas/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        if (!id) return res.status(400).json({ message: 'Tema no válido.' });
        const [filas] = await connection.query(
            `SELECT t.id_tema, t.nombre, t.descripcion, t.grado, a.id_area, a.nombre AS area
             FROM temas t JOIN areas_academicas a ON a.id_area = t.id_area WHERE t.id_tema = ?`,
            [id],
        );
        const t = filas[0];
        if (!t) return res.status(404).json({ message: 'Tema no encontrado.' });
        res.json({
            tema: { id: t.id_tema, nombre: t.nombre, descripcion: t.descripcion, grado: Number(t.grado) },
            area: { id: t.id_area, clave: claveDe(t.area), nombre: t.area },
        });
    } catch (error) {
        console.error('Error leyendo tema:', error.message);
        res.status(500).json({ message: 'No se pudo cargar el tema.' });
    }
});

export default router;
