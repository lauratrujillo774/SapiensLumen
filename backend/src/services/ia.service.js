import Anthropic from '@anthropic-ai/sdk';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import { z } from 'zod';

/* ============================================================
   Capa común de IA: el resto del servidor pide "dame este JSON" y aquí se decide
   con qué proveedor se resuelve.

   Orden de preferencia (usa los que tengan clave en el .env):
     1. Gemini (Google)  - capa gratuita, sin tarjeta. GEMINI_API_KEY
     2. Groq             - capa gratuita. GROQ_API_KEY
     3. Claude           - de pago, opcional. ANTHROPIC_API_KEY

   Si el primero falla (límite de uso, sobrecarga, clave mala, respuesta ilegible),
   se prueba automáticamente con el siguiente.
   Para forzar uno solo: IA_PROVEEDOR=gemini|groq|anthropic
   ============================================================ */

export class ErrorIA extends Error {}

const env = (nombre) => (process.env[nombre] || '').trim();

const CLAVES = { gemini: 'GEMINI_API_KEY', groq: 'GROQ_API_KEY', anthropic: 'ANTHROPIC_API_KEY' };
const ORDEN = ['gemini', 'groq', 'anthropic'];
const NOMBRES = { gemini: 'Gemini', groq: 'Groq', anthropic: 'Claude' };

/** Proveedores con clave, en orden de preferencia (o solo el forzado con IA_PROVEEDOR). */
export function proveedoresDisponibles() {
    const forzado = env('IA_PROVEEDOR').toLowerCase();
    const lista = ORDEN.includes(forzado) ? [forzado] : ORDEN;
    return lista.filter((p) => env(CLAVES[p]));
}

export const proveedor = () => proveedoresDisponibles()[0] || null;
export const hayIA = () => proveedoresDisponibles().length > 0;

export function nombreModelo(p = proveedor()) {
    if (p === 'anthropic') return env('ANTHROPIC_MODEL') || 'claude-opus-5-5';
    if (p === 'groq') return env('GROQ_MODEL') || 'openai/gpt-oss-120b';
    return env('GEMINI_MODEL') || 'gemini-2.5-flash';
}

/* ---------- Claude (cliente reemplazable en pruebas) ---------- */
let clienteAnthropic = null;
export const obtenerCliente = () => (clienteAnthropic ||= new Anthropic());
export function _usarClienteDePrueba(falso) { clienteAnthropic = falso; }

async function conClaude({ sistema, pedido, schema, maxTokens, esfuerzo }) {
    const respuesta = await obtenerCliente().messages.parse({
        model: nombreModelo('anthropic'),
        max_tokens: maxTokens,
        system: sistema,
        messages: [{ role: 'user', content: pedido }],
        output_config: { effort: esfuerzo, format: zodOutputFormat(schema) },
    });
    if (respuesta.stop_reason === 'refusal') throw new ErrorIA('La IA no pudo preparar este contenido.');
    if (respuesta.stop_reason === 'max_tokens') throw new ErrorIA('La respuesta de la IA salió demasiado larga. Intenta de nuevo.');
    if (!respuesta.parsed_output) throw new ErrorIA('La IA devolvió una respuesta que no se pudo leer. Intenta de nuevo.');
    return { data: respuesta.parsed_output, uso: `${respuesta.usage?.input_tokens ?? '?'} entrada / ${respuesta.usage?.output_tokens ?? '?'} salida` };
}

/* ---------- utilidades para los proveedores por HTTP ---------- */
const dormir = (s) => new Promise((r) => setTimeout(r, s * 1000));

function leerJSON(texto) {
    const limpio = texto.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
    return JSON.parse(limpio);
}

function esquemaTexto(schema) {
    const { $schema, ...esquema } = z.toJSONSchema(schema);
    return JSON.stringify(esquema);
}

const instruccionJSON = (sistema, schema) =>
    `${sistema}\n\nResponde SOLO con un objeto JSON válido que cumpla exactamente este JSON Schema. Sin Markdown y sin texto antes ni después:\n${esquemaTexto(schema)}`;

// Reintentos ante límite de uso (429) o sobrecarga (5xx). Si hay otro proveedor de respaldo,
// se espera poco para pasar a él cuanto antes.
async function pedirPorHTTP({ url, cabeceras, cuerpo, mensajeError, esperas }) {
    let ultimo = null;
    for (const espera of esperas) {
        if (espera) await dormir(espera);
        let respuesta;
        try {
            respuesta = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', ...cabeceras },
                body: JSON.stringify(cuerpo),
                signal: AbortSignal.timeout(120_000),
            });
        } catch {
            ultimo = new ErrorIA('No se pudo conectar con la IA. Revisa la conexión a internet.');
            continue;
        }
        const json = await respuesta.json().catch(() => null);
        if (respuesta.ok) return json;
        ultimo = new ErrorIA(mensajeError(respuesta.status, json));
        if (respuesta.status !== 429 && respuesta.status < 500) throw ultimo;   // reintentar no ayuda
    }
    throw ultimo;
}

// Pide, lee y valida el JSON; si viene mal formado, un segundo intento.
async function conValidacion(schema, pedirTexto, nombre) {
    let motivo = '';
    for (let intento = 0; intento < 2; intento++) {
        const { texto, uso } = await pedirTexto();
        try {
            const resultado = schema.safeParse(leerJSON(texto));
            if (resultado.success) return { data: resultado.data, uso };
            motivo = resultado.error.issues.slice(0, 3).map((i) => `${i.path.join('.')}: ${i.message}`).join('; ');
        } catch (error) {
            motivo = error.message;
        }
        console.warn(`${nombre} devolvió JSON con problemas (intento ${intento + 1}): ${motivo}`);
    }
    throw new ErrorIA('La IA devolvió una respuesta que no se pudo leer. Intenta de nuevo.');
}

/* ---------- Gemini (REST) ---------- */
function errorDeGemini(estado, cuerpo) {
    const detalle = cuerpo?.error?.message || '';
    if (estado === 400 && /api key/i.test(detalle)) return 'La clave de Gemini (GEMINI_API_KEY) no es válida.';
    if (estado === 401 || estado === 403) return 'La clave de Gemini no tiene permiso. Revisa GEMINI_API_KEY en el .env.';
    if (estado === 404) return `El modelo "${nombreModelo('gemini')}" no existe. Revisa GEMINI_MODEL en el .env.`;
    if (estado === 429) return 'Se alcanzó el límite gratuito de Gemini por ahora. Intenta de nuevo en unos minutos (el cupo diario se renueva cada día).';
    if (estado >= 500) return 'Gemini está sobrecargado en este momento. Intenta de nuevo en un minuto.';
    return `Gemini rechazó la petición (${estado}). ${detalle}`.trim();
}

async function conGemini({ sistema, pedido, schema, maxTokens }, esperas) {
    const cuerpo = {
        systemInstruction: { parts: [{ text: instruccionJSON(sistema, schema) }] },
        contents: [{ role: 'user', parts: [{ text: pedido }] }],
        generationConfig: { responseMimeType: 'application/json', maxOutputTokens: maxTokens, temperature: 0.4 },
    };
    return conValidacion(schema, async () => {
        const json = await pedirPorHTTP({
            url: `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(nombreModelo('gemini'))}:generateContent`,
            cabeceras: { 'x-goog-api-key': env('GEMINI_API_KEY') },
            cuerpo,
            mensajeError: errorDeGemini,
            esperas,
        });
        if (json?.promptFeedback?.blockReason) throw new ErrorIA('La IA no pudo preparar este contenido.');
        const candidato = json?.candidates?.[0];
        if (candidato?.finishReason === 'MAX_TOKENS') throw new ErrorIA('La respuesta de la IA salió demasiado larga. Intenta de nuevo.');
        const u = json?.usageMetadata;
        return {
            texto: (candidato?.content?.parts || []).map((p) => p.text || '').join(''),
            uso: `${u?.promptTokenCount ?? '?'} entrada / ${u?.candidatesTokenCount ?? '?'} salida`,
        };
    }, 'Gemini');
}

/* ---------- Groq (API compatible con OpenAI) ---------- */
function errorDeGroq(estado, cuerpo) {
    const detalle = cuerpo?.error?.message || '';
    if (estado === 401) return 'La clave de Groq (GROQ_API_KEY) no es válida.';
    if (estado === 403) return 'La clave de Groq no tiene permiso. Revisa GROQ_API_KEY en el .env.';
    if (estado === 404) return `El modelo "${nombreModelo('groq')}" no existe en Groq. Revisa GROQ_MODEL en el .env.`;
    if (estado === 413) return 'La petición es demasiado grande para el límite gratuito de Groq.';
    if (estado === 429) return 'Se alcanzó el límite gratuito de Groq por ahora. Intenta de nuevo en unos minutos.';
    if (estado >= 500) return 'Groq está sobrecargado en este momento. Intenta de nuevo en un minuto.';
    return `Groq rechazó la petición (${estado}). ${detalle}`.trim();
}

async function conGroq({ sistema, pedido, schema, maxTokens }, esperas) {
    const modelo = nombreModelo('groq');
    const cuerpo = {
        model: modelo,
        messages: [
            { role: 'system', content: instruccionJSON(sistema, schema) },
            { role: 'user', content: pedido },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.4,
        max_completion_tokens: Math.min(maxTokens, 8000),   // la capa gratuita tiene un tope de tokens por minuto
        ...(/gpt-oss/i.test(modelo) ? { reasoning_effort: 'low' } : {}),
    };
    return conValidacion(schema, async () => {
        const json = await pedirPorHTTP({
            url: 'https://api.groq.com/openai/v1/chat/completions',
            cabeceras: { Authorization: `Bearer ${env('GROQ_API_KEY')}` },
            cuerpo,
            mensajeError: errorDeGroq,
            esperas,
        });
        const eleccion = json?.choices?.[0];
        if (eleccion?.finish_reason === 'length') throw new ErrorIA('La respuesta de la IA salió demasiado larga. Intenta de nuevo.');
        const u = json?.usage;
        return { texto: eleccion?.message?.content || '', uso: `${u?.prompt_tokens ?? '?'} entrada / ${u?.completion_tokens ?? '?'} salida` };
    }, 'Groq');
}

/**
 * Pide a la IA un objeto JSON que cumpla `schema` (zod).
 * Prueba los proveedores con clave, en orden, hasta que uno responda.
 * Devuelve { data, uso, proveedor } o lanza ErrorIA.
 */
export async function generarJSON({ sistema, pedido, schema, maxTokens = 16000, esfuerzo = 'low' }) {
    const lista = proveedoresDisponibles();
    if (!lista.length) throw new ErrorIA('La IA no está configurada en el servidor.');

    let primerError = null;
    for (const [i, p] of lista.entries()) {
        const hayRespaldo = i < lista.length - 1;
        const esperas = hayRespaldo ? [0, 4] : [0, 10, 25, 60];   // con respaldo, no se pierde tiempo esperando
        try {
            const args = { sistema, pedido, schema, maxTokens, esfuerzo };
            const r = p === 'anthropic' ? await conClaude(args)
                : p === 'groq' ? await conGroq(args, esperas)
                    : await conGemini(args, esperas);
            return { ...r, uso: `${NOMBRES[p]} · ${r.uso}`, proveedor: p };
        } catch (error) {
            if (!(error instanceof ErrorIA)) throw error;   // errores propios del SDK de Claude los traduce contenido.service
            primerError ||= error;
            console.warn(`${NOMBRES[p]} no pudo responder: ${error.message}${hayRespaldo ? ' → probando con el siguiente proveedor' : ''}`);
        }
    }
    throw primerError;
}
