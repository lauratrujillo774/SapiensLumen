import { connection } from '../config/mysql/dbmysql.js';
import { AREAS, TEMARIO, TOTAL_TEMAS } from '../data/curriculo.js';

// Crea las áreas y los temas que falten (no duplica ni borra nada de lo que ya existe)
export async function sembrarCurriculo() {
    const idPorClave = {};

    for (const [clave, area] of Object.entries(AREAS)) {
        const [existente] = await connection.query('SELECT id_area FROM areas_academicas WHERE nombre = ? LIMIT 1', [area.nombre]);
        if (existente[0]) {
            idPorClave[clave] = existente[0].id_area;
        } else {
            const [r] = await connection.query(
                'INSERT INTO areas_academicas (nombre, descripcion, activa) VALUES (?, ?, 1)',
                [area.nombre, area.descripcion],
            );
            idPorClave[clave] = r.insertId;
        }
    }

    let nuevos = 0;
    for (const [clave, porGrado] of Object.entries(TEMARIO)) {
        const idArea = idPorClave[clave];
        for (const [grado, nombres] of Object.entries(porGrado)) {
            for (const nombre of nombres) {
                const [r] = await connection.query(
                    `INSERT INTO temas (id_area, nombre, grado)
                     SELECT ?, ?, ? FROM DUAL
                     WHERE NOT EXISTS (SELECT 1 FROM temas WHERE id_area = ? AND grado = ? AND nombre = ?)`,
                    [idArea, nombre, String(grado), idArea, String(grado), nombre],
                );
                nuevos += r.affectedRows;
            }
        }
    }
    return nuevos;
}

// Al arrancar el servidor: si faltan temas, los carga
export async function asegurarCurriculo() {
    const [[{ total }]] = await connection.query('SELECT COUNT(*) AS total FROM temas');
    if (total >= TOTAL_TEMAS) return;
    const nuevos = await sembrarCurriculo();
    console.log(`Currículo cargado: ${nuevos} temas nuevos`);
}
