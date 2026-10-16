/* ============================================================
   Sapiens Lumen – Sistema de autenticación (API + MySQL; localStorage guarda la sesión)
   ============================================================ */

const AUTH_KEY = 'sapiens_user';
const USERS_KEY = 'sapiens_users';
const TOKEN_KEY = 'sapiens_token';

/* Dirección de la API: si la página la sirve el backend (puerto 7000 o internet) se usa /api;
   si se abre con Live Server o doble clic, se apunta a localhost:7000 */
const _esLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
const _servidoPorBackend = window.location.protocol !== 'file:' && (!_esLocal || ['7000', '7100'].includes(window.location.port));
const API_ORIGIN = _servidoPorBackend ? '' : 'http://localhost:7000';
const API_BASE = _servidoPorBackend ? '/api' : 'http://localhost:7000/api';

/* Un navegador puede ser usado por varias cuentas. Lo que es de UNA persona (grado, compañero,
   avances de versiones anteriores...) nunca debe pasar a otra cuenta. */
const OWNER_KEY = 'sapiens_owner';
const DATOS_PERSONALES = [
  'sapiens_grade', 'sapiens_companion', 'sapiens_lectura', 'sapiens_settings',
  'totalXp', 'streak', 'lastStudyDate', 'sapiens_temas_hechos', 'sapiens_ultimo_curso', 'sapiens_users'
];

const SapiensAuth = {
  /* Deja en el navegador solo datos de la cuenta que está usando la página.
     Si antes la usó OTRA cuenta, borra lo personal de esa otra. Devuelve true si hubo cambio de dueño. */
  _asegurarDueno(idUsuario) {
    // datos de versiones anteriores, que no se guardaban por cuenta: no se conservan nunca
    ['sapiens_temas_hechos', 'sapiens_ultimo_curso', 'sapiens_settings', 'sapiens_users'].forEach(k => localStorage.removeItem(k));
    const dueno = localStorage.getItem(OWNER_KEY);
    if (dueno === String(idUsuario)) return false;
    DATOS_PERSONALES.forEach(k => localStorage.removeItem(k));
    Object.keys(localStorage).filter(k => k.indexOf('progress_') === 0).forEach(k => localStorage.removeItem(k));
    localStorage.setItem(OWNER_KEY, String(idUsuario));
    return true;
  },

  /* Obtener usuario actual (null si no hay sesión) */
  getUser() {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  /* ¿Hay sesión activa? Solo cuenta si viene del servidor (usuario + token).
     Las sesiones antiguas de la versión local se descartan. */
  isLoggedIn() {
    if (this.getUser() && !localStorage.getItem(TOKEN_KEY)) {
      localStorage.removeItem(AUTH_KEY);
      return false;
    }
    return !!this.getUser();
  },

  /* Convierte foto_url (como se guarda en la BD) en una dirección que el navegador pueda abrir */
  _resolverFoto(fotoUrl, nombre) {
    if (!fotoUrl) {
      return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(nombre) + '&background=2E7D32&color=fff';
    }
    if (/^https?:\/\//.test(fotoUrl)) return fotoUrl;            // foto de Google
    if (fotoUrl.startsWith('/uploads/') || fotoUrl.startsWith('/api/fotos/')) return API_ORIGIN + fotoUrl; // foto subida
    return '../' + fotoUrl;                                          // avatar de la plataforma
  },

  /* Convierte la respuesta del servidor en el usuario de sesión que usa el resto del front */
  _sesionDesdeServidor({ token, usuario }, proveedor) {
    const prefs = usuario.preferencias || {};
    const nombreCompleto = (usuario.nombre + ' ' + (usuario.apellido || '')).trim();
    const fecha = usuario.fecha_registro ? new Date(usuario.fecha_registro) : new Date();
    const session = {
      id: usuario.id,
      name: nombreCompleto,
      firstName: usuario.nombre,
      lastName: usuario.apellido || '',
      email: usuario.correo,
      avatar: this._resolverFoto(usuario.foto_url, nombreCompleto),
      fotoUrl: usuario.foto_url || null,
      memberSince: fecha.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }),
      createdAt: fecha.toISOString(),
      lastAccess: usuario.ultimo_acceso || null,
      grade: prefs.grade || null,
      companionId: prefs.companionId || null,
      provider: proveedor || 'correo'
    };
    this._asegurarDueno(usuario.id);   // si entró otra cuenta, se borra lo que era de la anterior
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    localStorage.setItem(TOKEN_KEY, token);
    // grado y compañero salen SIEMPRE de esta cuenta: si no tiene, no se hereda el de otra
    if (session.grade) localStorage.setItem('sapiens_grade', String(session.grade)); else localStorage.removeItem('sapiens_grade');
    if (session.companionId) localStorage.setItem('sapiens_companion', session.companionId); else localStorage.removeItem('sapiens_companion');
    return session;
  },

  /* Llamada a la API. Devuelve { ok, data } o { ok:false, error } */
  async _api(ruta, opciones = {}) {
    try {
      const resp = await fetch(API_BASE + ruta, {
        method: opciones.method || 'GET',
        headers: Object.assign({ 'Content-Type': 'application/json' }, opciones.headers),
        body: opciones.body ? JSON.stringify(opciones.body) : undefined
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) return { ok: false, status: resp.status, data, error: data.message || 'Ocurrió un error. Intenta de nuevo.' };
      return { ok: true, data };
    } catch {
      return { ok: false, error: 'No se pudo conectar con el servidor. ¿Está encendido el backend?' };
    }
  },

  /* Llamada a la API con la sesión del usuario (agrega el token solo).
     Si el servidor dice que la sesión venció, cierra la sesión. */
  async api(ruta, opciones = {}) {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return { ok: false, status: 401, error: 'Tu sesión venció. Inicia sesión de nuevo.' };
    const r = await this._api(ruta, Object.assign({}, opciones, {
      headers: Object.assign({ Authorization: 'Bearer ' + token }, opciones.headers)
    }));
    if (!r.ok && r.status === 401) {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(TOKEN_KEY);
      window.location.href = '../auth/login.html';
    }
    return r;
  },

  /* Elimina la cuenta y todos sus datos (no se puede deshacer) */
  async deleteAccount({ password, confirm }) {
    const r = await this.api('/auth/cuenta', { method: 'DELETE', body: { contrasena: password, confirmar: confirm } });
    if (!r.ok) return r;
    ['sapiens_user', 'sapiens_token', OWNER_KEY].concat(DATOS_PERSONALES).forEach(k => localStorage.removeItem(k));
    return { ok: true };
  },

  /* Registrar nuevo usuario en la base de datos */
  async register({ name, lastName, email, password, grade, companionId }) {
    if (!name || !lastName || !email || !password) {
      return { ok: false, error: 'Todos los campos son obligatorios.' };
    }
    const g = parseInt(grade, 10);
    const preferencias = {};
    if (g >= 6 && g <= 11) preferencias.grade = g;
    if ((companionId || '').trim()) preferencias.companionId = companionId.trim();

    const r = await this._api('/auth/registro', {
      method: 'POST',
      body: { nombre: name.trim(), apellido: lastName.trim(), correo: email, contrasena: password, preferencias }
    });
    if (!r.ok) return r;
    return { ok: true, user: this._sesionDesdeServidor(r.data) };
  },

  /* Iniciar sesión con correo y contraseña */
  async login({ email, password }) {
    const r = await this._api('/auth/login', {
      method: 'POST',
      body: { correo: email, contrasena: password }
    });
    if (!r.ok) return r;
    return { ok: true, user: this._sesionDesdeServidor(r.data) };
  },

  /* Iniciar sesión / registrarse con Google (credential = ID token que entrega Google) */
  async loginWithGoogle(credential) {
    const r = await this._api('/auth/google', { method: 'POST', body: { credential } });
    if (!r.ok) return r;
    return { ok: true, user: this._sesionDesdeServidor(r.data, 'google') };
  },

  /* Dibuja el botón oficial de Google dentro de #contenedorId */
  async initGoogle(contenedorId, alExito, alError) {
    const cont = document.getElementById(contenedorId);
    if (!cont) return;
    const cfg = await this._api('/auth/config');
    const clientId = cfg.ok && cfg.data.googleClientId;
    if (!clientId) {
      cont.innerHTML = '<p class="google-aviso">Google aún no está configurado (falta GOOGLE_CLIENT_ID en el servidor).</p>';
      return;
    }
    await new Promise((resolve) => {
      if (window.google && window.google.accounts) return resolve();
      const s = document.createElement('script');
      s.src = 'https://accounts.google.com/gsi/client';
      s.async = true;
      s.onload = resolve;
      s.onerror = resolve;
      document.head.appendChild(s);
    });
    if (!(window.google && window.google.accounts)) {
      cont.innerHTML = '<p class="google-aviso">No se pudo cargar Google. Revisa tu conexión.</p>';
      return;
    }
    google.accounts.id.initialize({
      client_id: clientId,
      callback: async (resp) => {
        const result = await this.loginWithGoogle(resp.credential);
        if (result.ok) alExito(result.user);
        else alError(result.error);
      }
    });
    const oscuro = document.documentElement.getAttribute('data-theme') === 'dark';
    google.accounts.id.renderButton(cont, {
      theme: oscuro ? 'filled_black' : 'outline',
      size: 'large',
      shape: 'pill',
      text: 'continue_with',
      width: Math.min(cont.clientWidth || 320, 400),
      locale: 'es'
    });
  },

  /* Edita en la BD los campos personales editables del usuario */
  async updateProfileRemote(cambios) {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return { ok: false, error: 'Tu sesión venció. Inicia sesión de nuevo.' };

    const body = {};
    if (cambios.name !== undefined) body.nombre = cambios.name;
    if (cambios.lastName !== undefined) body.apellido = cambios.lastName;
    if (cambios.email !== undefined) body.correo = cambios.email;
    if (cambios.password) {
      body.contrasena = cambios.password;
      body.contrasena_actual = cambios.currentPassword || '';
    }
    if (cambios.fotoUrl !== undefined) body.foto_url = cambios.fotoUrl;
    const preferencias = {};
    if (cambios.grade) preferencias.grade = parseInt(cambios.grade, 10);
    if (cambios.companionId) preferencias.companionId = cambios.companionId;
    if (Object.keys(preferencias).length) body.preferencias = preferencias;

    const r = await this._api('/auth/perfil', {
      method: 'PATCH',
      headers: { Authorization: 'Bearer ' + token },
      body
    });
    if (!r.ok) return r;
    return { ok: true, user: this._sesionDesdeServidor({ token, usuario: r.data.usuario }, (this.getUser() || {}).provider) };
  },

  /* Sube una foto de perfil (PNG, JPG o WEBP, máx. 2 MB) */
  async uploadPhoto(archivo) {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return { ok: false, error: 'Tu sesión venció. Inicia sesión de nuevo.' };
    try {
      const datos = new FormData();
      datos.append('foto', archivo);
      const resp = await fetch(API_BASE + '/auth/foto', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + token },
        body: datos
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) return { ok: false, error: data.message || 'No se pudo subir la foto.' };
      return { ok: true, user: this._sesionDesdeServidor({ token, usuario: data.usuario }, (this.getUser() || {}).provider) };
    } catch {
      return { ok: false, error: 'No se pudo conectar con el servidor.' };
    }
  },

  /* Guarda en la base de datos las preferencias (grado, compañero...) */
  syncPreferencias(prefs) {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return;
    this._api('/auth/preferencias', {
      method: 'PATCH',
      headers: { Authorization: 'Bearer ' + token },
      body: prefs
    });
  },

  /* Cerrar sesión */
  logout() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('sapiens_grade');
    localStorage.removeItem('sapiens_companion');
    window.location.href = '../auth/login.html';
  },

  /* Actualizar perfil */
  updateProfile({ name, email, password, avatar, grade }) {
    const current = this.getUser();
    if (!current) return { ok: false, error: 'No hay sesión activa.' };

    const users = this._getUsers();
    let idx = users.findIndex(u => u.id === current.id);

    // Usuarios de Google / sesión sin registro en lista: actualizar solo sesión
    if (idx === -1) {
      const session = { ...current };
      if (name) {
        session.name = name.trim();
        session.avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(session.name)}&background=2E7D32&color=fff`;
      }
      if (email) session.email = email.trim().toLowerCase();
      if (avatar) session.avatar = avatar;
      if (grade !== undefined && grade !== null && grade !== '') {
        const g = parseInt(grade, 10);
        if (g >= 6 && g <= 11) {
          session.grade = g;
          localStorage.setItem('sapiens_grade', String(g));
        }
      }
      localStorage.setItem(AUTH_KEY, JSON.stringify(session));
      return { ok: true, user: session };
    }

    if (name) {
      users[idx].name = name.trim();
      users[idx].avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(users[idx].name)}&background=2E7D32&color=fff`;
    }
    if (email) {
      const emailLower = email.trim().toLowerCase();
      if (users.some(u => u.email === emailLower && u.id !== current.id)) {
        return { ok: false, error: 'Ese correo ya está en uso.' };
      }
      users[idx].email = emailLower;
    }
    if (password) {
      if (password.length < 6) return { ok: false, error: 'La contraseña debe tener al menos 6 caracteres.' };
      users[idx].password = password;
    }
    if (avatar) users[idx].avatar = avatar;
    if (grade !== undefined && grade !== null && grade !== '') {
      const g = parseInt(grade, 10);
      if (g >= 6 && g <= 11) {
        users[idx].grade = g;
        localStorage.setItem('sapiens_grade', String(g));
      }
    }

    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    const session = { ...users[idx] };
    delete session.password;
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    return { ok: true, user: session };
  },

  /* Proteger páginas: redirige a login si no hay sesión */
  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = '../auth/login.html';
      return false;
    }
    return true;
  },

  /* Rellenar elementos de UI con datos del usuario */
  applyUserToUI() {
    const user = this.getUser();
    if (!user) return;

    document.querySelectorAll('.profile span, .header-name, [data-user-name]').forEach(el => {
      el.textContent = user.name.split(' ')[0] || user.name;
    });
    document.querySelectorAll('.profile img, [data-user-avatar]').forEach(el => {
      el.src = user.avatar;
      el.alt = user.name;
    });
    document.querySelectorAll('[data-user-fullname]').forEach(el => {
      el.textContent = user.name;
    });
    document.querySelectorAll('[data-user-email]').forEach(el => {
      el.textContent = user.email;
    });
    document.querySelectorAll('[data-user-since]').forEach(el => {
      el.textContent = user.memberSince || '—';
    });
    const grade = user.grade || localStorage.getItem('sapiens_grade');
    document.querySelectorAll('[data-user-grade]').forEach(el => {
      el.textContent = grade ? (grade + '°') : '—';
    });
  },

  /* Inicializar listeners de logout y menú */
  initPage() {
    // Proteger (excepto login/register)
    const path = window.location.pathname.split('/').pop() || '';
    if (path !== 'login.html' && path !== 'register.html') {
      if (!this.requireAuth()) return;
      // por si la sesión cambió de cuenta en otra pestaña: nunca se mezclan datos de dos cuentas
      const actual = this.getUser();
      if (actual && actual.id) this._asegurarDueno(actual.id);
      this.applyUserToUI();
      // Pedir grado si falta (difficulty.js también lo hace; por si auth carga primero)
      try {
        const u = this.getUser();
        if (u && !u.grade && !localStorage.getItem('sapiens_grade') && window.SapiensDifficulty) {
          SapiensDifficulty.showGradePicker();
        }
      } catch (_) {}
    }

    // Logout buttons
    document.querySelectorAll('.logout, [data-logout]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.logout();
      });
    });

    // Sidebar toggle (único handler – evita doble toggle que deja overlay sin menú)
    const toggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const closeBtn = document.querySelector('.sidebar-close');

    function openSidebar() {
      if (!sidebar) return;
      sidebar.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.classList.add('sidebar-open');
    }

    function closeSidebar() {
      if (!sidebar) return;
      sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.classList.remove('sidebar-open');
    }

    function toggleSidebar() {
      if (!sidebar) return;
      if (sidebar.classList.contains('open')) closeSidebar();
      else openSidebar();
    }

    if (toggle && sidebar && !toggle.dataset.bound) {
      toggle.dataset.bound = '1';
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSidebar();
      });
    }

    if (closeBtn && !closeBtn.dataset.bound) {
      closeBtn.dataset.bound = '1';
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeSidebar();
      });
    }

    if (overlay && !overlay.dataset.bound) {
      overlay.dataset.bound = '1';
      overlay.addEventListener('click', () => closeSidebar());
    }

    // Cerrar sidebar al hacer clic en un link (móvil)
    if (sidebar) {
      sidebar.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          if (window.innerWidth <= 1100) closeSidebar();
        });
      });
    }
  },

  _getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    } catch {
      return [];
    }
  }
};

window.SapiensAuth = SapiensAuth;

// Auto-init when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => SapiensAuth.initPage());
} else {
  SapiensAuth.initPage();
}
