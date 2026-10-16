import { connection } from './dbmysql.js';

// Insignias que se agregan a tu tabla `insignias` (solo si no existen ya por nombre).
// tipo_condicion: racha | cantidad_retos | puntos | nivel | area  (los valores de tu enum)
const INSIGNIAS = [
    ['Primer reto', 'Completaste tu primer reto', 'cantidad_retos', 1],
    ['Cinco retos', 'Completaste 5 retos', 'cantidad_retos', 5],
    ['Diez retos', 'Completaste 10 retos', 'cantidad_retos', 10],
    ['Veinticinco retos', 'Completaste 25 retos', 'cantidad_retos', 25],
    ['Cincuenta retos', 'Completaste 50 retos', 'cantidad_retos', 50],
    ['Racha de 3 días', 'Estudiaste 3 días seguidos', 'racha', 3],
    ['Constante 7', 'Racha de 7 dias consecutivos', 'racha', 7],
    ['Imparable 30', 'Racha de 30 dias consecutivos', 'racha', 30],
    ['Cien puntos', 'Alcanzaste 100 puntos', 'puntos', 100],
    ['Quinientos puntos', 'Alcanzaste 500 puntos', 'puntos', 500],
    ['Mil puntos', 'Alcanzaste 1.000 puntos', 'puntos', 1000],
    ['Nivel Explorador', 'Llegaste al nivel 2', 'nivel', 2],
    ['Nivel Estratega', 'Llegaste al nivel 3', 'nivel', 3],
    ['Nivel Experto', 'Llegaste al nivel 4', 'nivel', 4],
    ['Nivel Maestro', 'Llegaste al nivel 5', 'nivel', 5],
    ['Curioso', 'Jugaste en 3 materias distintas', 'area', 3],
    ['Todoterreno', 'Jugaste en 5 materias distintas', 'area', 5],
];

// Crea las tablas NUEVAS que usa la plataforma (las que ya existían no se tocan).
export async function asegurarTablas() {
    // Lección generada con IA para cada tema. Se genera una sola vez y se sirve a todos.
    await connection.query(`
        CREATE TABLE IF NOT EXISTS contenido_tema (
            id_tema            INT UNSIGNED NOT NULL PRIMARY KEY,
            contenido          LONGTEXT     NOT NULL COMMENT 'JSON: partes, mapa mental, tarjetas, videos...',
            modelo             VARCHAR(60)  NOT NULL,
            num_preguntas      TINYINT UNSIGNED NOT NULL DEFAULT 10 COMMENT 'cuántas preguntas tendrá el juego (según lo robusto del tema)',
            videos_resueltos   TINYINT(1)   NOT NULL DEFAULT 0,
            fecha_generacion   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT fk_contenido_tema FOREIGN KEY (id_tema) REFERENCES temas (id_tema) ON DELETE CASCADE ON UPDATE CASCADE
        ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);

    // Fotos de perfil subidas por los usuarios (en la base de datos: el disco de Render no es permanente).
    await connection.query(`
        CREATE TABLE IF NOT EXISTS fotos_usuario (
            id_usuario INT UNSIGNED NOT NULL PRIMARY KEY,
            tipo       VARCHAR(20)  NOT NULL,
            datos      MEDIUMBLOB   NOT NULL,
            CONSTRAINT fk_fotos_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
        ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);

    // Ajustes de cada usuario (avisos, privacidad). Una fila por usuario.
    await connection.query(`
        CREATE TABLE IF NOT EXISTS ajustes_usuario (
            id_usuario          INT UNSIGNED NOT NULL PRIMARY KEY,
            notif_recordatorios TINYINT(1) NOT NULL DEFAULT 1 COMMENT 'recordatorio si pasan días sin estudiar',
            notif_logros        TINYINT(1) NOT NULL DEFAULT 1 COMMENT 'aviso al desbloquear una insignia',
            notif_semanal       TINYINT(1) NOT NULL DEFAULT 0 COMMENT 'correo semanal con el resumen',
            notif_companeros    TINYINT(1) NOT NULL DEFAULT 1 COMMENT 'invitaciones y respuestas de compañeros',
            perfil_visible      TINYINT(1) NOT NULL DEFAULT 1 COMMENT 'los compañeros pueden ver progreso e insignias',
            mostrar_ranking     TINYINT(1) NOT NULL DEFAULT 1 COMMENT 'aparece en el ranking de los compañeros',
            ultimo_recordatorio DATE NULL,
            ultimo_resumen      DATE NULL,
            CONSTRAINT fk_ajustes_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
        ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);

    // Invitaciones y compañeros. Una fila por pareja (quien invita -> quien recibe).
    await connection.query(`
        CREATE TABLE IF NOT EXISTS companeros (
            id_companero     INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            id_solicitante   INT UNSIGNED NOT NULL,
            id_destinatario  INT UNSIGNED NOT NULL,
            estado           ENUM('pendiente','aceptada','rechazada') NOT NULL DEFAULT 'pendiente',
            codigo           CHAR(8) NOT NULL COMMENT 'código de la invitación (también va en el correo)',
            fecha_solicitud  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            fecha_respuesta  DATETIME NULL,
            UNIQUE KEY uq_pareja (id_solicitante, id_destinatario),
            UNIQUE KEY uq_codigo (codigo),
            KEY ix_destinatario (id_destinatario, estado),
            CONSTRAINT fk_comp_solicitante  FOREIGN KEY (id_solicitante)  REFERENCES usuarios (id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
            CONSTRAINT fk_comp_destinatario FOREIGN KEY (id_destinatario) REFERENCES usuarios (id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
        ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);

    // Notificaciones de la campana.
    await connection.query(`
        CREATE TABLE IF NOT EXISTS notificaciones (
            id_notificacion INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            id_usuario      INT UNSIGNED NOT NULL,
            tipo            VARCHAR(30)  NOT NULL COMMENT 'invitacion | companero | logro | recordatorio | resumen',
            titulo          VARCHAR(120) NOT NULL,
            mensaje         VARCHAR(300) NOT NULL,
            url             VARCHAR(200) NULL,
            leida           TINYINT(1)   NOT NULL DEFAULT 0,
            fecha           DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
            KEY ix_usuario (id_usuario, leida, fecha),
            CONSTRAINT fk_notif_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
        ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);

    // Qué preguntas le tocaron a cada partida. El banco de preguntas de un tema es más grande que
    // una partida, y cada partida toma un grupo distinto.
    await connection.query(`
        CREATE TABLE IF NOT EXISTS intento_preguntas (
            id_intento  INT UNSIGNED NOT NULL,
            id_pregunta INT UNSIGNED NOT NULL,
            orden       SMALLINT UNSIGNED NOT NULL,
            PRIMARY KEY (id_intento, id_pregunta),
            KEY ix_pregunta (id_pregunta),
            CONSTRAINT fk_ip_intento  FOREIGN KEY (id_intento)  REFERENCES intentos_reto (id_intento) ON DELETE CASCADE ON UPDATE CASCADE,
            CONSTRAINT fk_ip_pregunta FOREIGN KEY (id_pregunta) REFERENCES preguntas (id_pregunta) ON DELETE CASCADE ON UPDATE CASCADE
        ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);

    // Insignias: se agregan solo las que falten (por nombre)
    const [existentes] = await connection.query('SELECT nombre FROM insignias');
    const tiene = new Set(existentes.map((f) => f.nombre.toLowerCase()));
    for (const [nombre, descripcion, tipo, valor] of INSIGNIAS) {
        if (tiene.has(nombre.toLowerCase())) continue;
        await connection.query(
            'INSERT INTO insignias (nombre, descripcion, tipo_condicion, valor_condicion) VALUES (?, ?, ?, ?)',
            [nombre, descripcion, tipo, valor],
        );
    }
}
