import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import router from '../routes/index.js';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const carpetaUploads = fileURLToPath(new URL('../../uploads', import.meta.url));

// Carpeta del front (HTML, CSS, JS e imágenes)
const carpetaFrontend = fileURLToPath(new URL('../../../frontend', import.meta.url));

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middleware();
        this.routes();
        this.handleErrors();
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // Subida de archivos: máximo 2 MB (si se pasa, el archivo llega con truncated = true)
        this.app.use(fileUpload({ limits: { fileSize: 2 * 1024 * 1024 } }));
        // Fotos de perfil subidas por los usuarios
        this.app.use('/uploads', express.static(carpetaUploads));

        // El front se sirve desde el mismo servidor (nunca se publica backend/, ahí está el .env)
        this.app.use(express.static(carpetaFrontend));
        // Los navegadores piden /favicon.ico por su cuenta: se les da el patico
        this.app.get('/favicon.ico', (req, res) => res.type('png').sendFile(path.join(carpetaFrontend, 'img', 'pato.png')));
        this.app.get('/', (req, res) => res.redirect('/inicio/inicio.html'));
    }

    routes() {
        // Carga automática de src/routes/<carpeta>/<archivo>.js como /api/<archivo>
        this.app.use('/api', router);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Conectado al puerto ${this.port}`);
            console.log(`Abre http://localhost:${this.port}`);
        });
    }

    handleErrors() {
        this.app.use((err, req, res, next) => {
            if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
                console.error("JSON inválido en la petición:", err.message);
                return res.status(400).json({ message: "JSON inválido en la petición" });
            }
            next(err);
        });
    }
}

export default Server;
