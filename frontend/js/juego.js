/* ============================================================
   Sapiens Lumen – Juego de práctica de un tema
   Las preguntas las prepara la IA y el SERVIDOR califica: aquí solo se muestran.
   Sin tiempo límite, con pistas y un segundo intento.
   ============================================================ */
(function () {
  const C = SapiensCurriculo;
  const esc = C.esc;
  const panel = document.getElementById('juegoPanel');
  const idTema = parseInt(new URLSearchParams(window.location.search).get('tema'), 10);

  // Mismas ayudas de lectura que la lección (se comparten)
  const PREFS_KEY = 'sapiens_lectura';
  const prefs = (() => {
    try { return Object.assign({ tamano: 0, espaciado: false, calma: false }, JSON.parse(localStorage.getItem(PREFS_KEY) || '{}')); }
    catch { return { tamano: 0, espaciado: false, calma: false }; }
  })();
  const guardarPrefs = () => { try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch (_) {} };

  const LEGACY = {   // para que Logros y Perfil (que usan las claves antiguas) también cuenten este progreso
    matematicas: 'math', ciencias_naturales: 'science', fisica: 'science', quimica: 'science',
    lenguaje: 'reading', ciencias_sociales: 'social', economia_politica: 'social', filosofia: 'social',
    tecnologia: 'tech', ingles: 'english'
  };
  const FORMAS = ['▲', '◆', '●', '■'];
  const COLORES = ['a', 'b', 'c', 'd'];
  const TIPOS = { opcion_multiple: 'Elige una opción', verdadero_falso: 'Verdadero o falso', respuesta_corta: 'Escribe la respuesta' };

  const e = {
    vista: 'cargando', aviso: null, total: 0,
    intento: null, preguntas: [], i: 0,
    sel: null, texto: '', fb: null, pistas: [], malas: new Set(),
    puntos: 0, racha: 0, resultado: null, leyendo: false, ocupado: false
  };
  let tema = null, area = null, ui = null, volver = '../cursos/cursos.html';
  const token = () => localStorage.getItem('sapiens_token');
  const api = (ruta, cuerpo) => SapiensAuth._api(ruta, {
    method: cuerpo === undefined ? 'GET' : 'POST', body: cuerpo, headers: { Authorization: 'Bearer ' + token() }
  });
  const actual = () => e.preguntas[e.i];
  const terminada = () => e.fb && (e.fb.correcta || !e.fb.puedeReintentar);

  /* ---------- vistas ---------- */
  function herramientas() {
    const voz = 'speechSynthesis' in window;
    return '<div class="jg-herr" role="group" aria-label="Ayudas de lectura">' +
      '<button class="jg-mini" data-acc="menos" aria-label="Letra más pequeña">A−</button>' +
      '<button class="jg-mini" data-acc="mas" aria-label="Letra más grande">A+</button>' +
      '<button class="jg-mini" data-acc="espaciado" aria-pressed="' + prefs.espaciado + '">Más espacio</button>' +
      '<button class="jg-mini" data-acc="calma" aria-pressed="' + prefs.calma + '">Modo calma</button>' +
      (voz ? '<button class="jg-mini" data-acc="voz" aria-pressed="' + e.leyendo + '">🔊 ' + (e.leyendo ? 'Parar' : 'Escuchar') + '</button>' : '') + '</div>';
  }

  function vistaCargando() {
    return '<div class="jg-estado" role="status" aria-live="polite"><div class="jg-spinner"></div><h2>Preparando tus preguntas…</h2>' +
      '<p class="jg-muted">La primera vez puede tardar un minuto. Después quedan guardadas.</p></div>';
  }

  function vistaAviso() {
    const a = e.aviso || {};
    return '<div class="jg-estado" role="alert"><span class="ico">' + esc(a.icono || '⚠️') + '</span><h2>' + esc(a.titulo || 'No se pudo abrir el juego') + '</h2>' +
      '<p class="jg-muted">' + esc(a.mensaje || '') + '</p><div class="jg-acciones">' +
      '<a class="jg-btn sec" href="' + esc(volver) + '" style="text-decoration:none;">Volver</a>' +
      (a.reintentar ? '<button class="jg-btn" data-acc="reintentar">Intentar de nuevo</button>' : '') + '</div></div>';
  }

  function vistaPortada() {
    return '<div class="jg-portada"><span class="gran">🎮</span><h2>' + esc(tema.nombre) + '</h2>' +
      '<p class="jg-muted">' + e.total + ' preguntas · empiezan fáciles y van subiendo</p>' +
      '<ul class="jg-reglas"><li>⏱️ <strong>Sin tiempo.</strong> Piensa con calma.</li>' +
      '<li>🔁 Tienes <strong>2 intentos</strong> en cada pregunta (en verdadero o falso, 1).</li>' +
      '<li>💡 Puedes pedir <strong>pistas</strong>; cada una resta 2 puntos.</li>' +
      '<li>🔥 Si aciertas varias seguidas a la primera, ganas <strong>puntos extra</strong>.</li></ul>' +
      '<div class="jg-acciones"><a class="jg-btn sec" href="' + esc(volver) + '" style="text-decoration:none;">Volver</a>' +
      '<button class="jg-btn" data-acc="comenzar">¡Empezar a jugar!</button></div></div>';
  }

  function vistaPregunta() {
    const p = actual();
    const n = e.preguntas.length;
    const fin = terminada();
    const fb = e.fb;
    let cuerpo = '';

    if (p.tipo === 'respuesta_corta') {
      cuerpo = '<input class="jg-input" id="jgTexto" type="text" inputmode="text" autocomplete="off" maxlength="120" placeholder="Escribe aquí tu respuesta" ' +
        'value="' + esc(e.texto) + '"' + (fin ? ' disabled' : '') + ' aria-label="Tu respuesta">';
    } else {
      const vf = p.tipo === 'verdadero_falso';
      cuerpo = '<div class="jg-resps' + (vf ? ' vf' : '') + '" role="group" aria-label="Opciones">' + p.opciones.map((o, k) => {
        const esBien = fin && fb.respuestaCorrecta && o.texto === fb.respuestaCorrecta;
        const esMal = e.malas.has(o.id) || (fin && !esBien && e.sel === o.id && !fb.correcta);
        const clase = vf ? (o.texto === 'Verdadero' ? 'verd' : 'fals') : COLORES[k % 4];
        const forma = vf ? (o.texto === 'Verdadero' ? '✔' : '✖') : FORMAS[k % 4];
        return '<button class="jg-resp ' + clase + (esBien ? ' bien' : '') + (esMal ? ' mal' : '') + '" data-acc="opcion" data-id="' + o.id + '" aria-pressed="' + (e.sel === o.id) + '"' +
          ((fin || e.malas.has(o.id)) ? ' disabled' : '') + '><span class="forma" aria-hidden="true">' + forma + '</span><span>' + esc(o.texto) + '</span>' +
          (esBien ? '<span class="marca" aria-hidden="true">✔</span>' : '') + '</button>';
      }).join('') + '</div>';
    }

    const pistasHtml = e.pistas.length ? '<div class="jg-pistas" aria-live="polite">' + e.pistas.map((t, k) => '<div class="jg-pista">💡 <strong>Pista ' + (k + 1) + ':</strong> ' + esc(t) + '</div>').join('') + '</div>' : '';

    let comentario = '';
    if (fb) {
      if (fb.correcta) {
        comentario = '<div class="jg-fb ok" role="status"><strong>🎉 ¡Correcto! +' + (fb.puntos + fb.bono) + ' puntos</strong>' +
          (fb.bono ? '<span>🔥 Racha de ' + fb.racha + ': +' + fb.bono + ' extra</span>' : '') + '</div>';
      } else if (fb.puedeReintentar) {
        comentario = '<div class="jg-fb casi" role="status"><strong>🤔 Casi. Todavía puedes intentarlo otra vez.</strong><p>Esa no era. Piénsalo con calma o pide una pista.</p></div>';
      } else {
        comentario = '<div class="jg-fb no" role="status"><strong>No esta vez, ¡sigue adelante!</strong>' +
          '<p>La respuesta correcta es: <strong>' + esc(fb.respuestaCorrecta) + '</strong></p></div>';
      }
      if (fin && fb.explicacion) {
        comentario += '<div class="jg-fb ' + (fb.correcta ? 'ok' : 'no') + '" style="background:transparent;"><details' + (fb.correcta ? '' : ' open') + '><summary>📖 Explicación paso a paso</summary><div class="exp">' + esc(fb.explicacion) + '</div></details></div>';
      }
    }

    let acciones;
    if (fin) {
      acciones = '<div class="jg-fila"><span></span><button class="jg-btn" data-acc="siguiente">' + (e.i === n - 1 ? 'Ver resultados 🏁' : 'Siguiente →') + '</button></div>';
    } else if (fb && fb.puedeReintentar) {
      acciones = '<div class="jg-fila"><button class="jg-btn sec" data-acc="pista"' + (e.pistas.length >= p.numPistas ? ' disabled' : '') + '>💡 Pista (−2)</button>' +
        '<button class="jg-btn" data-acc="reintentar-pregunta">Intentar otra vez</button></div>';
    } else {
      const listo = p.tipo === 'respuesta_corta' ? e.texto.trim().length > 0 : e.sel !== null;
      acciones = '<div class="jg-fila"><button class="jg-btn sec" data-acc="pista"' + (e.pistas.length >= p.numPistas || e.ocupado ? ' disabled' : '') + '>💡 Pista (−2)' + (p.numPistas ? '' : ' · no hay') + '</button>' +
        '<button class="jg-btn" data-acc="comprobar"' + (!listo || e.ocupado ? ' disabled' : '') + '>Comprobar ✔</button></div>';
    }

    return herramientas() +
      '<div class="jg-top"><button class="jg-back" data-acc="salir">✕ Salir</button>' +
      '<div class="jg-barra" aria-hidden="true"><div style="width:' + Math.round((e.i + (fin ? 1 : 0)) / n * 100) + '%"></div></div>' +
      '<span class="jg-chip"><span class="jg-pc">Pregunta </span>' + (e.i + 1) + '<span class="jg-pc"> de </span><span class="jg-mv">/</span>' + n + '</span><span class="jg-chip" aria-label="Puntos: ' + e.puntos + '">⭐ ' + e.puntos + ' pts</span>' +
      (e.racha >= 2 ? '<span class="jg-chip">🔥 x' + e.racha + '</span>' : '') + '</div>' +
      '<div class="jg-pregunta"><span class="tipo">' + TIPOS[p.tipo] + ' · ' + p.puntos + ' pts</span><h2 tabindex="-1" data-foco>' + esc(p.enunciado) + '</h2></div>' +
      cuerpo + pistasHtml + comentario + acciones;
  }

  function vistaFinal() {
    const r = e.resultado;
    const estrellas = [1, 2, 3].map(k => '<span class="' + (k <= r.estrellas ? 'on' : 'off') + '" style="animation-delay:' + (k * 0.25) + 's">★</span>').join('');
    const mensaje = r.estrellas === 3 ? '¡Excelente! Dominas este tema.' : r.estrellas === 2 ? '¡Muy bien! Ya casi lo dominas.' : r.estrellas === 1 ? 'Buen intento. Repasa y vuelve a jugar.' : 'Está bien, así se aprende. Repasa la teoría e inténtalo de nuevo.';
    const nivel = r.nivel;
    const tope = nivel.siguiente ? nivel.siguiente.puntos : null;
    const pct = tope ? Math.min(100, Math.round((r.puntosTotales - nivel.desde) / (tope - nivel.desde) * 100)) : 100;
    const repaso = r.repaso.length
      ? '<div class="jg-repaso"><h3>🔎 Para repasar (' + r.repaso.length + ')</h3>' + r.repaso.map(x =>
        '<details><summary>' + (x.acerto ? '✔ ' : '✖ ') + esc(x.pregunta) + '</summary><div class="r"><p><strong>Respuesta:</strong> ' + esc(x.respuestaCorrecta) + '</p>' +
        '<div class="exp" style="white-space:pre-line;">' + esc(x.explicacion) + '</div></div></details>').join('') + '</div>' : '';
    const nuevas = r.insigniasNuevas || [];
    const insignias = nuevas.length
      ? '<div class="jg-nivel" role="status" style="border:2px solid var(--green-soft,#66BB6A);margin-bottom:14px;"><strong>🏆 ' + (nuevas.length === 1 ? '¡Ganaste una insignia nueva!' : '¡Ganaste ' + nuevas.length + ' insignias nuevas!') + '</strong>' +
        nuevas.map(i => '<p style="margin:6px 0 0;"><span aria-hidden="true">' + esc(i.icono) + '</span> <b>' + esc(i.nombre) + '</b> <span class="jg-muted">· ' + esc(i.descripcion) + '</span></p>').join('') +
        '<p class="jg-muted" style="margin-top:8px;"><a href="../logros/logros.html">Ver todos mis logros</a></p></div>'
      : '';
    return '<div class="jg-final"><h2>' + esc(tema.nombre) + '</h2><div class="jg-estrellas" aria-label="' + r.estrellas + ' de 3 estrellas">' + estrellas + '</div>' +
      '<p><strong>' + mensaje + '</strong></p>' + insignias +
      '<div class="jg-datos"><div class="jg-dato"><b>' + r.aciertos + '/' + r.total + '</b><span>Aciertos (' + r.porcentaje + '%)</span></div>' +
      '<div class="jg-dato"><b>+' + r.xp + '</b><span>Puntos ganados' + (r.bono ? ' (incl. +' + r.bono + ' por terminar)' : '') + '</span></div>' +
      '<div class="jg-dato"><b>🔥 ' + r.racha + '</b><span>Días seguidos</span></div></div>' +
      '<div class="jg-nivel"><div class="jg-fila"><strong>' + esc(nivel.nombre) + '</strong><span class="jg-muted">' + r.puntosTotales + (tope ? ' / ' + tope : '') + ' pts</span></div>' +
      '<div class="jg-barra" style="margin-top:6px;"><div style="width:' + pct + '%"></div></div>' +
      (nivel.siguiente ? '<p class="jg-muted" style="margin-top:6px;">Te faltan ' + (tope - r.puntosTotales) + ' puntos para «' + esc(nivel.siguiente.nombre) + '».</p>' : '<p class="jg-muted">¡Llegaste al nivel más alto!</p>') + '</div>' +
      '<div class="jg-acciones"><button class="jg-btn" data-acc="otra-vez">🔁 Jugar otra vez</button>' +
      '<a class="jg-btn sec" href="../cursos/tema.html?tema=' + idTema + '" style="text-decoration:none;">📖 Repasar la teoría</a>' +
      '<a class="jg-btn sec" href="' + esc(volver) + '" style="text-decoration:none;">Más temas</a></div>' + repaso + '</div>';
  }

  function render(enfocar) {
    panel.className = 'jg-root' + (prefs.tamano ? ' t' + prefs.tamano : '') + (prefs.espaciado ? ' espaciado' : '') + (prefs.calma ? ' calma' : '');
    panel.innerHTML = { cargando: vistaCargando, aviso: vistaAviso, portada: vistaPortada, pregunta: vistaPregunta, final: vistaFinal }[e.vista]();
    if (enfocar) { const h = panel.querySelector('[data-foco]'); if (h) h.focus(); }
    if (e.vista === 'pregunta' && actual().tipo === 'respuesta_corta' && !terminada()) {
      const campo = document.getElementById('jgTexto');
      if (campo && !e.ocupado) { campo.focus(); campo.setSelectionRange(campo.value.length, campo.value.length); }
    }
  }

  /* ---------- carga: espera a que la IA prepare las preguntas ---------- */
  let cargando = false;
  async function cargarJuego() {
    if (cargando) return;
    cargando = true;
    e.vista = 'cargando'; e.aviso = null; render();
    const limite = Date.now() + 5 * 60 * 1000;
    try {
      while (Date.now() < limite) {
        const r = await api('/juego/tema/' + idTema);
        if (!r.ok && r.data && r.data.estado === 'sin_ia') {
          e.aviso = { icono: '🛠️', titulo: 'El juego aún no está disponible', mensaje: 'Estamos activando la inteligencia artificial que prepara las preguntas. Vuelve a intentarlo pronto.', reintentar: false }; break;
        }
        if (!r.ok) { e.aviso = { icono: '⚠️', titulo: 'No se pudo abrir el juego', mensaje: r.error, reintentar: true }; break; }
        if (r.data.estado === 'listo') { e.total = r.data.reto.total; e.vista = 'portada'; render(); return; }
        if (r.data.estado === 'error') { e.aviso = { icono: '⚠️', titulo: 'No se pudieron preparar las preguntas', mensaje: r.data.message, reintentar: true }; break; }
        await new Promise(ok => setTimeout(ok, 3000));
      }
      if (!e.aviso) e.aviso = { icono: '⏳', titulo: 'Está tardando más de lo normal', mensaje: 'Intenta de nuevo en un momento.', reintentar: true };
      e.vista = 'aviso'; render();
    } finally { cargando = false; }
  }

  async function comenzar() {
    e.ocupado = true;
    const r = await api('/juego/tema/' + idTema + '/iniciar', {});
    e.ocupado = false;
    if (!r.ok) { e.aviso = { icono: '⚠️', titulo: 'No se pudo empezar', mensaje: r.error, reintentar: true }; e.vista = 'aviso'; render(); return; }
    Object.assign(e, { intento: r.data.intento, preguntas: r.data.preguntas, i: 0, puntos: 0, racha: 0, resultado: null });
    reiniciarPregunta();
    e.vista = 'pregunta'; render(true);
  }

  function reiniciarPregunta() { e.sel = null; e.texto = ''; e.fb = null; e.pistas = []; e.malas = new Set(); }

  async function comprobar() {
    const p = actual();
    if (e.ocupado) return;
    e.ocupado = true; render();
    const cuerpo = { idPregunta: p.id };
    if (p.tipo === 'respuesta_corta') cuerpo.texto = e.texto; else cuerpo.idOpcion = e.sel;
    const r = await api('/juego/intento/' + e.intento + '/responder', cuerpo);
    e.ocupado = false;
    if (!r.ok) { e.fb = null; render(); alert(r.error); return; }
    e.fb = r.data;
    e.puntos += r.data.puntos + r.data.bono;
    if (r.data.correcta) e.racha = r.data.racha || 0;
    else if (!r.data.puedeReintentar) e.racha = 0;
    if (!r.data.correcta && r.data.puedeReintentar && e.sel !== null) e.malas.add(e.sel);
    render();
  }

  async function pedirPista() {
    const p = actual();
    e.ocupado = true; render();
    const r = await api('/juego/intento/' + e.intento + '/pista', { idPregunta: p.id });
    e.ocupado = false;
    if (r.ok) e.pistas.push(r.data.texto);
    render();
  }

  async function siguiente() {
    if (e.i < e.preguntas.length - 1) { e.i++; reiniciarPregunta(); render(true); return; }
    e.ocupado = true;
    const r = await api('/juego/intento/' + e.intento + '/finalizar', {});
    e.ocupado = false;
    if (!r.ok) { e.aviso = { icono: '⚠️', titulo: 'No se pudieron guardar los resultados', mensaje: r.error, reintentar: false }; e.vista = 'aviso'; render(); return; }
    e.resultado = r.data;
    sincronizar(r.data);
    e.vista = 'final'; render();
    window.scrollTo({ top: 0, behavior: prefs.calma ? 'auto' : 'smooth' });
  }

  // Deja que Logros, Perfil e Inicio (que leen datos del navegador) vean este progreso
  function sincronizar(r) {
    try {
      localStorage.setItem('totalXp', String(r.puntosTotales));
      if (window.SapiensShell && SapiensShell.refrescarPuntos) SapiensShell.refrescarPuntos();
      localStorage.setItem('streak', String(r.racha));
      localStorage.setItem('lastStudyDate', new Date().toISOString().slice(0, 10));
      const asignatura = LEGACY[area.clave] || 'science';
      const clave = 'progress_' + asignatura + '_g' + idTema;
      const previo = JSON.parse(localStorage.getItem(clave) || 'null');
      if (r.estrellas > 0 || (previo && previo.done)) {
        localStorage.setItem(clave, JSON.stringify({ done: true, stars: Math.max(r.estrellas, previo ? previo.stars || 0 : 0) }));
      }
      if (r.dominado) C.marcarTemaHecho(idTema, area.id);
    } catch (_) {}
  }

  /* ---------- voz ---------- */
  function parar() { if ('speechSynthesis' in window) speechSynthesis.cancel(); e.leyendo = false; }
  function leer() {
    if (!('speechSynthesis' in window) || e.vista !== 'pregunta') return;
    parar();
    const p = actual();
    const texto = p.enunciado + '. ' + (p.opciones.length ? p.opciones.map((o, k) => 'Opción ' + (k + 1) + ': ' + o.texto).join('. ') : '');
    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = 'es-CO';
    const voces = speechSynthesis.getVoices();
    const v = voces.find(x => x.lang === 'es-CO') || voces.find(x => /^es[-_](419|MX|US)/.test(x.lang)) || voces.find(x => x.lang.startsWith('es'));
    if (v) voz.voice = v;
    voz.rate = 0.95;
    voz.onend = voz.onerror = () => { e.leyendo = false; if (e.vista === 'pregunta') render(); };
    e.leyendo = true;
    speechSynthesis.speak(voz);
  }

  /* ---------- eventos ---------- */
  panel.addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-acc]');
    if (!b || b.disabled) return;
    switch (b.dataset.acc) {
      case 'reintentar': cargarJuego(); return;
      case 'comenzar': case 'otra-vez': comenzar(); return;
      case 'opcion': e.sel = Number(b.dataset.id); render(); return;
      case 'comprobar': comprobar(); return;
      case 'pista': pedirPista(); return;
      case 'reintentar-pregunta': e.fb = null; e.sel = null; render(true); return;
      case 'siguiente': parar(); siguiente(); return;
      case 'salir': if (confirm('¿Salir del juego? Tu avance de esta partida no se guarda.')) { parar(); window.location.href = '../cursos/tema.html?tema=' + idTema; } return;
      case 'mas': prefs.tamano = Math.min(3, prefs.tamano + 1); guardarPrefs(); break;
      case 'menos': prefs.tamano = Math.max(0, prefs.tamano - 1); guardarPrefs(); break;
      case 'espaciado': prefs.espaciado = !prefs.espaciado; guardarPrefs(); break;
      case 'calma': prefs.calma = !prefs.calma; guardarPrefs(); break;
      case 'voz': if (e.leyendo) parar(); else leer(); break;
      default: return;
    }
    render();
  });

  panel.addEventListener('input', (ev) => {
    if (ev.target.id !== 'jgTexto') return;
    e.texto = ev.target.value;
    const boton = panel.querySelector('[data-acc="comprobar"]');
    if (boton) boton.disabled = !e.texto.trim();
  });

  document.addEventListener('keydown', (ev) => {
    if (e.vista !== 'pregunta') return;
    const p = actual();
    if (ev.key === 'Enter' && !ev.target.closest('button, a, summary')) {
      ev.preventDefault();
      if (terminada()) siguiente();
      else if (e.fb && e.fb.puedeReintentar) { e.fb = null; e.sel = null; render(true); }
      else if ((p.tipo === 'respuesta_corta' ? e.texto.trim() : e.sel !== null)) comprobar();
    } else if (/^[1-4]$/.test(ev.key) && !ev.target.closest('input') && p.tipo !== 'respuesta_corta' && !terminada()) {
      const o = p.opciones[Number(ev.key) - 1];
      if (o && !e.malas.has(o.id)) { e.sel = o.id; render(); }
    }
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

    document.title = 'Sapiens Lumen | Juego: ' + tema.nombre;
    document.getElementById('temaTitulo').textContent = 'Juego: ' + tema.nombre;
    document.getElementById('temaSubtitulo').textContent = ui.nombre + ' · ' + tema.grado + '° grado';
    document.getElementById('temaIcono').style.background = ui.color;
    document.getElementById('temaIcono').innerHTML = '<i class="fa-solid ' + ui.icon + '"></i>';
    cargarJuego();
  })();
})();
