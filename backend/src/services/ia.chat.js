import {
    ErrorIA, proveedoresDisponibles, nombreModelo, obtenerCliente, pedirPorHTTP, errorDeGemini, errorDeGroq,
} from './ia.service.js';

/* ============================================================
   Conversación libre (chat): devuelve TEXTO en vez de JSON.
   mensajes = [{ rol: 'usuario' | 'tutor', texto }]  (el último es del usuario)
   Usa los mismos proveedores y el mismo respaldo automático que generarJSON:
   Gemini -> Groq -> Claude (los que tengan clave en el .env).
   ============================================================ */

const env = (nombre) => (process.env[nombre] || '').trim();
const NOMBRES = { gemini: 'Gemini', groq: 'Groq', anthropic: 'Claude' };

async function chatConGemini({ sistema, mensajes, maxTokens }, esperas) {
    const json = await pedirPorHTTP({
        url: `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(nombreModelo('gemini'))}:generateContent`,
        cabeceras: { 'x-goog-api-key': env('GEMINI_API_KEY') },
        cuerpo: {
            systemInstruction: { parts: [{ text: sistema }] },
            contents: mensajes.map((m) => ({ role: m.rol === 'tutor' ? 'model' : 'user', parts: [{ text: m.texto }] })),
            generationConfig: { maxOutputTokens: maxTokens, temperature: 0.5 },
        },
        mensajeError: errorDeGemini,
        esperas,
    });
    if (json?.promptFeedback?.blockReason) throw new ErrorIA('Esa pregunta no se puede responder. Prueba con otra.');
    const candidato = json?.candidates?.[0];
    const texto = (candidato?.content?.parts || []).map((p) => p.text || '').join('').trim();
    if (!texto) throw new ErrorIA('La IA no devolvió respuesta. Intenta de nuevo.');
    return { texto, cortada: candidato?.finishReason === 'MAX_TOKENS' };
}

async function chatConGroq({ sistema, mensajes, maxTokens }, esperas) {
    const modelo = nombreModelo('groq');
    const json = await pedirPorHTTP({
        url: 'https://api.groq.com/openai/v1/chat/completions',
        cabeceras: { Authorization: `Bearer ${env('GROQ_API_KEY')}` },
        cuerpo: {
            model: modelo,
            messages: [{ role: 'system', content: sistema }, ...mensajes.map((m) => ({ role: m.rol === 'tutor' ? 'assistant' : 'user', content: m.texto }))],
            temperature: 0.5,
            max_completion_tokens: Math.min(maxTokens, 8000),
            ...(/gpt-oss/i.test(modelo) ? { reasoning_effort: 'medium' } : {}),
        },
        mensajeError: errorDeGroq,
        esperas,
    });
    const eleccion = json?.choices?.[0];
    const texto = (eleccion?.message?.content || '').trim();
    if (!texto) throw new ErrorIA('La IA no devolvió respuesta. Intenta de nuevo.');
    return { texto, cortada: eleccion?.finish_reason === 'length' };
}

async function chatConClaude({ sistema, mensajes, maxTokens }) {
    const respuesta = await obtenerCliente().messages.create({
        model: nombreModelo('anthropic'),
        max_tokens: maxTokens,
        system: sistema,
        messages: mensajes.map((m) => ({ role: m.rol === 'tutor' ? 'assistant' : 'user', content: m.texto })),
    });
    if (respuesta.stop_reason === 'refusal') throw new ErrorIA('Esa pregunta no se puede responder. Prueba con otra.');
    const texto = (respuesta.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('').trim();
    if (!texto) throw new ErrorIA('La IA no devolvió respuesta. Intenta de nuevo.');
    return { texto, cortada: respuesta.stop_reason === 'max_tokens' };
}

/** Devuelve { texto, cortada, proveedor } o lanza ErrorIA. */
export async function conversar({ sistema, mensajes, maxTokens = 3000 }) {
    const lista = proveedoresDisponibles();
    if (!lista.length) throw new ErrorIA('La IA no está configurada en el servidor.');

    let primerError = null;
    for (const [i, p] of lista.entries()) {
        const hayRespaldo = i < lista.length - 1;
        const esperas = hayRespaldo ? [0, 3] : [0, 6, 15];   // hay un estudiante esperando: poco reintento
        try {
            const args = { sistema, mensajes, maxTokens };
            const r = p === 'anthropic' ? await chatConClaude(args)
                : p === 'groq' ? await chatConGroq(args, esperas)
                    : await chatConGemini(args, esperas);
            return { ...r, proveedor: p };
        } catch (error) {
            // errores propios del SDK de Claude u otros imprevistos: se prueba con el siguiente proveedor
            primerError ||= error instanceof ErrorIA ? error : new ErrorIA('La IA no pudo responder ahora. Intenta de nuevo en un momento.');
            console.warn(`${NOMBRES[p]} no pudo responder el chat: ${error.message}${hayRespaldo ? ' → probando con el siguiente proveedor' : ''}`);
        }
    }
    throw primerError;
}
