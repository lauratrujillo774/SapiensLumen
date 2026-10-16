// Prueba la IA del juego con un tema real, sin abrir el navegador.
//
//   npm run probar-ia -- --tema 12                 (por id_tema)
//   npm run probar-ia -- --tema "Radicales"        (por parte del nombre; se usa el primero que coincida)
//   npm run probar-ia -- --tema 12 --grado 9       (para desambiguar por grado)
//
// Necesita GEMINI_API_KEY o GROQ_API_KEY (ambas gratis) en .env. Si el tema ya tiene preguntas, solo las muestra
// (las preguntas se generan una vez y se guardan en MySQL).
import '../src/config/env.js';
const { connection } = await import('../src/config/mysql/dbmysql.js');
const { asegurarTablas } = await import('../src/config/mysql/esquema.js');
const { hayIA, mensajeDeError } = await import('../src/services/contenido.service.js');
const { generarPreguntas, obtenerReto } = await import('../src/services/preguntas.service.js');

const args = process.argv.slice(2);
const valor = (bandera) => { const i = args.indexOf(bandera); return i >= 0 ? args[i + 1] : null; };
const buscado = valor('--tema');
const grado = valor('--grado');
if (!buscado) { console.error('Indica el tema: --tema 12  o  --tema "Radicales"'); process.exit(1); }
if (!hayIA()) {
    console.error('Falta GEMINI_API_KEY (aistudio.google.com/apikey) o GROQ_API_KEY (console.groq.com/keys) en backend/.env.');
    process.exit(1);
}

await asegurarTablas();

const esId = /^\d+$/.test(buscado);
const [temas] = await connection.query(
    `SELECT t.id_tema, t.nombre, t.grado, a.nombre AS area
     FROM temas t JOIN areas_academicas a ON a.id_area = t.id_area
     WHERE ${esId ? 't.id_tema = ?' : 't.nombre LIKE ?'} ${grado ? 'AND t.grado = ?' : ''}
     ORDER BY t.id_tema LIMIT 5`,
    [esId ? Number(buscado) : `%${buscado}%`, ...(grado ? [grado] : [])],
);
if (!temas.length) { console.error('No encontré ese tema.'); await connection.end(); process.exit(1); }
if (temas.length > 1) {
    console.log('Hay varias coincidencias, uso la primera (usa --grado o el id para elegir otra):');
    for (const t of temas) console.log(`  #${t.id_tema} ${t.area} ${t.grado}° — ${t.nombre}`);
}
const tema = temas[0];
console.log(`\nTema #${tema.id_tema}: ${tema.area} ${tema.grado}° — ${tema.nombre}`);

try {
    let reto = await obtenerReto(tema.id_tema);
    if (reto) {
        console.log('Ya tenía preguntas guardadas; las muestro sin llamar a la IA.');
    } else {
        const t0 = Date.now();
        console.log('Pidiendo las preguntas a la IA...');
        await generarPreguntas(tema.id_tema);
        console.log(`Listo en ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
        reto = await obtenerReto(tema.id_tema);
    }

    const [preguntas] = await connection.query(
        'SELECT id_pregunta, enunciado, tipo, respuesta_correcta, puntos FROM preguntas WHERE id_reto = ? ORDER BY orden',
        [reto.id],
    );
    console.log(`\n${preguntas.length} preguntas:\n`);
    for (const [i, p] of preguntas.entries()) {
        console.log(`${i + 1}. [${p.tipo}, ${p.puntos} pts] ${p.enunciado}`);
        if (p.tipo === 'opcion_multiple') {
            const [ops] = await connection.query('SELECT texto, es_correcta FROM opciones_respuesta WHERE id_pregunta = ? ORDER BY id_opcion', [p.id_pregunta]);
            for (const o of ops) console.log(`     ${o.es_correcta ? '✔' : '·'} ${o.texto}`);
        } else {
            console.log(`     ✔ ${p.respuesta_correcta}`);
        }
    }
} catch (error) {
    console.error('\nNo se pudo generar:', mensajeDeError(error));
    console.error('Detalle técnico:', error.message);
    process.exitCode = 1;
}
await connection.end();
