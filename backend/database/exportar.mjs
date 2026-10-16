// Guarda toda la base de datos local (tablas + datos) en backend/database/respaldo.sql
// Uso: npm run exportar-bd
import '../src/config/env.js';
import mysql from 'mysql2/promise';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const salida = fileURLToPath(new URL('./respaldo.sql', import.meta.url));

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    charset: 'UTF8MB4_UNICODE_CI',
    dateStrings: true,
});
await con.query("SET time_zone = '+00:00'");

// Quita lo que solo entiende MariaDB para que MySQL 8 (Aiven) lo acepte
function normalizar(sql) {
    return sql
        .replace(/current_timestamp\(\)/gi, 'CURRENT_TIMESTAMP')
        .replace(/,\s*CONSTRAINT `[^`]+` CHECK \(json_valid\([^)]*\)\)/gi, '')
        .replace(/ CHECK \(json_valid\(`[^`]+`\)\)/gi, '')
        .replace(/ROW_FORMAT=\w+/gi, '')
        .replace(/ COLLATE=utf8mb4_(unicode|general)_ci/gi, ' COLLATE=utf8mb4_unicode_ci');
}

const lineas = [
    '-- Respaldo de Sapiens Lumen (una instrucción por línea)',
    "SET NAMES utf8mb4;",
    "SET time_zone = '+00:00';",
    'SET FOREIGN_KEY_CHECKS = 0;',
];

const [tablas] = await con.query("SELECT table_name AS n FROM information_schema.tables WHERE table_schema = DATABASE() AND table_type = 'BASE TABLE' ORDER BY 1");
let totalFilas = 0;
for (const { n } of tablas) {
    const [[crear]] = await con.query(`SHOW CREATE TABLE \`${n}\``);
    lineas.push(`DROP TABLE IF EXISTS \`${n}\`;`);
    lineas.push(normalizar(crear['Create Table']).replace(/\s*\n\s*/g, ' ') + ';');

    const [filas] = await con.query(`SELECT * FROM \`${n}\``);
    totalFilas += filas.length;
    if (!filas.length) continue;
    const columnas = Object.keys(filas[0]).map((c) => `\`${c}\``).join(', ');
    for (let i = 0; i < filas.length; i += 200) {
        const valores = filas.slice(i, i + 200)
            .map((f) => '(' + Object.values(f).map((v) => con.escape(v)).join(', ') + ')')
            .join(', ');
        lineas.push(`INSERT INTO \`${n}\` (${columnas}) VALUES ${valores};`);
    }
}
lineas.push('SET FOREIGN_KEY_CHECKS = 1;');
writeFileSync(salida, lineas.join('\n') + '\n', 'utf8');
console.log(`Listo: ${tablas.length} tablas y ${totalFilas} filas guardadas en backend/database/respaldo.sql`);
console.log('Ese archivo tiene datos de usuarios: no lo subas a GitHub (ya está en .gitignore).');
await con.end();
