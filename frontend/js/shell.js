/* ============================================================
   Sapiens Lumen – Elementos comunes de todas las páginas con menú:
   - El patico (logo) lleva al Inicio.
   - Botón "Compañeros" a la derecha del encabezado (con aviso de invitaciones).
   - Campana de notificaciones.
   Se carga DESPUÉS de auth.js.
   ============================================================ */
(function () {
  'use strict';
  if (!window.SapiensAuth || !SapiensAuth.getUser()) return;

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const IR_INICIO = '../home/home.html';
  const IR_COMPANEROS = '../companeros/companeros.html';

  /* ---------- 1) El patico lleva al Inicio ---------- */
  const logo = document.querySelector('.sidebar .logo');
  if (logo && !logo.querySelector('a.logo-link')) {
    const enlace = document.createElement('a');
    enlace.className = 'logo-link';
    enlace.href = IR_INICIO;
    enlace.title = 'Ir al inicio';
    enlace.setAttribute('aria-label', 'Sapiens Lumen: ir al inicio');
    while (logo.firstChild) enlace.appendChild(logo.firstChild);
    logo.appendChild(enlace);
  }

  /* ---------- 2) Botón Compañeros + 3) Campana ---------- */
  const derecha = document.querySelector('.header-right');
  const campana = derecha && derecha.querySelector('.notification');
  if (!derecha) return;

  const botonComp = document.createElement('a');
  botonComp.className = 'hdr-companeros';
  botonComp.href = IR_COMPANEROS;
  botonComp.title = 'Compañeros';
  botonComp.innerHTML = '<i class="fa-solid fa-user-group" aria-hidden="true"></i><span>Compañeros</span><b class="hdr-badge" hidden></b>';
  if (/companeros\.html$/.test(location.pathname)) botonComp.classList.add('active');
  derecha.insertBefore(botonComp, derecha.firstChild);

  /* ---------- Selector de grado: un clic y listo ---------- */
  const GRADOS = [[6, 'Sexto'], [7, 'Séptimo'], [8, 'Octavo'], [9, 'Noveno'], [10, 'Décimo'], [11, 'Once']];
  const gradoActual = () => {
    const u = SapiensAuth.getUser() || {};
    const g = parseInt(u.grade || localStorage.getItem('sapiens_grade'), 10);
    return g >= 6 && g <= 11 ? g : null;
  };

  const gradoWrap = document.createElement('div');
  gradoWrap.className = 'grado-wrap';
  gradoWrap.innerHTML =
    '<button type="button" class="hdr-grado" aria-haspopup="true" aria-expanded="false" title="Cambiar de grado">' +
      '<i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><span class="grado-texto"></span><i class="fa-solid fa-chevron-down grado-flecha" aria-hidden="true"></i></button>' +
    '<div class="grado-menu" role="menu" hidden aria-label="Elige tu grado"></div>';
  derecha.insertBefore(gradoWrap, derecha.firstChild);
  const botonGrado = gradoWrap.querySelector('.hdr-grado');
  const menuGrado = gradoWrap.querySelector('.grado-menu');

  function pintarGrado() {
    const g = gradoActual();
    botonGrado.querySelector('.grado-texto').innerHTML = g ? '<span class="g-palabra">Grado </span>' + g + '°' : 'Elige tu grado';
    menuGrado.innerHTML = '<p class="grado-titulo">¿En qué grado estás?</p>' + GRADOS.map(([n, nombre]) =>
      '<button type="button" role="menuitemradio" aria-checked="' + (n === g) + '" data-grado="' + n + '"' + (n === g ? ' class="actual"' : '') + '>' +
      '<b>' + n + '°</b><span>' + nombre + '</span>' + (n === g ? '<i class="fa-solid fa-check" aria-hidden="true"></i>' : '') + '</button>').join('');
  }
  function abrirGrado() { menuGrado.hidden = false; botonGrado.setAttribute('aria-expanded', 'true'); (menuGrado.querySelector('.actual') || menuGrado.querySelector('button')).focus(); }
  function cerrarGrado() { menuGrado.hidden = true; botonGrado.setAttribute('aria-expanded', 'false'); }

  async function cambiarGrado(n) {
    if (n === gradoActual()) return cerrarGrado();
    menuGrado.querySelectorAll('button').forEach((b) => { b.disabled = true; });
    botonGrado.querySelector('.grado-texto').textContent = 'Cambiando…';
    const r = await SapiensAuth.api('/auth/preferencias', { method: 'PATCH', body: { grade: n } });
    if (!r.ok) {
      pintarGrado();
      cerrarGrado();
      toast('No se pudo cambiar el grado. Intenta de nuevo.');
      return;
    }
    // la sesión de este navegador y la copia local quedan con el grado nuevo
    try {
      const u = SapiensAuth.getUser();
      if (u) { u.grade = n; localStorage.setItem('sapiens_user', JSON.stringify(u)); }
    } catch (_) { /* se ignora */ }
    localStorage.setItem('sapiens_grade', String(n));
    // si la página trae el grado en la dirección (curso.html?grado=9), se actualiza; después se recarga
    const url = new URL(location.href);
    if (url.searchParams.has('grado')) url.searchParams.set('grado', String(n));
    location.replace(url.toString());
  }

  botonGrado.addEventListener('click', (e) => { e.stopPropagation(); menuGrado.hidden ? abrirGrado() : cerrarGrado(); });
  menuGrado.addEventListener('click', (e) => { const b = e.target.closest('[data-grado]'); if (b) cambiarGrado(Number(b.dataset.grado)); });
  menuGrado.addEventListener('keydown', (e) => {
    const items = [...menuGrado.querySelectorAll('[data-grado]')];
    const i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
  });
  document.addEventListener('click', (e) => { if (!gradoWrap.contains(e.target)) cerrarGrado(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menuGrado.hidden) { cerrarGrado(); botonGrado.focus(); } });
  // Cualquier enlace o botón con data-cambiar-grado abre este mismo selector (sin pasos de más)
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-cambiar-grado]');
    if (!t) return;
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    abrirGrado();
  });
  pintarGrado();

  let envoltura = null, panel = null, insignia = null;
  if (campana) {
    envoltura = document.createElement('div');
    envoltura.className = 'notif-wrap';
    campana.parentNode.insertBefore(envoltura, campana);
    envoltura.appendChild(campana);
    campana.setAttribute('aria-label', 'Notificaciones');
    campana.setAttribute('aria-haspopup', 'true');
    campana.setAttribute('aria-expanded', 'false');
    // la insignia va junto al botón (no dentro) para que no se recorte
    insignia = document.createElement('b');
    insignia.className = 'notif-badge';
    insignia.hidden = true;
    insignia.setAttribute('aria-hidden', 'true');
    envoltura.appendChild(insignia);

    panel = document.createElement('div');
    panel.className = 'notif-panel';
    panel.hidden = true;
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Notificaciones');
    panel.innerHTML =
      '<div class="notif-head"><strong>Notificaciones</strong><button type="button" class="notif-leer">Marcar todo como leído</button></div>' +
      '<div class="notif-lista" aria-live="polite"><p class="notif-vacio">Cargando…</p></div>';
    envoltura.appendChild(panel);
  }

  /* ---------- avisos (toast) ---------- */
  function toast(mensaje) {
    let caja = document.getElementById('shellToasts');
    if (!caja) {
      caja = document.createElement('div');
      caja.id = 'shellToasts';
      caja.className = 'shell-toasts';
      caja.setAttribute('role', 'status');
      document.body.appendChild(caja);
    }
    const t = document.createElement('div');
    t.className = 'shell-toast';
    t.textContent = mensaje;
    caja.appendChild(t);
    setTimeout(() => { t.classList.add('fuera'); setTimeout(() => t.remove(), 400); }, 4500);
  }
  window.SapiensShell = { toast, abrirGrado: () => { botonGrado.scrollIntoView({ block: 'nearest' }); abrirGrado(); } };

  /* ---------- Estrellas y puntos: siempre visibles arriba, en cualquier pantalla ---------- */
  const usuarioActual = SapiensAuth.getUser() || {};
  const CLAVE_STATS = 'sapiens_stats@u' + usuarioActual.id;
  const puntosEl = document.createElement('a');
  puntosEl.className = 'hdr-puntos';
  puntosEl.href = '../progreso/progreso.html';
  puntosEl.title = 'Tus estrellas y puntos (ver mi progreso)';
  puntosEl.innerHTML =
    '<span class="hp-est"><i class="fa-solid fa-star" aria-hidden="true"></i><b data-hp="estrellas">0</b></span>' +
    '<span class="hp-pts"><b data-hp="puntos">0</b><small>pts</small></span>';
  derecha.insertBefore(puntosEl, derecha.firstChild);
  const elEstrellas = puntosEl.querySelector('[data-hp="estrellas"]');
  const elPuntos = puntosEl.querySelector('[data-hp="puntos"]');
  const fmt = (n) => Number(n || 0).toLocaleString('es-CO');
  let statsActuales = null;

  function pintarPuntos(s, animar) {
    if (!s) return;
    const subio = animar && statsActuales && (s.puntos > statsActuales.puntos || s.estrellas > statsActuales.estrellas);
    statsActuales = s;
    elEstrellas.textContent = fmt(s.estrellas);
    elPuntos.textContent = fmt(s.puntos);
    puntosEl.setAttribute('aria-label', s.estrellas + ' estrellas y ' + s.puntos + ' puntos. Ver mi progreso');
    if (subio) { puntosEl.classList.remove('sube'); void puntosEl.offsetWidth; puntosEl.classList.add('sube'); }
  }
  try { pintarPuntos(JSON.parse(localStorage.getItem(CLAVE_STATS) || 'null'), false); } catch (_) { /* sin copia local */ }

  async function refrescarPuntos() {
    const r = await SapiensAuth.api('/juego/perfil');
    if (!r.ok) return;
    const s = { puntos: Number(r.data.puntosTotales) || 0, estrellas: Number(r.data.estrellas) || 0 };
    pintarPuntos(s, true);
    try { localStorage.setItem(CLAVE_STATS, JSON.stringify(s)); } catch (_) { /* sin guardado */ }
  }
  window.SapiensShell.refrescarPuntos = refrescarPuntos;
  refrescarPuntos();
  // al volver a la pestaña o con el botón "atrás", se actualiza
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refrescarPuntos(); });
  window.addEventListener('pageshow', (e) => { if (e.persisted) refrescarPuntos(); });

  /* ---------- contadores ---------- */
  let ultimoTotal = null;
  function pintarContadores(r) {
    if (insignia) {
      insignia.hidden = !r.noLeidas;
      insignia.textContent = r.noLeidas > 9 ? '9+' : String(r.noLeidas);
    }
    const b = botonComp.querySelector('.hdr-badge');
    b.hidden = !r.invitacionesPendientes;
    b.textContent = String(r.invitacionesPendientes);
    if (ultimoTotal !== null && r.noLeidas > ultimoTotal) toast('🔔 Tienes una notificación nueva');
    ultimoTotal = r.noLeidas;
  }

  async function consultarResumen() {
    if (document.hidden) return;
    const r = await SapiensAuth.api('/notificaciones/resumen');
    if (r.ok) pintarContadores(r.data);
  }

  /* ---------- lista de la campana ---------- */
  const ICONOS = { invitacion: '🤝', companero: '🎉', logro: '🏆', recordatorio: '⏰', resumen: '📊' };

  function hace(fechaTexto) {
    const seg = Math.max(0, (Date.now() - new Date(fechaTexto).getTime()) / 1000);
    if (seg < 60) return 'ahora';
    if (seg < 3600) return 'hace ' + Math.floor(seg / 60) + ' min';
    if (seg < 86400) return 'hace ' + Math.floor(seg / 3600) + ' h';
    const d = Math.floor(seg / 86400);
    return d === 1 ? 'ayer' : 'hace ' + d + ' días';
  }

  // Las direcciones guardadas son de la raíz del sitio (/logros/logros.html); las páginas están una carpeta adentro
  const destino = (url) => (url ? '..' + (url.startsWith('/') ? url : '/' + url) : null);

  async function cargarLista() {
    const lista = panel.querySelector('.notif-lista');
    const r = await SapiensAuth.api('/notificaciones');
    if (!r.ok) { lista.innerHTML = '<p class="notif-vacio">No se pudieron cargar las notificaciones.</p>'; return; }
    pintarContadores(r.data);
    if (!r.data.notificaciones.length) {
      lista.innerHTML = '<p class="notif-vacio">🦆 Todo tranquilo por aquí.<br>Aquí verás invitaciones, logros y recordatorios.</p>';
      return;
    }
    lista.innerHTML = r.data.notificaciones.map((n) =>
      '<button type="button" class="notif-item' + (n.leida ? '' : ' nueva') + '" data-id="' + n.id + '" data-url="' + esc(destino(n.url) || '') + '">' +
        '<span class="notif-icono" aria-hidden="true">' + (ICONOS[n.tipo] || '🔔') + '</span>' +
        '<span class="notif-texto"><strong>' + esc(n.titulo) + '</strong><span>' + esc(n.mensaje) + '</span><small>' + hace(n.fecha) + '</small></span>' +
      '</button>').join('');
  }

  function abrir() {
    panel.hidden = false;
    campana.setAttribute('aria-expanded', 'true');
    cargarLista();
  }
  function cerrar() {
    if (!panel || panel.hidden) return;
    panel.hidden = true;
    campana.setAttribute('aria-expanded', 'false');
  }

  if (campana) {
    campana.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.hidden ? abrir() : cerrar();
    });
    document.addEventListener('click', (e) => { if (!envoltura.contains(e.target)) cerrar(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { cerrar(); campana.focus(); } });

    panel.querySelector('.notif-leer').addEventListener('click', async () => {
      const r = await SapiensAuth.api('/notificaciones/leer', { method: 'POST', body: {} });
      if (r.ok) { pintarContadores(r.data); cargarLista(); }
    });

    panel.querySelector('.notif-lista').addEventListener('click', async (e) => {
      const item = e.target.closest('.notif-item');
      if (!item) return;
      if (item.classList.contains('nueva')) {
        await SapiensAuth.api('/notificaciones/leer', { method: 'POST', body: { id: Number(item.dataset.id) } });
      }
      if (item.dataset.url) window.location.href = item.dataset.url;
      else { item.classList.remove('nueva'); consultarResumen(); }
    });
  }

  consultarResumen();
  setInterval(consultarResumen, 45000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) consultarResumen(); });
})();
