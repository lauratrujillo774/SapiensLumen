// Carga en MySQL la teoría ya redactada que está en database/contenido/gradoN/*.js
//
//   npm run cargar-contenido -- --grado 6            (carga lo que falte)
//   npm run cargar-contenido -- --grado 6 --forzar   (reemplaza también lo que ya existe)
//   npm run cargar-contenido -- --grado 6 --revisar  (solo revisa, no escribe en la BD)
//
// Cada archivo exporta: { area: "Nombre en la tabla areas_academicas", temas: [...] }
// y cada tema se empareja con la BD por su nombre exacto.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import '../src/config/env.js';
const { connection } = await import('../src/config/mysql/dbmysql.js');
const { asegurarTablas } = await import('../src/config/mysql/esquema.js');
const { guardarContenidoManual } = await import('../src/services/contenido.service.js');

const args = process.argv.slice(2);
const grado = args[args.indexOf('--grado') + 1];
const forzar = args.includes('--forzar');
const soloRevisar = args.includes('--revisar');
if (!grado || !/^(6|7|8|9|10|11)$/.test(grado)) {
    console.error('Indica el grado: --grado 6 (de 6 a 11)');
    process.exit(1);
}

const carpeta = path.join(path.dirname(fileURLToPath(import.meta.url)), 'contenido', `grado${grado}`);
if (!fs.existsSync(carpeta)) { console.error(`No existe la carpeta ${carpeta}`); process.exit(1); }

const clave = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

// Formato compacto del archivo -> formato que espera el servicio
function convertir(t) {
    return {
        resumen: t.resumen,
        objetivos: t.objetivos,
        partes: t.partes.map(([emoji, titulo, explicacion, ejemplo, idea_clave]) => ({ emoji, titulo, explicacion, ejemplo, idea_clave })),
        mapa_mental: { centro: t.mapa[0], ramas: t.mapa[1].map(([titulo, hijos]) => ({ titulo, hijos })) },
        tarjetas: t.tarjetas.map(([frente, reverso]) => ({ frente, reverso })),
        busquedas_video: t.videos,
        num_preguntas: t.n,
    };
}

// Revisión de forma (lo que la plataforma espera)
function revisar(t) {
    const fallos = [];
    if (!t.resumen || t.resumen.length > 500) fallos.push('resumen vacío o > 500');
    if (!t.objetivos || t.objetivos.length < 3) fallos.push('menos de 3 objetivos');
    if (!t.partes || t.partes.length < 4 || t.partes.length > 7) fallos.push(`partes: ${t.partes?.length} (deben ser 4 a 7)`);
    (t.partes || []).forEach(([e, ti, ex, ej, k], i) => {
        if (!e || !ti || !ex || !ej || !k) fallos.push(`parte ${i + 1} incompleta`);
        if (ex && ex.length > 900) fallos.push(`parte ${i + 1}: explicación > 900`);
        if (ej && ej.length > 800) fallos.push(`parte ${i + 1}: ejemplo > 800`);
        if (k && k.length > 220) fallos.push(`parte ${i + 1}: idea clave > 220`);
    });
    if (!t.mapa || t.mapa[1].length < 3 || t.mapa[1].length > 6) fallos.push('mapa mental: 3 a 6 ramas');
    if (!t.tarjetas || t.tarjetas.length < 6) fallos.push('menos de 6 tarjetas');
    if (!t.videos || t.videos.length < 2) fallos.push('menos de 2 búsquedas de video');
    if (!(t.n >= 6 && t.n <= 20)) fallos.push('n fuera de 6 a 20');
    return fallos;
}

if (!soloRevisar) await asegurarTablas();
let cargados = 0, saltados = 0, errores = 0;

for (const archivo of fs.readdirSync(carpeta).filter((f) => f.endsWith('.js')).sort()) {
    const { area, temas } = await import(pathToFileURL(path.join(carpeta, archivo)).href);
    const [filas] = await connection.query(
        `SELECT t.id_tema, t.nombre FROM temas t JOIN areas_academicas a ON a.id_area = t.id_area
         WHERE a.nombre = ? AND t.grado = ? ORDER BY t.id_tema`,
        [area, grado],
    );
    const porNombre = new Map(filas.map((f) => [clave(f.nombre), f]));
    const usados = new Set();

    for (const t of temas) {
        const fila = porNombre.get(clave(t.tema));
        if (!fila) { console.error(`  ✗ [${area}] el tema "${t.tema}" no existe en la BD`); errores++; continue; }
        usados.add(fila.id_tema);
        const fallos = revisar(t);
        if (fallos.length) { console.error(`  ✗ [${area}] "${t.tema}": ${fallos.join('; ')}`); errores++; continue; }
        if (soloRevisar) { cargados++; continue; }

        const [[{ hay }]] = await connection.query('SELECT COUNT(*) AS hay FROM contenido_tema WHERE id_tema = ?', [fila.id_tema]);
        if (hay && !forzar) { saltados++; continue; }
        await guardarContenidoManual(fila.id_tema, convertir(t), 'redactado por Claude (Claude Code)');
        cargados++;
    }
    const faltan = filas.filter((f) => !usados.has(f.id_tema));
    console.log(`${area}: ${temas.length} temas en el archivo, ${filas.length} en la BD${faltan.length ? ' — FALTAN: ' + faltan.map((f) => f.nombre).join(' | ') : ''}`);
}
console.log(`\n${soloRevisar ? 'Revisados' : 'Cargados'}: ${cargados} · ya existían (saltados): ${saltados} · con error: ${errores}`);
await connection.end();
process.exit(errores ? 1 : 0);
