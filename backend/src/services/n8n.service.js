/* ============================================================
   Conexión con n8n (automatizaciones). Se configura en backend/.env:

     N8N_WEBHOOK_URL       URL del nodo "Webhook" (POST) de tu flujo en n8n. Sin ella, no se envía nada.
     N8N_SECRET            clave compartida: se manda en el encabezado X-Sapiens-Secret para que n8n
                           compruebe que el aviso viene de esta app.
     N8N_ENVIAR_CORREOS    "true" para que los correos los envíe n8n (evento "correo") en lugar de SMTP.
                           Útil en Render gratis, que bloquea los puertos SMTP.

   Eventos que la app envía (todos con { evento, fecha, ...datos }):
     usuario_registrado   { usuario: { id, nombre, apellido, correo } , proveedor }
     partida_finalizada   { usuario: { id }, idTema, total, aciertos, porcentaje, estrellas, xp, nivel, racha, insignias: [nombre] }
     notificacion         { usuario: { id }, tipo, titulo, mensaje, url }
     correo               { para, asunto, texto, html }

   Nunca se envían contraseñas. Si n8n falla o tarda, la app sigue funcionando.
   ============================================================ */

const env = (n) => (process.env[n] || '').trim();

export const n8nConfigurado = () => Boolean(env('N8N_WEBHOOK_URL'));
export const n8nEnviaCorreos = () => n8nConfigurado() && env('N8N_ENVIAR_CORREOS').toLowerCase() === 'true';

let avisoFallo = 0;

/** Avisa a n8n de un evento. Nunca lanza: devuelve true si n8n lo recibió. */
export async function emitirEvento(evento, datos = {}) {
    if (!n8nConfigurado()) return false;
    try {
        const respuesta = await fetch(env('N8N_WEBHOOK_URL'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-Sapiens-Secret': env('N8N_SECRET') },
            body: JSON.stringify({ evento, fecha: new Date().toISOString(), ...datos }),
            signal: AbortSignal.timeout(10_000),
        });
        if (!respuesta.ok) throw new Error(`n8n respondió ${respuesta.status}`);
        return true;
    } catch (error) {
        // se avisa como máximo una vez por minuto para no llenar el registro
        if (Date.now() - avisoFallo > 60_000) {
            avisoFallo = Date.now();
            console.error(`No se pudo avisar a n8n (${evento}):`, error.message);
        }
        return false;
    }
}
