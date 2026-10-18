/* ============================================================
   Sapiens Lumen – Tutor IA (chat)
   El estudiante escribe y el servidor (/api/tutor/mensaje) responde con IA.
   La conversación se guarda en este navegador, separada por cuenta.
   ============================================================ */
(function () {
  'use strict';
  if (!window.SapiensAuth || !SapiensAuth.isLoggedIn()) { window.location.href = '../auth/login.html'; return; }

  const usuario = SapiensAuth.getUser();
  const lista = document.getElementById('tutorMensajes');
  const form = document.getElementById('tutorForm');
  const caja = document.getElementById('tutorTexto');
  const boton = document.getElementById('tutorEnviar');
  const sugerencias = document.getElementById('tutorSugerencias');
  const subtitulo = document.getElementById('tutorTema');
  const nuevo = document.getElementById('tutorNuevo');

  const idTemaUrl = parseInt(new URLSearchParams(window.location.search).get('tema'), 10);
  const CLAVE = 'sapiens_tutor@u' + (usuario && usuario.id);
  const MAX_GUARDADOS = 40;

  let mensajes = [];            // [{ rol: 'usuario' | 'tutor', texto }]
  let idTema = idTemaUrl > 0 ? idTemaUrl : null;
  let nombreTema = null;
  let ocupado = false;

  /* ---------- guardado local ---------- */
  function cargar() {
    try {
      const g = JSON.parse(localStorage.getItem(CLAVE) || 'null');
      if (g && Array.isArray(g.mensajes)) {
        mensajes = g.mensajes.filter((m) => m && (m.rol === 'usuario' || m.rol === 'tutor') && typeof m.texto === 'string');
        if (!idTema && g.idTema) idTema = g.idTema;
        nombreTema = g.nombreTema || null;
      }
    } catch (_) {}
  }
  function guardar() {
    try { localStorage.setItem(CLAVE, JSON.stringify({ mensajes: mensajes.slice(-MAX_GUARDADOS), idTema, nombreTema })); } catch (_) {}
  }

  /* ---------- texto -> HTML seguro (Markdown sencillo + fórmulas) ---------- */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function inline(t) {
    return t
      .replace(/`([^`\n]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*\w])\*([^*\s][^*\n]*?)\*(?!\w)/g, '$1<em>$2</em>');
  }

  function aHtml(texto) {
    // 1) "$x$" -> "\(x\)" (la IA a veces usa dólares); el dinero ("$5 y $6") no se toca
    let t = texto.replace(/\$\$([\s\S]+?)\$\$/g, '\\[$1\\]')
      .replace(/\$([^\s$](?:[^$\n]*?[^\s$])?)\$/g, '\\($1\\)');
    // 2) las fórmulas se guardan aparte para que el Markdown no las dañe
    const formulas = [];
    t = t.replace(/\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)/g, (m) => { formulas.push(m); return '\u0000' + (formulas.length - 1) + '\u0000'; });
    t = esc(t);

    // 3) bloques de código
    const bloques = [];
    t = t.replace(/```[a-zA-Z0-9]*\n?([\s\S]*?)```/g, (m, codigo) => { bloques.push('<pre><code>' + codigo.replace(/\n$/, '') + '</code></pre>'); return '\u0001' + (bloques.length - 1) + '\u0001'; });

    // 4) párrafos y listas, línea por línea
    const salida = [];
    let abierta = null;
    const cerrar = () => { if (abierta) { salida.push('</' + abierta + '>'); abierta = null; } };
    let parrafo = [];
    const vaciar = () => { if (parrafo.length) { salida.push('<p>' + inline(parrafo.join('<br>')) + '</p>'); parrafo = []; } };
    t.split('\n').forEach((linea) => {
      const ul = linea.match(/^\s*[-*•]\s+(.*)$/);
      const ol = linea.match(/^\s*\d+[.)]\s+(.*)$/);
      const titulo = linea.match(/^\s*#{1,4}\s+(.*)$/);
      const regla = /^\s*(-{3,}|_{3,}|\*{3,})\s*$/.test(linea);
      const bloque = linea.match(/^\u0001(\d+)\u0001$/);
      if (ul || ol) {
        vaciar();
        const tipo = ul ? 'ul' : 'ol';
        if (abierta !== tipo) { cerrar(); salida.push('<' + tipo + '>'); abierta = tipo; }
        salida.push('<li>' + inline((ul || ol)[1]) + '</li>');
      } else if (bloque) {
        vaciar(); cerrar(); salida.push(bloques[Number(bloque[1])]);
      } else if (titulo) {
        vaciar(); cerrar(); salida.push('<p><strong>' + inline(titulo[1]) + '</strong></p>');
      } else if (regla) {
        vaciar(); cerrar();
      } else if (!linea.trim()) {
        vaciar(); cerrar();
      } else {
        cerrar(); parrafo.push(linea);
      }
    });
    vaciar(); cerrar();
    let html = salida.join('');
    html = html.replace(/\u0001(\d+)\u0001/g, (m, i) => bloques[Number(i)]);
    // 5) las fórmulas vuelven a su lugar (con los símbolos escapados; KaTeX las dibuja después)
    return html.replace(/\u0000(\d+)\u0000/g, (m, i) => esc(formulas[Number(i)]));
  }

  function dibujarFormulas(nodo) {
    if (typeof window.renderMathInElement !== 'function') return;
    try {
      window.renderMathInElement(nodo, {
        delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '\\(', right: '\\)', display: false }],
        throwOnError: false,
      });
    } catch (_) {}
  }

  /* ---------- pintar mensajes ---------- */
  function burbuja(rol, texto, extra) {
    const d = document.createElement('div');
    d.className = 'tm ' + (rol === 'usuario' ? 'yo' : 'ia') + (extra ? ' ' + extra : '');
    if (rol === 'usuario') d.textContent = texto;
    else { d.innerHTML = aHtml(texto); dibujarFormulas(d); }
    return d;
  }

  function bajar() { lista.scrollTop = lista.scrollHeight; }

  function pintarTodo() {
    lista.innerHTML = '';
    if (!mensajes.length) {
      lista.appendChild(burbuja('tutor', 'Hola ' + (usuario.firstName || usuario.name || '') + ' 👋 Soy **Quacky**, tu tutor. Puedes preguntarme dudas de cualquier materia, pedirme que te explique un tema paso a paso, que te ayude con un ejercicio o que te haga un quiz de práctica. ¿Por dónde empezamos?'));
    } else {
      mensajes.forEach((m) => lista.appendChild(burbuja(m.rol, m.texto)));
    }
    pintarSugerencias();
    pintarTema();
    bajar();
  }

  function pintarTema() {
    subtitulo.textContent = nombreTema ? 'Hablando sobre: ' + nombreTema : 'Pregúntame lo que quieras estudiar';
  }

  const SUGERENCIAS = [
    ['📘 Explícame un tema', 'Explícame un tema de mi grado. ¿Cuál me recomiendas repasar?'],
    ['📝 Ponme un quiz', 'Hazme un quiz corto de práctica, una pregunta a la vez.'],
    ['🧮 Ayúdame con un ejercicio', 'Necesito ayuda con un ejercicio. Te lo voy a escribir ahora.'],
    ['💡 Consejos para estudiar', 'Dame consejos para organizar mi estudio y concentrarme mejor.'],
  ];
  function pintarSugerencias() {
    sugerencias.innerHTML = '';
    if (mensajes.length) return;
    SUGERENCIAS.forEach(([etiqueta, texto]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = etiqueta;
      b.addEventListener('click', () => enviar(texto));
      sugerencias.appendChild(b);
    });
  }

  /* ---------- enviar ---------- */
  function escribiendo(on) {
    const previo = document.getElementById('tmEscribiendo');
    if (previo) previo.remove();
    if (!on) return;
    const d = document.createElement('div');
    d.className = 'tm ia escribiendo';
    d.id = 'tmEscribiendo';
    d.setAttribute('aria-label', 'El tutor está escribiendo');
    d.innerHTML = '<i></i><i></i><i></i>';
    lista.appendChild(d);
    bajar();
  }

  function bloquear(si) {
    ocupado = si;
    boton.disabled = si;
    caja.disabled = si;
    nuevo.disabled = si;
  }

  async function pedirRespuesta() {
    bloquear(true);
    escribiendo(true);
    const r = await SapiensAuth.api('/tutor/mensaje', { method: 'POST', body: { mensajes, idTema } });
    escribiendo(false);
    bloquear(false);

    if (r.ok) {
      mensajes.push({ rol: 'tutor', texto: r.data.respuesta });
      if (r.data.tema) { nombreTema = r.data.tema.nombre; pintarTema(); }
      guardar();
      lista.appendChild(burbuja('tutor', r.data.respuesta + (r.data.cortada ? '\n\n_(La respuesta quedó incompleta. Escribe «continúa» para seguir.)_' : '')));
    } else {
      const d = burbuja('tutor', r.error || 'No pude responder ahora. Intenta de nuevo.', 'error');
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'tm-reintentar';
      b.innerHTML = '<i class="fa-solid fa-rotate-right" aria-hidden="true"></i> Reintentar';
      b.addEventListener('click', () => { d.remove(); pedirRespuesta(); });
      d.appendChild(b);
      lista.appendChild(d);
    }
    bajar();
    if (window.matchMedia('(hover: hover)').matches) caja.focus();
  }

  async function enviar(texto) {
    texto = (texto || '').trim();
    if (!texto || ocupado) return;
    if (!mensajes.length) lista.innerHTML = '';
    mensajes.push({ rol: 'usuario', texto });
    guardar();
    lista.appendChild(burbuja('usuario', texto));
    sugerencias.innerHTML = '';
    caja.value = '';
    ajustarAlto();
    bajar();
    await pedirRespuesta();
  }

  /* ---------- caja de texto ---------- */
  function ajustarAlto() {
    caja.style.height = 'auto';
    caja.style.height = Math.min(caja.scrollHeight, 140) + 'px';
    caja.style.overflowY = caja.scrollHeight > 140 ? 'auto' : 'hidden';
  }
  caja.addEventListener('input', ajustarAlto);
  caja.addEventListener('keydown', (e) => {
    // Enter envía; Shift+Enter hace un salto de línea (en el celular, el botón de enviar)
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing && window.matchMedia('(hover: hover)').matches) {
      e.preventDefault();
      enviar(caja.value);
    }
  });
  form.addEventListener('submit', (e) => { e.preventDefault(); enviar(caja.value); });

  nuevo.addEventListener('click', () => {
    if (mensajes.length && !window.confirm('¿Empezar una conversación nueva? Se borrará la actual.')) return;
    mensajes = [];
    idTema = null;
    nombreTema = null;
    guardar();
    pintarTodo();
    caja.focus();
  });

  /* ---------- inicio ---------- */
  cargar();
  // si se abrió desde un tema (?tema=ID) y es distinto del guardado, la conversación empieza limpia
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE) || 'null');
    if (idTemaUrl > 0 && g && g.idTema !== idTemaUrl) { mensajes = []; nombreTema = null; guardar(); }
  } catch (_) {}
  pintarTodo();

  // el tutor puede estar sin configurar en el servidor: se avisa de entrada
  SapiensAuth.api('/tutor/estado').then((r) => {
    if (r.ok && r.data.disponible === false) {
      const d = burbuja('tutor', 'El tutor todavía no está activado en este servidor. Pídele a quien administra la plataforma que configure la IA.', 'error');
      lista.appendChild(d);
      bloquear(true);
    }
  });

  // las fórmulas se dibujan cuando termina de cargar KaTeX (se carga con "defer")
  window.addEventListener('load', () => { lista.querySelectorAll('.tm.ia').forEach(dibujarFormulas); });
})();
