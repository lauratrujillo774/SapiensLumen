import './src/config/env.js';
import Server from './src/server/express.server.js';
import { dbConnectMysql } from './src/config/mysql/dbmysql.js';
import { asegurarCurriculo } from './src/services/curriculo.service.js';
import { asegurarTablas } from './src/config/mysql/esquema.js';
import { iniciarTareas } from './src/services/tareas.service.js';


async function main() {
    try {
        // Conexión a la base de datos
        //await dbConnectMongoose();
        await dbConnectMysql();
        await asegurarTablas();
        await asegurarCurriculo();


        const server = new Server();
        await server.start();
        iniciarTareas();   // recordatorios y resumen semanal por correo
    } catch (error) {
        console.error('Error al iniciar la aplicación:', error.message);
        process.exit(1);
    }
}

// Manejo de errores e inicio del servidor
main().catch(
    (error) => {
        console.error('Error fatal:', error);
        process.exit(1);
    }
);