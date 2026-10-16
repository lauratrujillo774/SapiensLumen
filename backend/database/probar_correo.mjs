// Prueba el envío de correos de la plataforma.
//
//   npm run probar-correo                     (solo comprueba la conexión y el login)
//   npm run probar-correo -- --a alguien@correo.com   (además envía un correo de prueba)
import '../src/config/env.js';
const { verificarCorreo, enviarCorreo, plantilla, urlApp, explicarError } = await import('../src/services/correo.service.js');

const i = process.argv.indexOf('--a');
const destino = i >= 0 ? process.argv[i + 1] : null;

console.log('Probando la conexión con el servidor de correo...');
const v = await verificarCorreo();
console.log((v.ok ? '✔ ' : '✘ ') + v.mensaje);
if (!v.ok) process.exit(1);

if (destino) {
    console.log(`Enviando un correo de prueba a ${destino}...`);
    const ok = await enviarCorreo({
        para: destino,
        asunto: '🦆 Prueba de correo de Sapiens Lumen',
        texto: 'Si lees esto, los correos de Sapiens Lumen funcionan.',
        html: plantilla({
            titulo: '¡Los correos funcionan!',
            parrafos: ['Si estás leyendo esto, las invitaciones, los logros y los recordatorios de Sapiens Lumen ya te llegarán a este correo.'],
            boton: { texto: 'Abrir Sapiens Lumen', url: urlApp() + '/home/home.html' },
        }),
    });
    console.log(ok ? '✔ Enviado. Revisa la bandeja de entrada (y la carpeta de spam).' : '✘ No se pudo enviar (mira el error de arriba).');
    process.exit(ok ? 0 : 1);
}
console.log('Para enviar un correo de prueba: npm run probar-correo -- --a tucorreo@gmail.com');
