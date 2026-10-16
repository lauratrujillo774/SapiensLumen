// Busca videos REALES en YouTube (la IA no puede inventar enlaces: podrían no existir).
// Necesita YOUTUBE_API_KEY (YouTube Data API v3). Cada búsqueda gasta 100 de las 10.000
// unidades diarias gratis, por eso el resultado se guarda junto con la lección.

export const hayYoutube = () => Boolean(process.env.YOUTUBE_API_KEY);

const ENTIDADES = { '&quot;': '"', '&#39;': "'", '&amp;': '&', '&lt;': '<', '&gt;': '>' };
const decodificar = (texto) => String(texto || '').replace(/&(quot|#39|amp|lt|gt);/g, (e) => ENTIDADES[e] || e);

async function buscar(consulta, cantidad) {
    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.search = new URLSearchParams({
        part: 'snippet',
        type: 'video',
        maxResults: String(cantidad),
        videoEmbeddable: 'true',   // que se pueda reproducir dentro de la página
        safeSearch: 'strict',      // contenido apto para estudiantes
        relevanceLanguage: 'es',
        regionCode: 'CO',
        q: consulta,
        key: process.env.YOUTUBE_API_KEY,
    }).toString();

    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        const detalle = await respuesta.text().catch(() => '');
        throw new Error(`YouTube respondió ${respuesta.status}: ${detalle.slice(0, 160)}`);
    }
    const datos = await respuesta.json();
    return (datos.items || [])
        .filter((item) => item.id && item.id.videoId)
        .map((item) => ({
            id: item.id.videoId,
            titulo: decodificar(item.snippet.title),
            canal: decodificar(item.snippet.channelTitle),
        }));
}

// Devuelve hasta 4 videos distintos para las búsquedas dadas. Si falla, devuelve null
// (así se sabe que hay que volver a intentarlo más tarde) y no rompe la lección.
export async function buscarVideos(consultas, maximo = 4) {
    if (!hayYoutube()) return null;
    try {
        const vistos = new Set();
        const videos = [];
        for (const consulta of consultas.slice(0, 3)) {
            for (const video of await buscar(consulta, 2)) {
                if (!vistos.has(video.id) && videos.length < maximo) {
                    vistos.add(video.id);
                    videos.push(video);
                }
            }
        }
        return videos;
    } catch (error) {
        console.error('No se pudieron buscar videos:', error.message);
        return null;
    }
}
