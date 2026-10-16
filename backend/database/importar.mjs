// Sube backend/database/respaldo.sql a la base de datos de destino (Aiven).
// Uso: crea backend/.env.aiven con MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE,
//      MYSQL_SSL=true y (opcional) MYSQL_SSL_CA, y ejecuta:  npm run importar-bd
//      Si el destino ya tiene tablas, agrega --reemplazar para borrarlas y cargar el respaldo.
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const archivoEnv = fileURLToPath(new URL('../.env.aiven', import.meta.url));
const archivoSql = fileURLToPath(new URL('./respaldo.sql', import.meta.url));

if (!existsSync(archivoEnv)) { console.error('Falta backend/.env.aiven con los datos de conexión de Aiven.'); process.exit(1); }
if (!existsSync(archivoSql)) { console.error('Falta backend/database/respaldo.sql. Ejecuta primero: npm run exportar-bd'); process.exit(1); }
const env = dotenv.parse(readFileSync(archivoEnv));

const ssl = env.MYSQL_SSL === 'true'
    ? (env.MYSQL_SSL_CA ? { ca: env.MYSQL_SSL_CA.replace(/\\n/g, '\n') } : { rejectUnauthorized: false })
    : undefined;

const con = await mysql.createConnection({
    host: env.MYSQL_HOST, port: Number(env.MYSQL_PORT), user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD, database: env.MYSQL_DATABASE, ssl, charset: 'UTF8MB4_UNICODE_CI',
});
console.log(`Conectado a ${env.MYSQL_HOST} / ${env.MYSQL_DATABASE}`);

const [[{ n }]] = await con.query('SELECT COUNT(*) AS n FROM information_schema.tables WHERE table_schema = DATABASE()');
if (n > 0 && !process.argv.includes('--reemplazar')) {
    console.error(`El destino ya tiene ${n} tablas. Si quieres borrarlas y cargar el respaldo, ejecuta: npm run importar-bd -- --reemplazar`);
    process.exit(1);
}

const instrucciones = readFileSync(archivoSql, 'utf8').split('\n').filter((l) => l && !l.startsWith('--'));
let hechas = 0;
for (const sql of instrucciones) {
    try {
        await con.query(sql);
        hechas++;
    } catch (error) {
        console.error(`\nFalló la instrucción ${hechas + 1}: ${error.message}\n${sql.slice(0, 300)}`);
        process.exit(1);
    }
}
console.log(`Listo: ${hechas} instrucciones aplicadas.`);
await con.end();
