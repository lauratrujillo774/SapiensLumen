// Uso: npm run sembrar-curriculo
// Carga (o completa) las asignaturas y temas de src/data/curriculo.js en MySQL.
import '../src/config/env.js';
const { connection } = await import('../src/config/mysql/dbmysql.js');
const { sembrarCurriculo } = await import('../src/services/curriculo.service.js');

try {
    const nuevos = await sembrarCurriculo();
    console.log(`Listo: ${nuevos} temas nuevos agregados.`);
} catch (error) {
    console.error('No se pudo cargar el currículo:', error.message);
    process.exitCode = 1;
} finally {
    await connection.end();
}
