/* ============================================================
   Sapiens Lumen – Página de Compañeros
   Invitar (validando que la cuenta exista), aceptar con código, ranking y progreso.
   ============================================================ */
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const api = (ruta, opciones) => SapiensAuth.api(ruta, opciones);

  const nombreCompleto = (p) => ((p.nombre || '') + ' ' + (p.apellido || '')).trim();
  const foto = (p) => SapiensAuth._resolverFoto(p.foto_url, nombreCompleto(p) || 'Usuario');
  const persona = (p, sub) =>
    '<div class="cmp-persona"><img src="' + esc(foto(p)) + '" alt=""><div><div class="nombre">' + esc(nombreCompleto(p)) + '</div>' +
    (sub ? '<div class="sub">' + esc(sub) + '</div>' : '') + '</div></div>';

  function mensaje(el, texto, tipo) {
    el.hidden = !texto;
    el.textContent = texto || '';
    el.className = 'cmp-msg ' + (tipo || '');
  }

  const fechaCorta = (f) => f ? new Date(f).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' }) : '';

  /* ---------- 1) Invitar: buscar y enviar ---------- */
  let encontrado = null;

  $('formBuscar').addEventListener('submit', async (e) => {
    e.preventDefault();
    const correo = $('correoBuscar').value.trim();
    const msg = $('msgBuscar'), res = $('resultadoBusqueda');
    res.hidden = true; mensaje(msg, '');
    encontrado = null;
    if (!correo) return mensaje(msg, 'Escribe el correo de tu compañero.', 'error');

    const btn = $('btnBuscar');
    btn.disabled = true;
    const r = await api('/companeros/buscar?correo=' + encodeURIComponent(correo));
    btn.disabled = false;
    if (!r.ok) return mensaje(msg, r.error, 'error');

    encontrado = r.data;
    const u = r.data.usuario;
    let accion = '';
    if (r.data.estado === 'ninguna') accion = '<button class="cmp-btn" id="btnEnviar">Enviar invitación</button>';
    else if (r.data.estado === 'recibida') accion = '<button class="cmp-btn" id="btnEnviar">Aceptar su invitación</button>';
    else if (r.data.estado === 'enviada') accion = '<span class="sub">Invitación pendiente de respuesta</span>';
    else accion = '<span class="sub">✅ Ya es tu compañero</span>';
    res.innerHTML = persona(u, 'Esta cuenta existe en Sapiens Lumen ✔') + '<div class="cmp-acciones">' + accion + '</div>';
    res.hidden = false;
    const enviar = $('btnEnviar');
    if (enviar) enviar.addEventListener('click', enviarInvitacion);
  });

  async function enviarInvitacion() {
    const btn = $('btnEnviar'), msg = $('msgBuscar');
    btn.disabled = true;
    const r = await api('/companeros/invitar', { method: 'POST', body: { correo: $('correoBuscar').value.trim() } });
    if (!r.ok) { btn.disabled = false; return mensaje(msg, r.error, 'error'); }
    $('resultadoBusqueda').hidden = true;
    $('correoBuscar').value = '';
    mensaje(msg, r.data.mensaje + (r.data.aceptada ? '' : ' Cuando la acepte, los dos podrán ver el progreso del otro.'), 'ok');
    cargarTodo();
  }

  /* ---------- 2) Aceptar con código ---------- */
  $('codigoInput').addEventListener('input', (e) => { e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); });

  $('formCodigo').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = $('msgCodigo');
    const codigo = $('codigoInput').value.trim();
    mensaje(msg, '');
    if (codigo.length !== 8) return mensaje(msg, 'El código tiene 8 letras y números.', 'error');
    $('btnCodigo').disabled = true;
    const r = await api('/companeros/codigo', { method: 'POST', body: { codigo } });
    $('btnCodigo').disabled = false;
    if (!r.ok) return mensaje(msg, r.error, 'error');
    $('codigoInput').value = '';
    mensaje(msg, '¡Listo! Ya son compañeros. 🎉', 'ok');
    cargarTodo();
  });

  // Si llegaste desde el enlace del correo (?codigo=XXXXXXXX), muestra quién te invitó
  async function invitacionDeEnlace() {
    const codigo = new URLSearchParams(location.search).get('codigo');
    if (!codigo) return;
    $('codigoInput').value = codigo.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
    const r = await api('/companeros/invitacion/' + encodeURIComponent(codigo));
    const bloque = $('bloqueInvitacionCodigo'), caja = $('invitacionCodigo');
    if (!r.ok) {
      bloque.hidden = false;
      caja.innerHTML = '<span>' + esc(r.error) + ' Inicia sesión con el correo al que llegó la invitación.</span>';
      return;
    }
    if (r.data.estado !== 'pendiente') return;   // ya se respondió
    bloque.hidden = false;
    caja.innerHTML = persona(r.data.de, 'te invitó a ser su compañero') +
      '<div class="cmp-acciones"><button class="cmp-btn" data-resp="1">Aceptar</button><button class="cmp-btn sec" data-resp="0">Rechazar</button></div>';
    caja.querySelectorAll('[data-resp]').forEach((b) => b.addEventListener('click', async () => {
      caja.querySelectorAll('button').forEach((x) => { x.disabled = true; });
      const ok = await responder(r.data.id, b.dataset.resp === '1');
      if (ok) { bloque.hidden = true; history.replaceState(null, '', location.pathname); }
    }));
  }

  /* ---------- 3) Invitaciones recibidas / enviadas ---------- */
  async function responder(idRelacion, aceptar) {
    const r = await api('/companeros/responder', { method: 'POST', body: { idRelacion, aceptar } });
    if (!r.ok) { alert(r.error); return false; }
    if (window.SapiensShell) SapiensShell.toast(aceptar ? '🎉 ¡Ahora son compañeros!' : 'Invitación rechazada');
    cargarTodo();
    return true;
  }

  function pintarInvitaciones(datos) {
    const rec = $('listaRecibidas'), env = $('listaEnviadas');
    $('bloqueRecibidas').hidden = !datos.recibidas.length;
    $('bloqueEnviadas').hidden = !datos.enviadas.length;
    rec.innerHTML = datos.recibidas.map((i) =>
      '<li class="cmp-fila">' + persona(i, 'te invitó el ' + fechaCorta(i.fecha)) +
      '<div class="cmp-acciones"><button class="cmp-btn mini" data-acepta="' + i.idRelacion + '">Aceptar</button>' +
      '<button class="cmp-btn sec mini" data-rechaza="' + i.idRelacion + '">Rechazar</button></div></li>').join('');
    env.innerHTML = datos.enviadas.map((i) =>
      '<li class="cmp-fila">' + persona(i, 'enviada el ' + fechaCorta(i.fecha)) +
      '<div class="cmp-acciones"><button class="cmp-btn sec mini" data-cancela="' + i.idRelacion + '">Cancelar</button></div></li>').join('');
  }

  document.addEventListener('click', async (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.acepta) { b.disabled = true; responder(Number(b.dataset.acepta), true); }
    else if (b.dataset.rechaza) { b.disabled = true; responder(Number(b.dataset.rechaza), false); }
    else if (b.dataset.cancela) {
      b.disabled = true;
      const r = await api('/companeros/' + b.dataset.cancela, { method: 'DELETE' });
      if (!r.ok) { b.disabled = false; return alert(r.error); }
      cargarTodo();
    } else if (b.dataset.quita) {
      if (!confirm('¿Dejar de ser compañeros con ' + b.dataset.nombre + '? Ya no verán el progreso del otro.')) return;
      const r = await api('/companeros/' + b.dataset.quita, { method: 'DELETE' });
      if (!r.ok) return alert(r.error);
      cargarTodo();
    } else if (b.dataset.ver) {
      verProgreso(Number(b.dataset.ver));
    }
  });

  /* ---------- 4) Pestañas ---------- */
  function mostrarPestana(cual) {
    const rk = cual === 'ranking';
    $('tabRanking').setAttribute('aria-selected', String(rk));
    $('tabCompaneros').setAttribute('aria-selected', String(!rk));
    $('panelRanking').hidden = !rk;
    $('panelCompaneros').hidden = rk;
  }
  $('tabRanking').addEventListener('click', () => mostrarPestana('ranking'));
  $('tabCompaneros').addEventListener('click', () => mostrarPestana('companeros'));

  /* ---------- 5) Ranking ---------- */
  const MEDALLAS = ['🥇', '🥈', '🥉'];

  function pintarRanking(r, hayCompaneros) {
    const cont = $('rankingCont');
    if (!hayCompaneros) {
      cont.innerHTML = '<div class="cmp-vacio"><span class="grande">🏆</span>Invita a un compañero para ver el ranking.<br>Mientras tanto, tú vas en <b>' +
        (r.lista[0] ? r.lista[0].puntos : 0) + ' puntos</b>.</div>';
      return;
    }
    let html = '';
    if (r.yoOculto) html += '<p class="cmp-msg ok">Tienes desactivado «Mostrar en el ranking» en Ajustes: tus compañeros no te ven aquí, pero tú sí ves tu posición.</p>';
    html += '<ol class="rk-lista">' + r.lista.map((f) =>
      '<li class="rk-fila' + (f.yo ? ' yo' : '') + '">' +
        '<div class="rk-pos" aria-label="Puesto ' + f.posicion + '">' + (MEDALLAS[f.posicion - 1] || f.posicion) + '</div>' +
        persona(f, (f.yo ? 'Tú · ' : '') + f.nivel) +
        '<div class="rk-datos"><span class="rk-puntos">' + f.puntos.toLocaleString('es-CO') + ' pts</span>' +
        '<span>🔥 <b>' + f.racha + '</b> días</span><span>🏅 <b>' + f.insignias + '</b></span></div>' +
      '</li>').join('') + '</ol>';
    if (r.ocultos) html += '<p class="cmp-sub" style="margin-top:12px;">' + r.ocultos + (r.ocultos === 1 ? ' compañero prefiere' : ' compañeros prefieren') + ' no aparecer en el ranking.</p>';
    cont.innerHTML = html;
  }

  /* ---------- 6) Mis compañeros ---------- */
  function pintarCompaneros(lista) {
    $('cuentaCompaneros').textContent = lista.length ? '(' + lista.length + ')' : '';
    const cont = $('companerosCont');
    if (!lista.length) {
      cont.innerHTML = '<div class="cmp-vacio"><span class="grande">👥</span>Aún no tienes compañeros.<br>Invita a alguien con su correo para empezar.</div>';
      return;
    }
    cont.innerHTML = '<div class="cmp-companeros">' + lista.map((c) =>
      '<div class="cmp-companero">' + persona(c, c.desde ? 'Compañeros desde ' + fechaCorta(c.desde) : '') +
      '<div class="cmp-acciones"><button class="cmp-btn mini" data-ver="' + c.id + '">Ver progreso</button>' +
      '<button class="cmp-btn peligro mini" data-quita="' + c.idRelacion + '" data-nombre="' + esc(c.nombre) + '">Quitar</button></div></div>').join('') + '</div>';
  }

  /* ---------- 7) Progreso de un compañero ---------- */
  const modal = $('modalProgreso');
  let origenFoco = null;

  function abrirModal() { origenFoco = document.activeElement; modal.hidden = false; $('cerrarModal').focus(); }
  function cerrarModal() { modal.hidden = true; if (origenFoco && origenFoco.focus) origenFoco.focus(); }
  $('cerrarModal').addEventListener('click', cerrarModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) cerrarModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) cerrarModal(); });

  async function verProgreso(id) {
    $('modalPersona').innerHTML = '';
    $('modalContenido').innerHTML = '<p class="cmp-vacio">Cargando…</p>';
    abrirModal();
    const r = await api('/companeros/' + id + '/progreso');
    if (!r.ok) { $('modalContenido').innerHTML = '<p class="cmp-msg error">' + esc(r.error) + '</p>'; return; }
    const d = r.data;
    $('modalPersona').innerHTML = persona(d.persona, d.privado ? 'Perfil privado' : d.progreso.nivel.nombre + (d.progreso.grado ? ' · ' + d.progreso.grado + '°' : ''));
    if (d.privado) {
      $('modalContenido').innerHTML = '<div class="cmp-vacio"><span class="grande">🔒</span>' + esc(d.persona.nombre) + ' tiene el perfil privado.<br>No comparte su progreso ni sus insignias, pero sigue siendo tu compañero.</div>';
      return;
    }
    const p = d.progreso;
    const stat = (v, t) => '<div class="cmp-stat"><b>' + v + '</b><span>' + t + '</span></div>';
    const materias = p.materias.filter((m) => m.temasJugados > 0).map((m) => {
      const v = window.SapiensCurriculo ? SapiensCurriculo.visual(m.clave, m.nombre) : { icon: 'fa-book', color: '#2E7D32', nombre: m.nombre };
      return '<div class="cmp-mat"><i class="fa-solid ' + esc(v.icon) + '" style="background:' + esc(v.color) + '" aria-hidden="true"></i>' +
        '<div><div>' + esc(v.nombre) + '</div><div class="cmp-barra" role="img" aria-label="' + m.porcentaje + '% dominado"><div style="width:' + m.porcentaje + '%;background:' + esc(v.color) + '"></div></div></div>' +
        '<b>' + m.temasDominados + '/' + m.temasTotal + '</b></div>';
    }).join('');
    $('modalContenido').innerHTML =
      '<div class="cmp-stats">' +
        stat(p.puntosTotales.toLocaleString('es-CO'), 'Puntos') + stat(p.racha + ' 🔥', 'Racha (días)') +
        stat(p.retosCompletados, 'Juegos') + stat(p.porcentajeAciertos + '%', 'Aciertos') +
        stat(p.temasDominados + '/' + p.temasTotal, 'Temas dominados') +
      '</div>' +
      '<h3>Avance por materia</h3>' + (materias || '<p class="cmp-sub">Aún no ha jugado ninguna materia.</p>') +
      '<h3>Insignias (' + d.insignias.length + ')</h3>' +
      (d.insignias.length ? '<div class="cmp-insignias">' + d.insignias.map((i) => '<span class="cmp-insignia" title="' + esc(i.descripcion) + '">' + i.icono + ' ' + esc(i.nombre) + '</span>').join('') + '</div>'
        : '<p class="cmp-sub">Aún no tiene insignias.</p>');
  }

  /* ---------- carga general ---------- */
  async function cargarTodo() {
    const [lista, rank] = await Promise.all([api('/companeros'), api('/companeros/ranking')]);
    if (lista.ok) {
      pintarInvitaciones(lista.data);
      pintarCompaneros(lista.data.companeros);
    } else {
      $('companerosCont').innerHTML = '<p class="cmp-msg error">' + esc(lista.error) + '</p>';
    }
    if (rank.ok) pintarRanking(rank.data, lista.ok && lista.data.companeros.length > 0);
    else $('rankingCont').innerHTML = '<p class="cmp-msg error">' + esc(rank.error) + '</p>';
  }

  cargarTodo();
  invitacionDeEnlace();
})();
