// Prepara las lecciones por adelantado para que los estudiantes no esperen.
//
//   npm run generar-contenido -- --grado 7                 (todas las asignaturas de 7°)
//   npm run generar-contenido -- --grado 7 --area 1        (solo Matemáticas de 7°)
//   npm run generar-contenido -- --grado 7 --limite 10     (máximo 10 temas en esta tanda)
//   npm run generar-contenido -- --todo                    (los 502 temas: tarda y cuesta)
//
// Los temas que ya tienen lección se saltan, así que se puede repetir sin gastar de más.
import '../src/config/env.js';
const { connection } = await import('../src/config/mysql/dbmysql.js');
const { asegurarTablas } = await import('../src/config/mysql/esquema.js');
const { generarYGuardar, hayIA } = await import('../src/services/contenido.service.js');

const args = process.argv.slice(2);
const valor = (nombre) => { const i = args.indexOf(`--${nombre}`); return i >= 0 ? args[i + 1] : null; };
const grado = valor('grado');
const area = valor('area');
const limite = Number(valor('limite')) || Infinity;
const todo = args.includes('--todo');

if (!hayIA()) {
    console.error('Falta GEMINI_API_KEY o GROQ_API_KEY en backend/.env');
    process.exit(1);
}
if (!grado && !todo) {
    console.error('Indica --grado 6..11 (y opcionalmente --area ID), o --todo.');
    process.exit(1);
}

await asegurarTablas();
const condiciones = ['c.id_tema IS NULL'];
const parametros = [];
if (grado) { condiciones.push('t.grado = ?'); parametros.push(String(grado)); }
if (area) { condiciones.push('t.id_area = ?'); parametros.push(Number(area)); }

const [pendientes] = await connection.query(
    `SELECT t.id_tema, t.nombre FROM temas t
     LEFT JOIN contenido_tema c ON c.id_tema = t.id_tema
     WHERE ${condiciones.join(' AND ')} ORDER BY t.id_tema`,
    parametros,
);
const lote = pendientes.slice(0, limite);
console.log(`${pendientes.length} temas sin lección; se prepararán ${lote.length}.`);

const simultaneos = Number(process.env.IA_CONCURRENCIA) || 3;
let siguiente = 0, listos = 0, fallidos = 0;
async function trabajador() {
    while (siguiente < lote.length) {
        const tema = lote[siguiente++];
        try {
            await generarYGuardar(tema.id_tema);
            listos++;
        } catch (error) {
            fallidos++;
            console.error(`  ✗ ${tema.id_tema} ${tema.nombre}: ${error.message}`);
        }
    }
}
await Promise.all(Array.from({ length: simultaneos }, trabajador));
console.log(`Terminado: ${listos} listos, ${fallidos} con error.`);
await connection.end();
