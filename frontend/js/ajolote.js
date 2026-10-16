/* ============================================================
   Compañero del estudiante – ánimo y burbujas (antes Ajolote)
   Usa la mascota elegida en el registro. Maestro Cheddar y
   Quacky son independientes y se mantienen.
   ============================================================ */

const AJOLOTE_PHRASES = {
  idle: [
    '¡Tú puedes!',
    '¿Listo para el reto?',
    'Piensa bien…',
    '¡Vamos paso a paso!'
  ],
  happy: [
    '¡Genial!',
    '¡Muy bien!',
    '¡Exacto! 🌟',
    '¡Sigue así!',
    '¡Eso es!'
  ],
  celebrate: [
    '¡Eres increíble!',
    '¡Perfecto! 🎉',
    '¡Campeón!',
    '¡Wuju!'
  ],
  sad: [
    'Uy… casi',
    'No pasa nada',
    'Aprendemos juntos',
    'Ánimo…'
  ],
  oops: [
    '¡Ups!',
    'Esa no era…',
    'Vamos de nuevo',
    'Casi lo tenías'
  ],
  think: [
    'Hmm…',
    'Déjame pensar…',
    'Interesante…',
    '¿Cuál será?'
  ],
  encourage: [
    '¡Ánimo!',
    'Casi lo tienes',
    'Un intento más 💪',
    '¡Tú puedes!'
  ],
  wave: [
    '¡Hola!',
    '¡Bienvenido!',
    '¿Empezamos?',
    '¡Listo!'
  ],
  sick: [
    'Me siento mal…',
    'Necesito un descanso',
    'Te ayudo a repasar'
  ],
  sleep: [
    'Zzz…',
    'Un poquito de sueño…',
    'Descansemos un momento'
  ]
};

function _resolveCompanion() {
  let id = null;
  let name = 'Compañero';
  let img = '../img/companions/kiwi.png';

  try {
    if (window.SapiensCompanions) {
      const c = SapiensCompanions.getSelected();
      if (c) {
        id = c.id;
        name = c.name;
        img = c.img;
        return { id, name, img };
      }
    }
  } catch (_) {}

  try {
    const user = JSON.parse(localStorage.getItem('sapiens_user') || 'null');
    if (user && user.companionId && window.SAPIENS_COMPANIONS) {
      const c = SAPIENS_COMPANIONS.find(x => x.id === user.companionId);
      if (c) return { id: c.id, name: c.name, img: c.img };
    }
    id = localStorage.getItem('sapiens_companion');
    if (id && window.SAPIENS_COMPANIONS) {
      const c = SAPIENS_COMPANIONS.find(x => x.id === id);
      if (c) return { id: c.id, name: c.name, img: c.img };
    }
  } catch (_) {}

  return { id, name, img };
}

const SapiensAjolote = {
  _el: null,
  _bubble: null,
  _moodTimer: null,
  _img: null,
  _idleCycle: null,
  _companion: null,

  mount(container, opts = {}) {
    const host = typeof container === 'string'
      ? document.querySelector(container)
      : container;
    if (!host) return null;

    this._companion = _resolveCompanion();
    const displayName = opts.name || this._companion.name;
    const src = opts.src || this._companion.img;

    const wrap = document.createElement('div');
    wrap.className = 'ajolote-stage' + (opts.floating ? ' ajolote-exercise' : '') + (opts.hero ? ' ajolote-hero' : '');

    const nameTag = document.createElement('div');
    nameTag.className = 'mascot-nametag';
    nameTag.textContent = displayName;
    wrap.appendChild(nameTag);

    const bubble = document.createElement('div');
    bubble.className = 'ajolote-bubble';
    bubble.hidden = true;

    const char = document.createElement('div');
    char.className = 'ajolote-char';
    char.dataset.mood = opts.mood || 'idle';

    const img = document.createElement('img');
    img.src = src;
    img.alt = displayName;
    img.draggable = false;

    const sparkles = document.createElement('div');
    sparkles.className = 'ajolote-sparkles';
    sparkles.hidden = true;

    char.appendChild(sparkles);
    char.appendChild(img);
    wrap.appendChild(bubble);
    wrap.appendChild(char);
    host.appendChild(wrap);

    this._el = char;
    this._bubble = bubble;
    this._sparkles = sparkles;
    this._wrap = wrap;
    this._img = img;

    if (opts.phrase) this.say(opts.phrase);
    else if (opts.mood) this.setMood(opts.mood, { autoPhrase: true });

    if (opts.idleCycle === true) {
      this._startIdleCycle();
    }

    return wrap;
  },

  setMood(mood, opts = {}) {
    if (!this._el) return;
    this._el.dataset.mood = mood || 'idle';

    // Una sola imagen del compañero; el ánimo se expresa con CSS + frases
    if (this._img && this._companion) {
      const src = this._companion.img;
      if (this._img.getAttribute('src') !== src) {
        this._img.src = src;
      }
    }

    if (mood === 'celebrate') this._burstSparkles();
    else if (this._sparkles) this._sparkles.hidden = true;

    if (opts.phrase) this.say(opts.phrase);
    else if (opts.autoPhrase) this.say(this._randomPhrase(mood));

    clearTimeout(this._moodTimer);
    if (opts.revertTo) {
      this._moodTimer = setTimeout(() => {
        this.setMood(opts.revertTo, { autoPhrase: false });
        if (this._bubble) this._bubble.hidden = true;
      }, opts.duration || 2200);
    }
  },

  say(text) {
    if (!this._bubble || !text) return;
    this._bubble.textContent = text;
    this._bubble.hidden = false;
    this._bubble.style.animation = 'none';
    void this._bubble.offsetWidth;
    this._bubble.style.animation = '';
  },

  hideBubble() {
    if (this._bubble) this._bubble.hidden = true;
  },

  reactCorrect() {
    const mood = Math.random() > 0.4 ? 'happy' : 'celebrate';
    this.setMood(mood, { autoPhrase: true, revertTo: 'idle', duration: 2200 });
  },

  reactWrong() {
    this.setMood('oops', { autoPhrase: true, revertTo: 'encourage', duration: 1800 });
    setTimeout(() => {
      if (this._el && this._el.dataset.mood === 'encourage') {
        this.setMood('encourage', { autoPhrase: true, revertTo: 'idle', duration: 2000 });
      }
    }, 1800);
  },

  reactGameOver() {
    this.setMood('sick', { autoPhrase: true });
  },

  _randomPhrase(mood) {
    const list = AJOLOTE_PHRASES[mood] || AJOLOTE_PHRASES.idle;
    return list[Math.floor(Math.random() * list.length)];
  },

  _burstSparkles() {
    if (!this._sparkles) return;
    this._sparkles.hidden = false;
    this._sparkles.innerHTML = '';
    for (let i = 0; i < 6; i++) {
      const s = document.createElement('span');
      s.textContent = ['✨', '⭐', '🌟'][i % 3];
      s.style.left = (10 + Math.random() * 80) + '%';
      s.style.animationDelay = (Math.random() * 0.4) + 's';
      this._sparkles.appendChild(s);
    }
  },

  _startIdleCycle() {
    clearInterval(this._idleCycle);
    this._idleCycle = setInterval(() => {
      if (!this._el) return;
      const moods = ['idle', 'wave', 'think', 'encourage'];
      const m = moods[Math.floor(Math.random() * moods.length)];
      this.setMood(m, { autoPhrase: true, revertTo: 'idle', duration: 2500 });
    }, 8000);
  }
};

window.SapiensAjolote = SapiensAjolote;
window.SapiensKiwi = SapiensAjolote;
window.SapiensCompanion = SapiensAjolote;
