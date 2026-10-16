// Limita cuántas veces por minuto puede llamar un usuario a una ruta (por ejemplo, para que nadie
// pruebe cientos de correos buscando cuentas).
export function limitarPorMinuto(maximo) {
    const registro = new Map();
    return (req, res, next) => {
        const id = req.usuario?.id_usuario ?? req.ip;
        const ahora = Date.now();
        const recientes = (registro.get(id) || []).filter((t) => ahora - t < 60_000);
        if (recientes.length >= maximo) {
            registro.set(id, recientes);
            return res.status(429).json({ message: 'Estás haciendo muchas peticiones seguidas. Espera un momento.' });
        }
        recientes.push(ahora);
        registro.set(id, recientes);
        next();
    };
}
