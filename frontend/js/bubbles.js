/**
 * Efectos ambientales seleccionables: peces, aurora boreal o apagado.
 */
(function () {
  if (window.SapiensAmbientEffects) return;
  window.SapiensAmbientEffects = true;

  function initializeEffects() {
  const STORAGE_KEY = 'sapiens-ambient-fx';
  const MODE_KEY = 'sapiens-ambient-mode';
  const LAST_MODE_KEY = 'sapiens-ambient-last-mode';
  const BUBBLE_COUNT = 20;
  const VALID_MODES = ['fish', 'calm'];

  const FISH_DEFS = [
    { src: '../img/fish/blue_tang.png',        facesRight: true,  wMin: 100, wMax: 140 },
    { src: '../img/fish/butterfly_stripe.png', facesRight: true,  wMin: 95,  wMax: 130 },
    { src: '../img/fish/butterfly_copper.png', facesRight: true,  wMin: 90,  wMax: 125 },
    { src: '../img/fish/clownfish.png',        facesRight: false, wMin: 75,  wMax: 105 },
    { src: '../img/fish/clownfish.png',        facesRight: false, wMin: 65,  wMax: 90 },
    { src: '../img/fish/yellow_school.png',    facesRight: false, wMin: 160, wMax: 220 },
    { src: '../img/fish/yellow_school.png',    facesRight: false, wMin: 130, wMax: 180 },
    { src: '../img/fish/blue_tang.png',        facesRight: true,  wMin: 85,  wMax: 115 },
    { src: '../img/fish/butterfly_stripe.png', facesRight: true,  wMin: 80,  wMax: 110 },
    { src: '../img/fish/clownfish.png',        facesRight: false, wMin: 70,  wMax: 95 },
  ];

  /* —— Estado —— */
  const storedMode = localStorage.getItem(MODE_KEY);
  let lastMode = VALID_MODES.includes(storedMode)
    ? storedMode
    : (VALID_MODES.includes(localStorage.getItem(LAST_MODE_KEY)) ? localStorage.getItem(LAST_MODE_KEY) : 'fish');
  let mode = VALID_MODES.includes(storedMode)
    ? storedMode
    : (localStorage.getItem(STORAGE_KEY) === 'off' ? 'off' : 'fish');
  let enabled = mode !== 'off';
  let running = false;
  let rafId = null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const layer = document.createElement('div');
  layer.className = 'bubbles-layer fish-mode';
  layer.setAttribute('aria-hidden', 'true');
  const auroraBackdrop = document.createElement('div');
  auroraBackdrop.className = 'aurora-backdrop';
  layer.appendChild(auroraBackdrop);
  const auroraCanvas = document.createElement('canvas');
  auroraCanvas.className = 'aurora-canvas';
  auroraCanvas.setAttribute('aria-hidden', 'true');
  layer.appendChild(auroraCanvas);
  const auroraContext = auroraCanvas.getContext('2d');
  let canvasWidth = 0;
  let canvasHeight = 0;
  let canvasScale = 1;
  document.body.prepend(layer);

  const bubbles = [];
  const fishes = [];

  const vw = () => window.innerWidth;
  const vh = () => window.innerHeight;

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  /* —— Botón flotante —— */
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'ambient-toggle';
  btn.setAttribute('aria-label', 'Desactivar efectos ambientales');
  btn.title = 'Activar o desactivar el efecto seleccionado';

  const controls = document.createElement('div');
  controls.className = 'ambient-controls';
  const menuToggle = document.createElement('button');
  menuToggle.type = 'button';
  menuToggle.className = 'ambient-menu-toggle';
  menuToggle.setAttribute('aria-label', 'Elegir efecto de fondo');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-controls', 'ambientEffectMenu');
  menuToggle.innerHTML = '<i class="fa-solid fa-chevron-up" aria-hidden="true"></i>';

  const menu = document.createElement('div');
  menu.className = 'ambient-menu';
  menu.id = 'ambientEffectMenu';
  menu.hidden = true;
  menu.setAttribute('role', 'group');
  menu.setAttribute('aria-label', 'Efectos de fondo');
  menu.innerHTML =
    '<span class="ambient-menu-title">Elige un ambiente</span>' +
    '<button class="ambient-choice" type="button" aria-pressed="false" data-mode="fish">' +
      '<i class="fa-solid fa-fish" aria-hidden="true"></i><span>Peces y burbujas</span></button>' +
    '<button class="ambient-choice" type="button" aria-pressed="false" data-mode="calm">' +
      '<i class="fa-solid fa-moon" aria-hidden="true"></i><span>Aurora boreal</span></button>' +
    '<button class="ambient-choice" type="button" aria-pressed="false" data-mode="off">' +
      '<i class="fa-solid fa-eye-slash" aria-hidden="true"></i><span>Sin efectos</span></button>';
  controls.appendChild(btn);
  controls.appendChild(menuToggle);
  controls.appendChild(menu);
  if (!document.querySelector('.bottom-nav')) controls.classList.add('no-bottom-nav');
  document.body.appendChild(controls);

  function updateButton() {
    btn.classList.toggle('is-off', !enabled);
    const icon = !enabled ? 'fa-eye-slash' : (mode === 'calm' ? 'fa-moon' : 'fa-fish');
    btn.innerHTML = '<i class="fa-solid ' + icon + '" aria-hidden="true"></i><span>Efectos ' + (enabled ? 'ON' : 'OFF') + '</span>';
    btn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    btn.setAttribute('aria-label', enabled ? 'Desactivar efectos ambientales' : 'Activar efectos ambientales');
    menu.querySelectorAll('[data-mode]').forEach(function (choice) {
      choice.setAttribute('aria-pressed', choice.dataset.mode === mode ? 'true' : 'false');
    });
  }

  function setMode(nextMode) {
    mode = VALID_MODES.includes(nextMode) || nextMode === 'off' ? nextMode : 'fish';
    enabled = mode !== 'off';
    if (enabled) {
      lastMode = mode;
      localStorage.setItem(LAST_MODE_KEY, mode);
    }
    localStorage.setItem(MODE_KEY, mode);
    localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off');
    layer.classList.toggle('fish-mode', mode === 'fish');
    layer.classList.toggle('aurora-mode', mode === 'calm');
    layer.style.display = enabled ? '' : 'none';
    updateButton();
    if (enabled && !running) {
      startLoop();
    } else if (!enabled && running && rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
      running = false;
    }
  }

  btn.addEventListener('click', function () {
    setMode(enabled ? 'off' : lastMode);
  });
  menuToggle.addEventListener('click', function () {
    const isOpen = !menu.hidden;
    menu.hidden = isOpen;
    menuToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  });
  menu.addEventListener('click', function (event) {
    const choice = event.target.closest('[data-mode]');
    if (!choice) return;
    setMode(choice.dataset.mode);
    menu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  });
  document.addEventListener('click', function (event) {
    if (!controls.contains(event.target)) {
      menu.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) {
      menu.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
  /* —— Crear elementos —— */
  function createBubble() {
    const el = document.createElement('div');
    el.className = 'soap-bubble';
    const size = random(16, 72);
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.opacity = String(random(0.5, 0.9));
    el.style.left = '0';
    el.style.top = '0';
    layer.appendChild(el);

    const bubble = {
      el,
      size,
      x: random(0, vw()),
      y: random(0, vh()),
      vx: random(-0.2, 0.2),
      vy: -random(0.12, 0.45),
      phase: random(0, Math.PI * 2),
      scrollOffset: 0,
      targetScroll: 0,
    };
    el.style.transform = 'translate3d(' + bubble.x + 'px,' + bubble.y + 'px,0)';
    return bubble;
  }

  function createFish(def) {
    const width = random(def.wMin, def.wMax);

    const wrap = document.createElement('div');
    wrap.className = 'fish-wrap';

    const img = document.createElement('img');
    img.className = 'swim-fish';
    img.src = def.src;
    img.alt = '';
    img.draggable = false;
    img.style.width = width + 'px';
    img.style.height = 'auto';
    img.style.setProperty('--wag-duration', random(0.4, 0.75).toFixed(2) + 's');

    wrap.appendChild(img);
    layer.appendChild(wrap);

    const dir = Math.random() > 0.5 ? 1 : -1;
    const speed = random(0.4, 1.1) * dir;

    const fish = {
      wrap,
      img,
      width,
      facesRight: def.facesRight,
      x: random(0, vw()),
      y: random(vh() * 0.18, vh() * 0.88),
      vx: speed,
      phase: random(0, Math.PI * 2),
      bobAmp: random(5, 13),
      bobSpeed: random(0.018, 0.042),
      scrollOffset: 0,
      targetScroll: 0,
    };
    const flip = def.facesRight ? (dir >= 0 ? 1 : -1) : (dir >= 0 ? -1 : 1);
    wrap.style.transform = 'translate3d(' + fish.x + 'px,' + fish.y + 'px,0) scaleX(' + flip + ')';
    return fish;
  }

  for (let i = 0; i < BUBBLE_COUNT; i++) bubbles.push(createBubble());
  FISH_DEFS.forEach(function (def) {
    fishes.push(createFish(def));
  });

  /* —— Scroll —— */
  let lastScrollY = window.scrollY || 0;
  let scrollVel = 0;

  window.addEventListener(
    'scroll',
    function () {
      if (!enabled || mode !== 'fish') return;
      const y = window.scrollY || 0;
      const dy = y - lastScrollY;
      lastScrollY = y;
      scrollVel += dy * 0.35;
      scrollVel = Math.max(-80, Math.min(80, scrollVel));
    },
    { passive: true }
  );

  window.addEventListener(
    'wheel',
    function (e) {
      if (!enabled || mode !== 'fish') return;
      scrollVel += e.deltaY * 0.08;
      scrollVel = Math.max(-80, Math.min(80, scrollVel));
    },
    { passive: true }
  );

  /* —— Loop —— */
  function tick() {
    if (!enabled || mode === 'off') {
      running = false;
      rafId = null;
      return;
    }

    const w = vw();
    const h = vh();
    const motionScale = reducedMotion.matches ? 0.35 : 1;

    if (mode === 'calm') {
      drawAurora(performance.now() * motionScale);
      rafId = requestAnimationFrame(tick);
      return;
    }

    scrollVel *= 0.92;
    if (Math.abs(scrollVel) < 0.05) scrollVel = 0;

    bubbles.forEach(function (b) {
      b.phase += 0.008 * motionScale;
      b.x += (b.vx + Math.sin(b.phase) * 0.14) * motionScale;
      b.y += b.vy * motionScale;

      b.targetScroll = -scrollVel * (0.35 + b.size / 130);
      b.scrollOffset += (b.targetScroll - b.scrollOffset) * 0.12;

      if (b.y + b.size < -30) {
        b.y = h + random(10, 70);
        b.x = random(0, w);
        b.vx = random(-0.2, 0.2);
      }
      if (b.y > h + 40) {
        b.y = -random(15, 50);
        b.x = random(0, w);
      }
      if (b.x < -b.size) b.x = w + 8;
      if (b.x > w + b.size) b.x = -b.size;

      b.el.style.transform =
        'translate3d(' + b.x + 'px,' + (b.y + b.scrollOffset) + 'px,0)';
    });

    fishes.forEach(function (f) {
      f.phase += f.bobSpeed * motionScale;
      f.x += f.vx * motionScale;
      const bob = Math.sin(f.phase) * f.bobAmp * motionScale;

      f.targetScroll = -scrollVel * 0.28;
      f.scrollOffset += (f.targetScroll - f.scrollOffset) * 0.1;

      const margin = f.width + 40;
      if (f.vx > 0 && f.x > w + margin) {
        f.x = -margin;
        f.y = random(h * 0.18, h * 0.88);
        f.vx = random(0.4, 1.1);
      }
      if (f.vx < 0 && f.x < -margin) {
        f.x = w + margin * 0.5;
        f.y = random(h * 0.18, h * 0.88);
        f.vx = -random(0.4, 1.1);
      }

      var flip;
      if (f.facesRight) {
        flip = f.vx >= 0 ? 1 : -1;
      } else {
        flip = f.vx >= 0 ? -1 : 1;
      }

      f.wrap.style.transform =
        'translate3d(' +
        f.x +
        'px,' +
        (f.y + bob + f.scrollOffset) +
        'px,0) scaleX(' +
        flip +
        ')';
    });

    rafId = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(tick);
  }

  function resizeAuroraCanvas() {
    canvasScale = Math.min(window.devicePixelRatio || 1, 1.5);
    canvasWidth = vw();
    canvasHeight = vh();
    auroraCanvas.width = Math.round(canvasWidth * canvasScale);
    auroraCanvas.height = Math.round(canvasHeight * canvasScale);
    auroraContext.setTransform(canvasScale, 0, 0, canvasScale, 0, 0);
  }

  function drawAurora(time) {
    if (!auroraContext) return;
    const ctx = auroraContext;
    const w = canvasWidth;
    const h = canvasHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'source-over';

    const curtains = [
      { color: [45, 205, 158], phase: 0, speed: 0.00022 },
      { color: [67, 194, 220], phase: 2.1, speed: -0.00018 },
      { color: [148, 112, 221], phase: 4.2, speed: 0.00015 },
    ];

    curtains.forEach(function (curtain, index) {
      const phase = time * curtain.speed + curtain.phase;
      const baseY = h * (0.16 + index * 0.09);
      const amplitude = h * (0.055 + index * 0.008);
      const step = 12;
      const gradient = ctx.createLinearGradient(0, baseY, 0, baseY + h * 0.34);
      const color = curtain.color;
      gradient.addColorStop(0, 'rgba(' + color.join(',') + ',0.22)');
      gradient.addColorStop(0.35, 'rgba(' + color.join(',') + ',0.10)');
      gradient.addColorStop(1, 'rgba(' + color.join(',') + ',0)');

      ctx.beginPath();
      for (let x = 0; x <= w + step; x += step) {
        const wave = Math.sin(x * 0.006 + phase) +
          0.38 * Math.sin(x * 0.014 - phase * 0.72 + index);
        const y = baseY + wave * amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let x = w + step; x >= 0; x -= step) {
        const wave = Math.sin(x * 0.006 + phase + 0.42) +
          0.38 * Math.sin(x * 0.014 - phase * 0.72 + index + 0.7);
        ctx.lineTo(x, baseY + h * 0.34 + wave * amplitude);
      }
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.shadowColor = 'rgba(' + color.join(',') + ',0.32)';
      ctx.shadowBlur = 26;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      for (let x = 0; x <= w + step; x += step) {
        const wave = Math.sin(x * 0.006 + phase) +
          0.38 * Math.sin(x * 0.014 - phase * 0.72 + index);
        const y = baseY + wave * amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(' + color.join(',') + ',0.55)';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(' + color.join(',') + ',0.8)';
      ctx.shadowBlur = 14;
      ctx.stroke();
      ctx.shadowBlur = 0;
    });

  }

  window.addEventListener('resize', function () {
    resizeAuroraCanvas();
    if (!enabled || mode !== 'fish') return;
    bubbles.forEach(function (b) {
      if (b.x > vw()) b.x = random(0, vw());
      if (b.y > vh()) b.y = random(0, vh());
    });
    fishes.forEach(function (f) {
      if (f.x > vw() + 150) f.x = random(0, vw());
      if (f.y > vh()) f.y = random(vh() * 0.2, vh() * 0.85);
    });
  });

  /* —— Init —— */
  if (storedMode && !VALID_MODES.includes(storedMode) && storedMode !== 'off') {
    console.warn('Efecto ambiental guardado desconocido; se usará peces y burbujas.');
  }
  updateButton();
  resizeAuroraCanvas();
  setMode(mode);
  }

  if (document.body) initializeEffects();
  else document.addEventListener('DOMContentLoaded', initializeEffects, { once: true });
})();
