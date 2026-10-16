// Busca juegos ya guardados con preguntas en inglés (en cualquier asignatura menos Inglés)
// y los desactiva para que la IA los vuelva a generar en español la próxima vez que alguien los abra.
// No borra nada: el historial de partidas y puntos se conserva.
//
//   npm run revisar-idioma             (desactiva los que tengan preguntas en inglés)
//   npm run revisar-idioma -- --ver    (solo muestra cuáles serían, sin cambiar nada)
import '../src/config/env.js';
const { connection } = await import('../src/config/mysql/dbmysql.js');
const { pareceIngles, esAreaDeIngles } = await import('../src/services/preguntas.service.js');

const soloVer = process.argv.includes('--ver');

const [filas] = await connection.query(
    `SELECT r.id_reto, r.id_tema, t.nombre AS tema, t.grado, a.nombre AS area,
            p.id_pregunta, p.enunciado, p.explicacion_paso_a_paso AS explicacion
     FROM retos r
     JOIN temas t ON t.id_tema = r.id_tema
     JOIN areas_academicas a ON a.id_area = t.id_area
     JOIN preguntas p ON p.id_reto = r.id_reto
     WHERE r.activo = 1`,
);

const malos = new Map();   // id_reto -> { info, preguntas }
for (const f of filas) {
    if (esAreaDeIngles(f.area)) continue;
    if (pareceIngles(f.enunciado) || pareceIngles(f.explicacion)) {
        if (!malos.has(f.id_reto)) malos.set(f.id_reto, { f, preguntas: [] });
        malos.get(f.id_reto).preguntas.push(f.enunciado);
    }
}

if (!malos.size) console.log('Todos los juegos guardados están en español. 👍');
for (const [idReto, { f, preguntas }] of malos) {
    console.log(`Reto #${idReto} — ${f.area} ${f.grado}° — ${f.tema}: ${preguntas.length} pregunta(s) en inglés, p. ej. «${preguntas[0].slice(0, 70)}»`);
    if (!soloVer) await connection.query('UPDATE retos SET activo = 0 WHERE id_reto = ?', [idReto]);
}
if (malos.size) {
    console.log(soloVer ? '\n(Solo vista previa: no se cambió nada.)' : `\n${malos.size} juego(s) desactivado(s). Se regenerarán en español al abrirlos.`);
}
await connection.end();
