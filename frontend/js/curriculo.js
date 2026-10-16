/* ============================================================
   Sapiens Lumen – Currículo por grado (asignaturas y temas desde la API)
   ============================================================ */

/* Cómo se ve cada asignatura. La clave la entrega el servidor. */
const AREA_UI = {
  matematicas:        { nombre: 'Matemáticas',                     icon: 'fa-calculator',    color: '#FFA726', desc: 'Números, álgebra, geometría, funciones y estadística.' },
  lenguaje:           { nombre: 'Lenguaje',                        icon: 'fa-book',          color: '#9CCC65', desc: 'Lectura, escritura, literatura y comunicación.' },
  ciencias_naturales: { nombre: 'Ciencias Naturales',              icon: 'fa-flask',         color: '#66BB6A', desc: 'Biología, química y física para entender la naturaleza.' },
  ciencias_sociales:  { nombre: 'Ciencias Sociales',               icon: 'fa-earth-americas', color: '#29B6F6', desc: 'Historia, geografía, democracia y ciudadanía.' },
  ingles:             { nombre: 'Inglés',                          icon: 'fa-comments',      color: '#4FC3F7', desc: 'Vocabulario, gramática y comunicación en inglés.' },
  tecnologia:         { nombre: 'Tecnología e Informática',        icon: 'fa-laptop-code',   color: '#2E7D32', desc: 'Tecnología, computación y pensamiento computacional.' },
  fisica:             { nombre: 'Física',                          icon: 'fa-atom',          color: '#7E57C2', desc: 'Movimiento, energía, ondas, electricidad y calor.' },
  quimica:            { nombre: 'Química',                         icon: 'fa-vial',          color: '#EC407A', desc: 'La materia, las reacciones y la química del carbono.' },
  economia_politica:  { nombre: 'Ciencias Económicas y Políticas', icon: 'fa-scale-balanced', color: '#FF7043', desc: 'Economía, Estado, democracia y ciudadanía.' },
  filosofia:          { nombre: 'Filosofía',                       icon: 'fa-lightbulb',     color: '#8D6E63', desc: 'Pensamiento, lógica, ética y conocimiento.' }
};

const HECHOS_KEY = 'sapiens_temas_hechos';   // { idTema: idArea }
const ULTIMO_KEY = 'sapiens_ultimo_curso';   // { areaId, grado, clave }

const SapiensCurriculo = {
  /* Colores, icono y descripción de una asignatura (con valores por defecto) */
  visual(clave, nombreServidor) {
    return AREA_UI[clave] || {
      nombre: nombreServidor || 'Asignatura', icon: 'fa-book-open', color: '#2E7D32', desc: ''
    };
  },

  /* Grado del estudiante (6 a 11) o null */
  gradoActual() {
    try {
      const user = JSON.parse(localStorage.getItem('sapiens_user') || 'null');
      const g = parseInt((user && user.grade) || localStorage.getItem('sapiens_grade'), 10);
      return g >= 6 && g <= 11 ? g : null;
    } catch {
      return null;
    }
  },

  /* Asignaturas que se ven en un grado → { ok, data:{ grado, areas } } */
  areas(grado) {
    return SapiensAuth._api('/curriculo/areas?grado=' + encodeURIComponent(grado));
  },

  /* Temas de una asignatura en un grado → { ok, data:{ grado, area, temas } } */
  temas(areaId, grado) {
    return SapiensAuth._api('/curriculo/temas?area=' + encodeURIComponent(areaId) + '&grado=' + encodeURIComponent(grado));
  },

  /* Un tema con su asignatura → { ok, data:{ tema, area } } */
  tema(id) {
    return SapiensAuth._api('/curriculo/temas/' + encodeURIComponent(id));
  },

  /* Las claves del navegador llevan el id de la cuenta: cada cuenta guarda y lee SOLO lo suyo */
  _clave(base) {
    let id = 'anon';
    try { const u = JSON.parse(localStorage.getItem('sapiens_user') || 'null'); if (u && u.id) id = u.id; } catch (_) {}
    return base + '@u' + id;
  },

  /* Trae de la base de datos los temas que ESTA cuenta ya domina y los suma a las marcas locales.
     Se llama antes de pintar los cursos, para que las marcas sean siempre las de la cuenta actual. */
  async cargarHechos() {
    if (!window.SapiensAuth) return;
    const r = await SapiensAuth.api('/progreso/hechos');
    if (!r.ok) return;
    const h = this._hechos();
    r.data.temas.forEach(t => { h[String(t.idTema)] = t.idArea; });
    try { localStorage.setItem(this._clave(HECHOS_KEY), JSON.stringify(h)); } catch (_) {}
  },

  /* ----- temas estudiados (de esta cuenta) ----- */
  _hechos() {
    try { return JSON.parse(localStorage.getItem(this._clave(HECHOS_KEY)) || '{}') || {}; } catch { return {}; }
  },
  esTemaHecho(idTema) {
    return Object.prototype.hasOwnProperty.call(this._hechos(), String(idTema));
  },
  marcarTemaHecho(idTema, idArea) {
    const h = this._hechos();
    h[String(idTema)] = idArea;
    localStorage.setItem(this._clave(HECHOS_KEY), JSON.stringify(h));
  },
  temasHechosDeArea(idArea) {
    return Object.values(this._hechos()).filter(a => String(a) === String(idArea)).length;
  },

  /* ----- último curso visitado (para "Continuar aprendiendo") ----- */
  guardarUltimo(info) {
    try { localStorage.setItem(this._clave(ULTIMO_KEY), JSON.stringify(info)); } catch (_) {}
  },
  ultimo() {
    try { return JSON.parse(localStorage.getItem(this._clave(ULTIMO_KEY)) || 'null'); } catch { return null; }
  },

  /* Escapa texto antes de ponerlo en el HTML */
  esc(texto) {
    const d = document.createElement('div');
    d.textContent = texto == null ? '' : String(texto);
    return d.innerHTML;
  }
};

window.SapiensCurriculo = SapiensCurriculo;
