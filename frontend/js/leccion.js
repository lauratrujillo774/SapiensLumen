/* ============================================================
   Sapiens Lumen – Lección de un tema
   Muestra la teoría por partes (nunca todo de corrido) de tres formas:
   paso a paso, mapa mental y tarjetas, más videos de YouTube.
   Incluye ayudas de lectura: tamaño, espaciado, modo calma y lectura en voz alta.
   ============================================================ */
(function () {
  const C = SapiensCurriculo;
  const esc = C.esc;
  const panel = document.getElementById('temaPanel');
  const idTema = parseInt(new URLSearchParams(window.location.search).get('tema'), 10);

  const PREFS_KEY = 'sapiens_lectura';
  const prefs = (() => {
    try { return Object.assign({ tamano: 0, espaciado: false, calma: false }, JSON.parse(localStorage.getItem(PREFS_KEY) || '{}')); }
    catch { return { tamano: 0, espaciado: false, calma: false }; }
  })();
  const guardarPrefs = () => { try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch (_) {} };

  const e = {            // estado de la pantalla
    vista: 'cargando',   // inicio | cargando | aviso | teoria
    modo: 'pasos',       // pasos | mapa | tarjetas | videos
    paso: 0,
    ejemplo: false,
    terminado: false,
    tarjeta: 0,
    volteada: false,
    orden: [],
    ramas: new Set(),
    video: null,
    aviso: null,
    leyendo: false
  };
  let tema = null, area = null, ui = null, lec = null, volver = '../cursos/cursos.html';

  /* ---------- utilidades ---------- */
  function formatear(textoPlano) {
    const lineas = String(textoPlano || '').split('\n').map(l => l.trim()).filter(Boolean);
    let html = '', lista = [];
    const cerrar = () => { if (lista.length) { html += '<ul>' + lista.map(i => '<li>' + esc(i) + '</li>').join('') + '</ul>'; lista = []; } };
    lineas.forEach(l => {
      if (/^[-•*]\s+/.test(l)) lista.push(l.replace(/^[-•*]\s+/, ''));
      else { cerrar(); html += '<p>' + esc(l) + '</p>'; }
    });
    cerrar();
    return html;
  }
  const pasos = () => [{ intro: true }].concat(lec ? lec.partes : []);
  const buscarYoutube = (q) => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);

  /* ---------- vistas ---------- */
  function vistaInicio() {
    return '<h2>¿Qué quieres hacer?</h2>' +
      '<p class="ln-muted">Puedes empezar por la teoría y después jugar, o al revés. Tú decides.</p>' +
      '<div class="ln-opciones">' +
        '<button class="ln-opcion" data-acc="aprender"><span class="ico">📖</span><h3>Aprender</h3>' +
          '<p class="ln-muted">Explicación por partes, con ejemplos, mapa mental, tarjetas y videos.</p></button>' +
        '<a class="ln-opcion" href="../cursos/juego.html?tema=' + idTema + '" style="text-decoration:none;display:block;"><span class="ico">🎮</span><h3>Jugar</h3>' +
          '<p class="ln-muted">Preguntas y retos para practicar, como en un juego.</p></a>' +
      '</div>';
  }

  function vistaCargando() {
    return '<div class="ln-estado" role="status" aria-live="polite"><div class="ln-spinner"></div>' +
      '<h2>Preparando tu lección…</h2>' +
      '<p class="ln-muted">La primera vez puede tardar un minuto. Después queda guardada y abre al instante.</p></div>';
  }

  function vistaAviso() {
    const a = e.aviso || {};
    return '<div class="ln-estado" role="alert"><span class="ico">' + esc(a.icono || '⚠️') + '</span>' +
      '<h2>' + esc(a.titulo || 'No se pudo abrir la lección') + '</h2>' +
      '<p class="ln-muted">' + esc(a.mensaje || '') + '</p>' +
      '<div class="ln-nav" style="justify-content:center;"><button class="ln-btn sec" data-acc="inicio">Volver</button>' +
      (a.reintentar ? '<button class="ln-btn" data-acc="aprender">Intentar de nuevo</button>' : '') + '</div></div>';
  }

  function barraAyudas() {
    const voz = 'speechSynthesis' in window;
    return '<div class="ln-barra">' +
      '<a class="ln-back" href="' + esc(volver) + '"><i class="fa-solid fa-arrow-left"></i> Volver a ' + esc(ui.nombre) + '</a>' +
      '<div class="ln-acc" role="group" aria-label="Ayudas de lectura">' +
        '<button class="ln-mini" data-acc="menos" aria-label="Letra más pequeña">A−</button>' +
        '<button class="ln-mini" data-acc="mas" aria-label="Letra más grande">A+</button>' +
        '<button class="ln-mini" data-acc="espaciado" aria-pressed="' + prefs.espaciado + '">Más espacio</button>' +
        '<button class="ln-mini" data-acc="calma" aria-pressed="' + prefs.calma + '">Modo calma</button>' +
        (voz ? '<button class="ln-mini" data-acc="voz" aria-pressed="' + e.leyendo + '">🔊 ' + (e.leyendo ? 'Parar' : 'Escuchar') + '</button>' : '') +
      '</div></div>';
  }

  function pestanas() {
    const t = [['pasos', '🪜 Paso a paso'], ['mapa', '🧠 Mapa mental'], ['tarjetas', '🃏 Tarjetas'], ['videos', '▶️ Videos']];
    return '<div class="ln-tabs" role="tablist" aria-label="Forma de aprender">' +
      t.map(x => '<button class="ln-tab" role="tab" data-acc="modo" data-modo="' + x[0] + '" aria-selected="' + (e.modo === x[0]) + '">' + x[1] + '</button>').join('') + '</div>';
  }

  function contenidoPasos() {
    const lista = pasos();
    const total = lista.length;
    if (e.terminado) {
      return '<div class="ln-paso ln-fin"><h2 tabindex="-1" data-foco>🎉 ¡Terminaste la teoría!</h2>' +
        '<p>Ya viste todas las partes de <strong>' + esc(tema.nombre) + '</strong>. Para recordar mejor, repásalo de otra forma:</p>' +
        '<div class="acciones">' +
          '<button class="ln-btn sec" data-acc="modo" data-modo="tarjetas">🃏 Repasar con tarjetas</button>' +
          '<button class="ln-btn sec" data-acc="modo" data-modo="mapa">🧠 Ver el mapa mental</button>' +
          '<button class="ln-btn sec" data-acc="reiniciar">↺ Leer otra vez</button>' +
          '<a class="ln-btn" href="../cursos/juego.html?tema=' + idTema + '" style="text-decoration:none;">🎮 ¡A jugar!</a>' +
        '</div></div>';
    }
    const p = lista[e.paso];
    const pct = Math.round((e.paso + 1) / total * 100);
    let cuerpo;
    if (p.intro) {
      cuerpo = '<h2 tabindex="-1" data-foco>🎯 Lo que vas a aprender</h2>' + (lec.resumen ? '<p>' + esc(lec.resumen) + '</p>' : '') +
        (lec.objetivos.length ? '<p><strong>Al terminar podrás:</strong></p><ul class="ln-objetivos">' + lec.objetivos.map(o => '<li>' + esc(o) + '</li>').join('') + '</ul>' : '') +
        '<p class="ln-muted">La lección tiene ' + (total - 1) + ' partes cortas. Avanza a tu ritmo.</p>';
    } else {
      cuerpo = '<h2 tabindex="-1" data-foco><span class="emoji">' + esc(p.emoji) + '</span>' + esc(p.titulo) + '</h2>' + formatear(p.explicacion) +
        (p.ejemplo ? (e.ejemplo
          ? '<div class="ln-ejemplo"><h3>📝 Ejemplo</h3>' + formatear(p.ejemplo) + '</div>'
          : '<button class="ln-btn sec" data-acc="ejemplo">👀 Ver un ejemplo</button>') : '') +
        (p.idea_clave && (e.ejemplo || !p.ejemplo) ? '<div class="ln-clave">💡 Para recordar: ' + esc(p.idea_clave) + '</div>' : '');
    }
    const ultimo = e.paso === total - 1;
    return '<div class="ln-progreso"><span>Paso ' + (e.paso + 1) + ' de ' + total + '</span><div class="ln-barra-prog" aria-hidden="true"><div style="width:' + pct + '%"></div></div></div>' +
      '<div class="ln-paso">' + cuerpo + '</div>' +
      '<div class="ln-nav"><button class="ln-btn sec" data-acc="anterior"' + (e.paso === 0 ? ' disabled' : '') + '>← Anterior</button>' +
      '<button class="ln-btn" data-acc="siguiente">' + (ultimo ? '¡Terminé! ✔' : 'Siguiente →') + '</button></div>';
  }

  function contenidoMapa() {
    const m = lec.mapa_mental;
    if (!m.ramas.length) return '<p class="ln-muted">Este tema todavía no tiene mapa mental.</p>';
    const todas = e.ramas.size === m.ramas.length;
    return '<span class="ln-centro">' + esc(m.centro || tema.nombre) + '</span><div class="ln-conector"></div>' +
      '<p class="ln-muted" style="text-align:center;">Toca cada rama para ver sus ideas.</p>' +
      '<div class="ln-ramas">' + m.ramas.map((r, i) => {
        const abierta = e.ramas.has(i);
        return '<div class="ln-rama"><button class="ln-rama-btn" data-acc="rama" data-i="' + i + '" aria-expanded="' + abierta + '">' +
          '<span>' + esc(r.titulo) + '</span><span aria-hidden="true">' + (abierta ? '−' : '+') + '</span></button>' +
          (abierta ? '<ul class="ln-hijos">' + r.hijos.map(h => '<li>' + esc(h) + '</li>').join('') + '</ul>' : '') + '</div>';
      }).join('') + '</div>' +
      '<div class="ln-nav" style="justify-content:center;"><button class="ln-btn sec" data-acc="todas">' + (todas ? 'Ocultar todas' : 'Mostrar todas') + '</button></div>';
  }

  function contenidoTarjetas() {
    const t = lec.tarjetas;
    if (!t.length) return '<p class="ln-muted">Este tema todavía no tiene tarjetas.</p>';
    if (e.orden.length !== t.length) e.orden = t.map((_, i) => i);
    const c = t[e.orden[e.tarjeta]];
    return '<div class="ln-progreso"><span>Tarjeta ' + (e.tarjeta + 1) + ' de ' + t.length + '</span><div class="ln-barra-prog" aria-hidden="true"><div style="width:' + Math.round((e.tarjeta + 1) / t.length * 100) + '%"></div></div></div>' +
      '<button class="ln-flip' + (e.volteada ? ' reverso' : '') + '" data-acc="voltear" aria-label="Voltear la tarjeta"><span><small>' + (e.volteada ? 'Respuesta' : 'Pregunta') + '</small>' + esc(e.volteada ? c.reverso : c.frente) + '</span></button>' +
      '<p class="ln-muted" style="text-align:center;margin-top:8px;">Piensa tu respuesta y luego voltea la tarjeta.</p>' +
      '<div class="ln-nav"><button class="ln-btn sec" data-acc="tanterior"' + (e.tarjeta === 0 ? ' disabled' : '') + '>← Anterior</button>' +
      '<button class="ln-btn sec" data-acc="mezclar">🔀 Mezclar</button>' +
      '<button class="ln-btn" data-acc="tsiguiente"' + (e.tarjeta === t.length - 1 ? ' disabled' : '') + '>Siguiente →</button></div>';
  }

  function contenidoVideos() {
    const videos = lec.videos || [];
    const busquedas = lec.busquedas_video || [];
    let html = '';
    if (videos.length) {
      html += '<div class="ln-videos">' + videos.map(v => {
        const activo = e.video === v.id;
        return '<div class="ln-video"><div class="marco">' + (activo
          ? '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.id) + '?rel=0&autoplay=1" title="' + esc(v.titulo) + '" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>'
          : '<button class="miniatura" data-acc="video" data-id="' + esc(v.id) + '" style="background-image:url(https://i.ytimg.com/vi/' + encodeURIComponent(v.id) + '/hqdefault.jpg)" aria-label="Reproducir: ' + esc(v.titulo) + '"><span class="play"><i class="fa-solid fa-circle-play"></i></span></button>') +
          '</div><div class="info"><strong>' + esc(v.titulo) + '</strong><span>' + esc(v.canal) + '</span></div></div>';
      }).join('') + '</div>';
    } else {
      html += '<p class="ln-muted">Estos son buscadores de YouTube ya preparados para este tema:</p>';
    }
    if (busquedas.length) {
      html += '<div class="ln-enlaces"><strong>' + (videos.length ? 'Buscar más videos:' : 'Videos sobre este tema:') + '</strong>' +
        busquedas.map(q => '<a href="' + buscarYoutube(q) + '" target="_blank" rel="noopener noreferrer">🔎 ' + esc(q) + '</a>').join('') + '</div>';
    }
    return html || '<p class="ln-muted">Todavía no hay videos para este tema.</p>';
  }

  function vistaTeoria() {
    const cuerpo = { pasos: contenidoPasos, mapa: contenidoMapa, tarjetas: contenidoTarjetas, videos: contenidoVideos }[e.modo]();
    return barraAyudas() + '<h2 style="margin-bottom:12px;">' + esc(tema.nombre) + '</h2>' + pestanas() +
      '<div id="lnCuerpo" aria-live="polite">' + cuerpo + '</div>';
  }

  /* ---------- pintar ---------- */
  function render(enfocar) {
    panel.className = 'ln-root' + (prefs.tamano ? ' t' + prefs.tamano : '') + (prefs.espaciado ? ' espaciado' : '') + (prefs.calma ? ' calma' : '');
    panel.innerHTML = e.vista === 'inicio' ? vistaInicio()
      : e.vista === 'cargando' ? vistaCargando()
      : e.vista === 'aviso' ? vistaAviso()
      : vistaTeoria();
    if (enfocar) { const h = panel.querySelector('[data-foco]'); if (h) h.focus({ preventScroll: false }); }
  }

  /* ---------- carga de la lección (con espera si la IA la está preparando) ---------- */
  let cargando = false;
  async function cargarLeccion() {
    if (cargando) return;
    cargando = true;
    e.vista = 'cargando'; render();
    const limite = Date.now() + 5 * 60 * 1000;
    try {
      while (Date.now() < limite) {
        const token = localStorage.getItem('sapiens_token');
        const r = await SapiensAuth._api('/contenido/tema/' + idTema, { headers: { Authorization: 'Bearer ' + token } });
        if (!r.ok && r.data && r.data.estado === 'sin_ia') { e.aviso = { icono: '🛠️', titulo: 'La lección aún no está disponible', mensaje: 'Estamos activando la inteligencia artificial que prepara las lecciones. Vuelve a intentarlo pronto.', reintentar: false }; break; }
        if (!r.ok) { e.aviso = { icono: '⚠️', titulo: 'No se pudo abrir la lección', mensaje: r.error, reintentar: true }; break; }
        const d = r.data;
        if (d.estado === 'listo') {
          lec = d.contenido; e.vista = 'teoria'; e.modo = 'pasos'; e.paso = 0; e.ejemplo = false; e.terminado = false;
          e.tarjeta = 0; e.volteada = false; e.orden = []; e.ramas = new Set(); e.video = null;
          render(); return;
        }
        if (d.estado === 'sin_ia') { e.aviso = { icono: '🛠️', titulo: 'La lección aún no está disponible', mensaje: d.message, reintentar: false }; break; }
        if (d.estado === 'error') { e.aviso = { icono: '⚠️', titulo: 'No se pudo preparar la lección', mensaje: d.message, reintentar: true }; break; }
        await new Promise(ok => setTimeout(ok, 3000));   // 'generando': volver a preguntar
      }
      if (!e.aviso) e.aviso = { icono: '⏳', titulo: 'Está tardando más de lo normal', mensaje: 'Intenta de nuevo en un momento.', reintentar: true };
      e.vista = 'aviso'; render();
    } finally { cargando = false; }
  }

  /* ---------- lectura en voz alta ---------- */
  function textoParaLeer() {
    if (e.modo === 'pasos') {
      if (e.terminado) return '¡Terminaste la teoría!';
      const p = pasos()[e.paso];
      if (p.intro) return 'Lo que vas a aprender. ' + lec.resumen + ' ' + lec.objetivos.join('. ');
      return p.titulo + '. ' + p.explicacion + (e.ejemplo ? ' Ejemplo. ' + p.ejemplo : '') + (e.ejemplo && p.idea_clave ? ' Para recordar: ' + p.idea_clave : '');
    }
    if (e.modo === 'mapa') return lec.mapa_mental.centro + '. ' + lec.mapa_mental.ramas.map(r => r.titulo + ': ' + r.hijos.join(', ')).join('. ');
    if (e.modo === 'tarjetas') { const c = lec.tarjetas[e.orden[e.tarjeta]]; return e.volteada ? c.reverso : c.frente; }
    return '';
  }
  function parar() { if ('speechSynthesis' in window) speechSynthesis.cancel(); e.leyendo = false; }
  function leer() {
    if (!('speechSynthesis' in window)) return;
    parar();
    const texto = textoParaLeer().replace(/\s*\n\s*/g, '. ').replace(/^[-•*]\s*/gm, '');
    if (!texto.trim()) return;
    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = 'es-CO';
    const voces = speechSynthesis.getVoices();
    const elegida = voces.find(v => v.lang === 'es-CO') || voces.find(v => /^es[-_](419|MX|US)/.test(v.lang)) || voces.find(v => v.lang.startsWith('es'));
    if (elegida) voz.voice = elegida;
    voz.rate = 0.95;
    voz.onend = voz.onerror = () => { e.leyendo = false; if (e.vista === 'teoria') render(); };
    e.leyendo = true;
    speechSynthesis.speak(voz);
  }

  /* ---------- acciones ---------- */
  function terminarTeoria() {
    e.terminado = true;
    C.marcarTemaHecho(idTema, area.id);
  }

  panel.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-acc]');
    if (!b || b.disabled) return;
    const acc = b.dataset.acc;
    let enfocar = false;
    const t = lec ? lec.tarjetas : [];

    switch (acc) {
      case 'aprender': if (lec) { e.vista = 'teoria'; render(); } else cargarLeccion(); return;
      case 'inicio': e.vista = 'inicio'; e.aviso = null; render(); return;
      case 'modo': parar(); e.modo = b.dataset.modo; break;
      case 'ejemplo': e.ejemplo = true; break;
      case 'siguiente': parar(); if (e.paso === pasos().length - 1) terminarTeoria(); else { e.paso++; e.ejemplo = false; } enfocar = true; break;
      case 'anterior': parar(); if (e.paso > 0) { e.paso--; e.ejemplo = false; } enfocar = true; break;
      case 'reiniciar': parar(); e.terminado = false; e.paso = 0; e.ejemplo = false; e.modo = 'pasos'; enfocar = true; break;
      case 'rama': { const i = Number(b.dataset.i); e.ramas.has(i) ? e.ramas.delete(i) : e.ramas.add(i); break; }
      case 'todas': e.ramas = e.ramas.size === lec.mapa_mental.ramas.length ? new Set() : new Set(lec.mapa_mental.ramas.map((_, i) => i)); break;
      case 'voltear': parar(); e.volteada = !e.volteada; break;
      case 'tsiguiente': parar(); if (e.tarjeta < t.length - 1) { e.tarjeta++; e.volteada = false; } break;
      case 'tanterior': parar(); if (e.tarjeta > 0) { e.tarjeta--; e.volteada = false; } break;
      case 'mezclar': parar(); e.orden = t.map((_, i) => i).sort(() => Math.random() - 0.5); e.tarjeta = 0; e.volteada = false; break;
      case 'video': e.video = b.dataset.id; break;
      case 'mas': prefs.tamano = Math.min(3, prefs.tamano + 1); guardarPrefs(); break;
      case 'menos': prefs.tamano = Math.max(0, prefs.tamano - 1); guardarPrefs(); break;
      case 'espaciado': prefs.espaciado = !prefs.espaciado; guardarPrefs(); break;
      case 'calma': prefs.calma = !prefs.calma; guardarPrefs(); break;
      case 'voz': if (e.leyendo) parar(); else { leer(); } break;
      default: return;
    }
    render(enfocar);
  });

  // Flechas del teclado para avanzar en el paso a paso y en las tarjetas
  document.addEventListener('keydown', (ev) => {
    if (e.vista !== 'teoria' || ev.target.closest('input, textarea, select')) return;
    if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return;
    const sig = ev.key === 'ArrowRight';
    const clic = (acc) => { const b = panel.querySelector('[data-acc="' + acc + '"]'); if (b && !b.disabled) b.click(); };
    if (e.modo === 'pasos' && !e.terminado) clic(sig ? 'siguiente' : 'anterior');
    else if (e.modo === 'tarjetas') clic(sig ? 'tsiguiente' : 'tanterior');
  });
  window.addEventListener('beforeunload', parar);

  /* ---------- arranque ---------- */
  (async function iniciar() {
    if (!idTema) { panel.innerHTML = '<p class="path-msg">No encontramos ese tema. <a href="../cursos/cursos.html">Volver a mis cursos</a></p>'; return; }
    const r = await C.tema(idTema);
    if (!r.ok) { panel.innerHTML = '<p class="path-msg">' + esc(r.error) + ' <a href="../cursos/cursos.html">Volver a mis cursos</a></p>'; return; }
    tema = r.data.tema; area = r.data.area; ui = C.visual(area.clave, area.nombre);
    volver = '../cursos/curso.html?area=' + area.id + '&grado=' + tema.grado;
    C.guardarUltimo({ areaId: area.id, grado: tema.grado, clave: area.clave });

    document.title = 'Sapiens Lumen | ' + tema.nombre;
    document.getElementById('temaTitulo').textContent = tema.nombre;
    document.getElementById('temaSubtitulo').textContent = ui.nombre + ' · ' + tema.grado + '° grado';
    document.getElementById('temaIcono').style.background = ui.color;
    document.getElementById('temaIcono').innerHTML = '<i class="fa-solid ' + ui.icon + '"></i>';

    e.vista = 'inicio'; render();
  })();
})();
