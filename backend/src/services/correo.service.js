import nodemailer from 'nodemailer';
import { emitirEvento, n8nEnviaCorreos } from './n8n.service.js';

/* ============================================================
   Envío de correos (invitaciones, logros, recordatorios, resumen semanal).

   Se configura en backend/.env:
     SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS   (con Gmail: smtp.gmail.com, 465 y una "contraseña de aplicación")
     SMTP_FROM   (opcional; por defecto "Sapiens Lumen <SMTP_USER>")
     APP_URL     (dirección pública de la página; por defecto http://localhost:7000)

   Si falta la configuración, NO se rompe nada: las notificaciones siguen apareciendo
   en la campana y solo se omite el correo.
   ============================================================ */

const env = (n) => (process.env[n] || '').trim();

export const correoConfigurado = () => Boolean(env('SMTP_HOST') && env('SMTP_USER') && env('SMTP_PASS'));
export const urlApp = () => (env('APP_URL') || `http://localhost:${env('PORT') || 7000}`).replace(/\/+$/, '');

let transporte = null;
let avisoSinCorreo = false;
function obtenerTransporte() {
    if (!transporte) {
        const puerto = Number(env('SMTP_PORT')) || 465;
        transporte = nodemailer.createTransport({
            host: env('SMTP_HOST'),
            port: puerto,
            secure: puerto === 465,   // 465 = TLS directo; 587 = STARTTLS
            auth: { user: env('SMTP_USER'), pass: env('SMTP_PASS') },
        });
    }
    return transporte;
}
export function _usarTransporteDePrueba(falso) { transporte = falso; }

export const escapar = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Plantilla sencilla con la identidad de la plataforma
export function plantilla({ titulo, parrafos = [], boton = null, destacado = null }) {
    const cuerpo = parrafos.map((p) => `<p style="margin:0 0 14px;font-size:16px;line-height:1.55;color:#1B3A2F;">${p}</p>`).join('');
    const caja = destacado
        ? `<div style="margin:18px 0;padding:16px;border-radius:14px;background:#E8F5E9;text-align:center;font-size:28px;font-weight:700;letter-spacing:6px;color:#1B5E20;">${escapar(destacado)}</div>`
        : '';
    const accion = boton
        ? `<p style="margin:22px 0 6px;"><a href="${escapar(boton.url)}" style="display:inline-block;background:#2E7D32;color:#ffffff;text-decoration:none;font-weight:700;padding:13px 26px;border-radius:12px;">${escapar(boton.texto)}</a></p>`
        : '';
    return `<!doctype html><html lang="es"><body style="margin:0;padding:24px;background:#F1F8E9;font-family:Segoe UI,Arial,sans-serif;">
<div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:18px;padding:30px;border:1px solid #C8E6C9;">
<h1 style="margin:0 0 6px;font-size:22px;color:#2E7D32;">🦆 Sapiens Lumen</h1>
<h2 style="margin:0 0 18px;font-size:19px;color:#1B3A2F;">${escapar(titulo)}</h2>
${cuerpo}${caja}${accion}
<p style="margin:26px 0 0;font-size:12px;color:#78909C;">Recibes este correo porque tienes una cuenta en Sapiens Lumen. Puedes elegir qué avisos recibir en Ajustes.</p>
</div></body></html>`;
}

/** Envía un correo. Nunca lanza: devuelve true si se envió, false si no. */
export async function enviarCorreo({ para, asunto, texto, html }) {
    // Si n8n envía los correos, la app solo le pasa el mensaje listo
    if (n8nEnviaCorreos()) return emitirEvento('correo', { para, asunto, texto, html });
    if (!correoConfigurado() && !transporte) {
        if (!avisoSinCorreo) {
            avisoSinCorreo = true;
            console.warn('⚠️  Los correos NO se están enviando: faltan SMTP_HOST, SMTP_USER y SMTP_PASS en backend/.env. Las alertas solo aparecen en la campana.');
        }
        return false;
    }
    try {
        await obtenerTransporte().sendMail({
            from: env('SMTP_FROM') || `Sapiens Lumen <${env('SMTP_USER')}>`,
            to: para,
            subject: asunto,
            text: texto,
            html,
        });
        return true;
    } catch (error) {
        console.error(`No se pudo enviar el correo a ${para}:`, explicarError(error));
        return false;
    }
}

// Traduce los errores típicos del servidor de correo a algo que se pueda arreglar
export function explicarError(error) {
    const m = String(error && error.message || '');
    if (error && error.code === 'EAUTH' || /535|Invalid login|Username and Password not accepted/i.test(m)) {
        return 'el servidor rechazó el usuario o la clave. Con Gmail hay que usar una "contraseña de aplicación" (16 letras), no la contraseña normal. (' + m + ')';
    }
    if (error && (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT' || error.code === 'ESOCKET' || error.code === 'ENOTFOUND')) {
        return 'no se pudo conectar al servidor de correo. Revisa SMTP_HOST, SMTP_PORT y tu conexión a internet. (' + m + ')';
    }
    return m;
}

/** Comprueba la conexión y el login SMTP. Devuelve { ok, mensaje }. */
export async function verificarCorreo() {
    if (!correoConfigurado()) return { ok: false, mensaje: 'Faltan SMTP_HOST, SMTP_USER y/o SMTP_PASS en backend/.env.' };
    try {
        await obtenerTransporte().verify();
        return { ok: true, mensaje: 'Conexión correcta: el servidor de correo aceptó el usuario y la clave.' };
    } catch (error) {
        return { ok: false, mensaje: explicarError(error) };
    }
}
