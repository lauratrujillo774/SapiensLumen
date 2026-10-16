/* ============================================================
   Maestro Cheddar (Foca) – Tutor IA
   ============================================================ */

const FOCA_PHRASES = {
  idle: [
    '¡Pregúntame lo que quieras!',
    'Estoy aquí para ayudarte 🧀',
    '¿Qué necesitas saber?'
  ],
  happy: [
    '¡Genial!',
    '¡Así se hace!',
    '¡Exacto! 🌟'
  ],
  celebrate: [
    '¡Eres un crack!',
    '¡Perfecto! 🎉'
  ],
  sad: [
    'No te preocupes',
    'Aprendemos de los errores'
  ],
  oops: [
    'Mmm… vamos a revisarlo',
    'No pasa nada'
  ],
  think: [
    'Déjame pensarlo…',
    'Hmm…',
    'Analizando…'
  ],
  encourage: [
    '¡Tú puedes!',
    'Estoy contigo 🧀',
    'Vamos paso a paso'
  ],
  wave: [
    '¡Hola! Soy el Maestro Cheddar',
    '¡Bienvenido al Tutor IA!'
  ]
};

const SapiensFoca = {
  _el: null,
  _bubble: null,
  _moodTimer: null,
  _img: null,

  mount(container, opts = {}) {
    const host = typeof container === 'string'
      ? document.querySelector(container)
      : container;
    if (!host) return null;

    const wrap = document.createElement('div');
    wrap.className = 'ajolote-stage' + (opts.hero ? ' ajolote-hero' : '');

    const nameTag = document.createElement('div');
    nameTag.className = 'mascot-nametag';
    nameTag.textContent = opts.name || 'Maestro Cheddar';
    wrap.appendChild(nameTag);

    const bubble = document.createElement('div');
    bubble.className = 'ajolote-bubble';
    bubble.hidden = true;

    const char = document.createElement('div');
    char.className = 'ajolote-char';
    char.dataset.mood = opts.mood || 'idle';

    const img = document.createElement('img');
    img.src = '../img/foca.png';
    img.alt = 'Maestro Cheddar';
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

    return wrap;
  },

  setMood(mood, opts = {}) {
    if (!this._el) return;
    this._el.dataset.mood = mood || 'idle';

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

  _randomPhrase(mood) {
    const list = FOCA_PHRASES[mood] || FOCA_PHRASES.idle;
    return list[Math.floor(Math.random() * list.length)];
  },

  _burstSparkles() {
    if (!this._sparkles) return;
    this._sparkles.hidden = false;
    this._sparkles.innerHTML = '';
    const emojis = ['⭐', '✨', '🌟', '💫', '🧀'];
    for (let i = 0; i < 6; i++) {
      const s = document.createElement('span');
      s.textContent = emojis[i % emojis.length];
      s.style.left = 20 + Math.random() * 60 + '%';
      s.style.top = 20 + Math.random() * 50 + '%';
      s.style.setProperty('--sx', (Math.random() * 80 - 40) + 'px');
      s.style.setProperty('--sy', (-40 - Math.random() * 50) + 'px');
      s.style.animationDelay = (i * 0.05) + 's';
      this._sparkles.appendChild(s);
    }
    setTimeout(() => { if (this._sparkles) this._sparkles.hidden = true; }, 1000);
  }
};

window.SapiensFoca = SapiensFoca;
