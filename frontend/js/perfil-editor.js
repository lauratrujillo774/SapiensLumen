/* ============================================================
   Sapiens Lumen – Perfil: cada dato se edita por separado
   Nombre, apellido, correo, contraseña, foto, avatar y compañero.
   Cada fila tiene su botón "Editar", se abre en el mismo lugar y se guarda sola.
   ============================================================ */
(function () {
  'use strict';

  const cont = document.getElementById('filasCuenta');
  if (!cont || !window.SapiensAuth) return;

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const usuario = () => SapiensAuth.getUser() || {};
  const esGoogle = () => usuario().provider === 'google';
  const compañeros = () => (window.SapiensCompanions ? SapiensCompanions.list() : []);
  const aviso = (t) => { if (window.SapiensShell) SapiensShell.toast(t); };

  let abierto = null;          // id de la fila con el editor abierto
  let fotoNueva = null;        // archivo elegido para subir
  let urlVistaPrevia = null;

  /* ---------- descripción de las filas ---------- */
  const tipoFoto = () => {
    const f = usuario().fotoUrl;
    if (!f) return 'Tus iniciales';
    if (/^img\/companions\//.test(f)) return 'Un avatar de la plataforma';
    return 'Foto subida';
  };
  const compActual = () => (window.SapiensCompanions ? SapiensCompanions.getSelected() : null);

  const FILAS = [
    { id: 'nombre', icono: 'fa-user', etiqueta: 'Nombre', valor: () => esc(usuario().firstName || '—'), editable: () => true },
    { id: 'apellido', icono: 'fa-user-tag', etiqueta: 'Apellido', valor: () => esc(usuario().lastName || '—'), editable: () => true },
    { id: 'correo', icono: 'fa-envelope', etiqueta: 'Correo', valor: () => esc(usuario().email || '—') + (esGoogle() ? ' <small class="pe-nota">vinculado con Google</small>' : ''), editable: () => !esGoogle() },
    { id: 'contrasena', icono: 'fa-lock', etiqueta: 'Contraseña', valor: () => (esGoogle() ? '<small class="pe-nota">Entras con Google: no tienes contraseña</small>' : '••••••••'), editable: () => !esGoogle() },
    { id: 'foto', icono: 'fa-camera', etiqueta: 'Foto de perfil', valor: () => '<img class="pe-mini" src="' + esc(usuario().avatar) + '" alt=""> ' + esc(tipoFoto()), editable: () => true },
    { id: 'avatar', icono: 'fa-face-smile', etiqueta: 'Avatar', valor: () => (/^img\/companions\//.test(usuario().fotoUrl || '') ? 'Elegido de la plataforma' : 'Ninguno elegido'), editable: () => true },
    { id: 'companero', icono: 'fa-paw', etiqueta: 'Compañero', valor: () => { const c = compActual(); return c ? '<img class="pe-mini" src="' + esc(c.img) + '" alt=""> ' + esc(c.name) : 'Sin elegir'; }, editable: () => true },
    { id: 'grado', icono: 'fa-graduation-cap', etiqueta: 'Grado', valor: () => { const g = usuario().grade || localStorage.getItem('sapiens_grade'); return g ? g + '°' : '—'; }, especial: 'grado' },
    { id: 'desde', icono: 'fa-calendar', etiqueta: 'Miembro desde', valor: () => esc(usuario().memberSince || '—') },
    { id: 'acceso', icono: 'fa-clock', etiqueta: 'Último acceso', valor: () => (usuario().lastAccess ? esc(new Date(usuario().lastAccess).toLocaleString('es-CO', { dateStyle: 'long', timeStyle: 'short' })) : '—') },
  ];

  /* ---------- dibujar las filas ---------- */
  function pintar() {
    cont.innerHTML = FILAS.map((f) => {
      let boton = '';
      if (f.especial === 'grado') boton = '<button type="button" class="btn-mini pe-editar" data-cambiar-grado><i class="fa-solid fa-repeat"></i> Cambiar</button>';
      else if (f.editable && f.editable()) boton = '<button type="button" class="btn-mini pe-editar" data-editar="' + f.id + '" aria-expanded="false" aria-controls="pe-ed-' + f.id + '"><i class="fa-solid fa-pen"></i> Editar</button>';
      return '<div class="pe-fila" data-id="' + f.id + '">' +
        '<div class="account-row"><span class="label"><i class="fa-solid ' + f.icono + '"></i> ' + f.etiqueta + '</span>' +
        '<span class="pe-der"><span class="value">' + f.valor() + '</span>' + boton + '</span></div>' +
        '<div class="pe-editor" id="pe-ed-' + f.id + '" hidden></div></div>';
    }).join('');
  }

  /* ---------- editores ---------- */
  const acciones = (guardar) => '<div class="pe-acciones"><button type="submit" class="pe-btn">' + guardar + '</button><button type="button" class="pe-btn sec" data-cancelar>Cancelar</button></div><p class="pe-msg" role="alert" hidden></p>';
  const campo = (id, etiqueta, extra) => '<label for="' + id + '">' + etiqueta + '</label><input id="' + id + '" ' + extra + '>';

  const EDITORES = {
    nombre: () => ({
      html: campo('pe-nombre', 'Tu nombre', 'type="text" maxlength="80" required autocomplete="given-name" value="' + esc(usuario().firstName) + '"') + acciones('Guardar nombre'),
      leer: (f) => ({ name: f.querySelector('#pe-nombre').value.trim() }),
      validar: (c) => (c.name ? '' : 'Escribe tu nombre.'),
    }),
    apellido: () => ({
      html: campo('pe-apellido', 'Tu apellido', 'type="text" maxlength="80" required autocomplete="family-name" value="' + esc(usuario().lastName) + '"') + acciones('Guardar apellido'),
      leer: (f) => ({ lastName: f.querySelector('#pe-apellido').value.trim() }),
      validar: (c) => (c.lastName ? '' : 'Escribe tu apellido.'),
    }),
    correo: () => ({
      html: campo('pe-correo', 'Tu correo electrónico', 'type="email" maxlength="150" required autocomplete="email" value="' + esc(usuario().email) + '"') +
        '<p class="pe-ayuda">Con este correo entras a Sapiens Lumen y te llegan los avisos.</p>' + acciones('Guardar correo'),
      leer: (f) => ({ email: f.querySelector('#pe-correo').value.trim().toLowerCase() }),
      validar: (c) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email) ? '' : 'Escribe un correo válido.'),
    }),
    contrasena: () => ({
      html: campo('pe-actual', 'Contraseña actual', 'type="password" autocomplete="current-password" required') +
        campo('pe-nueva', 'Contraseña nueva (mínimo 6 caracteres)', 'type="password" minlength="6" autocomplete="new-password" required') +
        campo('pe-repite', 'Repite la contraseña nueva', 'type="password" autocomplete="new-password" required') + acciones('Cambiar contraseña'),
      leer: (f) => ({ password: f.querySelector('#pe-nueva').value, currentPassword: f.querySelector('#pe-actual').value, _repite: f.querySelector('#pe-repite').value }),
      validar: (c) => (!c.currentPassword ? 'Escribe tu contraseña actual.' : c.password.length < 6 ? 'La contraseña nueva debe tener al menos 6 caracteres.' : c.password !== c._repite ? 'Las dos contraseñas nuevas no coinciden.' : ''),
    }),
    foto: () => ({
      html: '<div class="avatar-editor"><img id="pe-vista" src="' + esc(usuario().avatar) + '" alt="Vista previa de tu foto">' +
        '<div class="avatar-actions"><label class="btn-mini" for="pe-archivo"><i class="fa-solid fa-camera"></i> Elegir una foto</label>' +
        '<input type="file" id="pe-archivo" accept="image/png,image/jpeg,image/webp" hidden>' +
        '<button type="button" class="btn-mini" data-iniciales><i class="fa-solid fa-rotate-left"></i> Usar mis iniciales</button>' +
        '<small>PNG, JPG o WEBP · máx. 2 MB</small></div></div>' + acciones('Guardar foto'),
      alAbrir: (f) => {
        f.querySelector('.pe-btn[type="submit"]').disabled = true;
        f.querySelector('#pe-archivo').addEventListener('change', (e) => {
          const archivo = e.target.files[0];
          const msg = f.querySelector('.pe-msg');
          msg.hidden = true;
          if (!archivo) return;
          if (!/^image\/(png|jpeg|webp)$/.test(archivo.type)) { e.target.value = ''; return mostrar(msg, 'Solo se aceptan imágenes PNG, JPG o WEBP.'); }
          if (archivo.size > 2 * 1024 * 1024) { e.target.value = ''; return mostrar(msg, 'La imagen pesa más de 2 MB.'); }
          if (urlVistaPrevia) URL.revokeObjectURL(urlVistaPrevia);
          fotoNueva = archivo;
          urlVistaPrevia = URL.createObjectURL(archivo);
          f.querySelector('#pe-vista').src = urlVistaPrevia;
          f.querySelector('.pe-btn[type="submit"]').disabled = false;
        });
        f.querySelector('[data-iniciales]').addEventListener('click', () => { fotoNueva = null; enviar(f, { fotoUrl: null }, 'Ahora usas tus iniciales'); });
      },
      subirFoto: true,
      validar: () => (fotoNueva ? '' : 'Elige una foto primero.'),
      leer: () => ({}),
    }),
    avatar: () => {
      const actual = usuario().fotoUrl || '';
      return {
        html: '<p class="pe-ayuda">Elige uno de los avatares de la plataforma:</p><div class="picker-grid small" role="listbox" aria-label="Avatares">' +
          compañeros().map((c) => '<button type="button" class="picker-item' + (actual === 'img/companions/' + c.id + '.png' ? ' selected' : '') + '" data-avatar="img/companions/' + c.id + '.png" title="' + esc(c.name) + '" role="option"><img src="' + esc(c.img) + '" alt="' + esc(c.name) + '"></button>').join('') + '</div>' +
          (actual ? '<button type="button" class="btn-mini" data-quitar><i class="fa-solid fa-trash"></i> Quitar avatar</button>' : '') + acciones('Guardar avatar'),
        alAbrir: (f) => {
          f.querySelector('.pe-btn[type="submit"]').disabled = true;
          const quitar = f.querySelector('[data-quitar]');
          if (quitar) quitar.addEventListener('click', () => enviar(f, { fotoUrl: null }, 'Avatar quitado: ahora usas tus iniciales'));
          f.querySelectorAll('[data-avatar]').forEach((b) => b.addEventListener('click', () => {
            f.querySelectorAll('[data-avatar]').forEach((x) => x.classList.toggle('selected', x === b));
            f.dataset.elegido = b.dataset.avatar;
            f.querySelector('.pe-btn[type="submit"]').disabled = false;
          }));
        },
        validar: (c, f) => (f.dataset.elegido ? '' : 'Elige un avatar.'),
        leer: (f) => ({ fotoUrl: f.dataset.elegido }),
      };
    },
    companero: () => {
      const actual = window.SapiensCompanions ? SapiensCompanions.getSelectedId() : null;
      return {
        html: '<p class="pe-ayuda">Tu compañero te acompaña mientras estudias:</p><div class="picker-grid" role="listbox" aria-label="Compañeros">' +
          compañeros().map((c) => '<button type="button" class="picker-item' + (c.id === actual ? ' selected' : '') + '" data-id="' + c.id + '" title="' + esc(c.name) + '" role="option"><img src="' + esc(c.img) + '" alt="' + esc(c.name) + '"><span>' + esc(c.name) + '</span></button>').join('') + '</div>' +
          (actual ? '<button type="button" class="btn-mini" data-quitar><i class="fa-solid fa-trash"></i> Quitar compañero</button>' : '') + acciones('Guardar compañero'),
        alAbrir: (f) => {
          f.dataset.elegido = actual || '';
          f.querySelector('.pe-btn[type="submit"]').disabled = true;
          const quitar = f.querySelector('[data-quitar]');
          if (quitar) quitar.addEventListener('click', () => enviar(f, { companionId: null }, 'Compañero quitado', EDITORES.companero()));
          f.querySelectorAll('[data-id]').forEach((b) => b.addEventListener('click', () => {
            f.querySelectorAll('[data-id]').forEach((x) => x.classList.toggle('selected', x === b));
            f.dataset.elegido = b.dataset.id;
            f.querySelector('.pe-btn[type="submit"]').disabled = b.dataset.id === actual;
          }));
        },
        validar: (c, f) => (f.dataset.elegido ? '' : 'Elige un compañero.'),
        leer: (f) => ({ companionId: f.dataset.elegido }),
        despues: (c) => { if (window.SapiensCompanions) { if (c.companionId) SapiensCompanions.setSelected(c.companionId); else SapiensCompanions.clearSelected(); } },
      };
    },
  };

  /* ---------- abrir / cerrar ---------- */
  function mostrar(msg, texto) { msg.textContent = texto; msg.hidden = !texto; }

  function cerrar() {
    if (!abierto) return;
    const fila = cont.querySelector('.pe-fila[data-id="' + abierto + '"]');
    if (fila) {
      const ed = fila.querySelector('.pe-editor');
      ed.hidden = true;
      ed.innerHTML = '';
      const b = fila.querySelector('[data-editar]');
      if (b) { b.setAttribute('aria-expanded', 'false'); b.focus(); }
    }
    if (urlVistaPrevia) { URL.revokeObjectURL(urlVistaPrevia); urlVistaPrevia = null; }
    fotoNueva = null;
    abierto = null;
  }

  function abrir(id) {
    if (abierto === id) return cerrar();
    cerrar();
    const def = EDITORES[id]();
    const fila = cont.querySelector('.pe-fila[data-id="' + id + '"]');
    const ed = fila.querySelector('.pe-editor');
    ed.innerHTML = '<form class="pe-form" novalidate>' + def.html + '</form>';
    ed.hidden = false;
    fila.querySelector('[data-editar]').setAttribute('aria-expanded', 'true');
    abierto = id;
    const form = ed.querySelector('form');
    if (def.alAbrir) def.alAbrir(form);
    form.querySelector('[data-cancelar]').addEventListener('click', cerrar);
    form.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); cerrar(); } });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const msg = form.querySelector('.pe-msg');
      const cambios = def.leer(form);
      const error = def.validar ? def.validar(cambios, form) : '';
      if (error) return mostrar(msg, error);
      delete cambios._repite;
      await enviar(form, cambios, 'Guardado ✔', def);
    });
    const primero = form.querySelector('input:not([type="file"]), .picker-item');
    if (primero) primero.focus();
  }

  /* ---------- guardar ---------- */
  async function enviar(form, cambios, textoOk, def) {
    const msg = form.querySelector('.pe-msg');
    const btn = form.querySelector('.pe-btn[type="submit"]');
    mostrar(msg, '');
    const original = btn.textContent;
    form.querySelectorAll('button').forEach((b) => { b.disabled = true; });
    btn.textContent = 'Guardando…';

    let r = { ok: true };
    if (abierto === 'foto' && fotoNueva) r = await SapiensAuth.uploadPhoto(fotoNueva);
    else r = await SapiensAuth.updateProfileRemote(cambios);

    form.querySelectorAll('button').forEach((b) => { b.disabled = false; });
    btn.textContent = original;
    if (!r.ok) return mostrar(msg, r.error);

    if (def && def.despues) def.despues(cambios);
    cerrar();
    refrescar();
    aviso(textoOk);
  }

  /* ---------- refrescar la página con los datos nuevos ---------- */
  function pintarCompanero() {
    const c = compActual();
    const tarjeta = document.getElementById('companionCard');
    if (!tarjeta) return;
    if (!c) { tarjeta.style.display = 'none'; return; }
    tarjeta.style.display = 'flex';
    const img = document.getElementById('profileCompanionImg');
    const nombre = document.getElementById('profileCompanionName');
    const desc = document.getElementById('profileCompanionDesc');
    if (img) { img.src = c.img; img.alt = c.name; }
    if (nombre) nombre.textContent = c.name;
    if (desc) desc.textContent = c.description || '';
  }

  function refrescar() {
    SapiensAuth.applyUserToUI();
    pintar();
    pintarCompanero();
  }

  /* ---------- eventos ---------- */
  cont.addEventListener('click', (e) => {
    const b = e.target.closest('[data-editar]');
    if (b) abrir(b.dataset.editar);
  });

  // El botón de arriba lleva directo a la tarjeta de datos
  document.getElementById('irAEditar')?.addEventListener('click', () => {
    document.getElementById('datosCuenta').scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (!abierto) abrir('nombre');
  });

  pintar();
  pintarCompanero();
})();
