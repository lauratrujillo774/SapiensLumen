/* ============================================================
   Sapiens Lumen – Sistema de progreso unificado
   ============================================================ */

const SUBJECTS = {
  math:     { key: 'math',     name: 'Matemáticas',       file: '../cursos/matematicas.html', icon: 'fa-calculator',        color: '#FFA726' },
  science:  { key: 'science',  name: 'Ciencias',          file: '../cursos/ciencias.html',    icon: 'fa-flask',             color: '#66BB6A' },
  reading:  { key: 'reading',  name: 'Lectura',           file: '../cursos/lectura.html',     icon: 'fa-book',              color: '#9CCC65' },
  social:   { key: 'social',   name: 'Ciencias Sociales', file: '../cursos/sociales.html',    icon: 'fa-earth-americas',   color: '#29B6F6' },
  tech:     { key: 'tech',     name: 'Tecnología',        file: '../cursos/tecnologia.html',  icon: 'fa-laptop-code',      color: '#2E7D32' },
  english:  { key: 'english',  name: 'Inglés',            file: '../cursos/ingles.html',      icon: 'fa-comments',         color: '#4FC3F7' }
};

const ACHIEVEMENTS = [
  { id: 'first_lesson',   icon: '🥇', title: 'Primera actividad',   desc: 'Completa tu primera lección',           check: s => s.totalLessons >= 1 },
  { id: 'streak_3',       icon: '🔥', title: '3 días seguidos',     desc: 'Estudia 3 días consecutivos',           check: s => s.streak >= 3 },
  { id: 'streak_7',       icon: '🔥', title: '7 días seguidos',     desc: 'Estudia 7 días consecutivos',           check: s => s.streak >= 7 },
  { id: 'lessons_5',      icon: '⭐', title: '5 lecciones',         desc: 'Completa 5 lecciones',                  check: s => s.totalLessons >= 5 },
  { id: 'lessons_10',     icon: '⭐', title: '10 lecciones',        desc: 'Completa 10 lecciones',                 check: s => s.totalLessons >= 10 },
  { id: 'lessons_20',     icon: '📚', title: '20 lecciones',        desc: 'Completa 20 lecciones',                 check: s => s.totalLessons >= 20 },
  { id: 'xp_100',         icon: '⚡', title: '100 XP',              desc: 'Acumula 100 puntos de experiencia',     check: s => s.totalXp >= 100 },
  { id: 'xp_500',         icon: '⚡', title: '500 XP',              desc: 'Acumula 500 puntos de experiencia',     check: s => s.totalXp >= 500 },
  { id: 'perfect',        icon: '🎯', title: 'Puntería perfecta',   desc: 'Obtén 3 estrellas en una lección',      check: s => s.perfects >= 1 },
  { id: 'perfect_5',      icon: '🎯', title: 'Perfeccionista',      desc: 'Obtén 3 estrellas en 5 lecciones',      check: s => s.perfects >= 5 },
  { id: 'math_3',         icon: '🧮', title: 'Matemático inicial',  desc: 'Completa 3 lecciones de Matemáticas',   check: s => (s.bySubject.math || 0) >= 3 },
  { id: 'science_3',      icon: '🔬', title: 'Científico curioso',  desc: 'Completa 3 lecciones de Ciencias',      check: s => (s.bySubject.science || 0) >= 3 },
  { id: 'reading_3',      icon: '📖', title: 'Lector novato',       desc: 'Completa 3 lecciones de Lectura',       check: s => (s.bySubject.reading || 0) >= 3 },
  { id: 'social_3',       icon: '🌎', title: 'Explorador',          desc: 'Completa 3 lecciones de Sociales',      check: s => (s.bySubject.social || 0) >= 3 },
  { id: 'tech_3',         icon: '💻', title: 'Programador novato',  desc: 'Completa 3 lecciones de Tecnología',    check: s => (s.bySubject.tech || 0) >= 3 },
  { id: 'english_3',      icon: '🗣️', title: 'Primeras palabras',   desc: 'Completa 3 lecciones de Inglés',        check: s => (s.bySubject.english || 0) >= 3 },
  { id: 'all_subjects',   icon: '🌈', title: 'Polímata',            desc: 'Completa al menos 1 lección en cada materia', check: s => Object.keys(SUBJECTS).every(k => (s.bySubject[k] || 0) >= 1) },
  { id: 'boss_1',         icon: '🐉', title: 'Cazador de jefes',    desc: 'Derrota tu primer jefe de unidad',      check: s => s.bosses >= 1 },
  { id: 'level_5',        icon: '📈', title: 'Nivel 5',             desc: 'Alcanza el nivel 5',                    check: s => s.level >= 5 },
  { id: 'level_10',       icon: '🏆', title: 'Nivel 10',            desc: 'Alcanza el nivel 10',                   check: s => s.level >= 10 }
];

function getStats() {
  const totalXp = parseInt(localStorage.getItem('totalXp') || '0', 10);
  const streak = parseInt(localStorage.getItem('streak') || '0', 10);
  const level = Math.floor(totalXp / 50) + 1;

  let totalLessons = 0;
  let perfects = 0;
  let bosses = 0;
  const bySubject = {};

  // Scan all progress_* keys
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith('progress_')) continue;
    try {
      const data = JSON.parse(localStorage.getItem(key));
      if (!data || !data.done) continue;
      totalLessons++;
      if (data.stars === 3) perfects++;

      // progress_math_m1-1  → subject = math
      const parts = key.replace('progress_', '').split('_');
      const subj = parts[0];
      bySubject[subj] = (bySubject[subj] || 0) + 1;

      // Boss detection
      const lessonId = parts.slice(1).join('_');
      if (lessonId.includes('boss')) bosses++;
    } catch (_) {}
  }

  return { totalXp, streak, level, totalLessons, perfects, bosses, bySubject };
}

function getSubjectProgress(subjectKey) {
  // Count total lessons defined in LESSONS if available
  let total = 0;
  let done = 0;
  if (typeof LESSONS !== 'undefined' && LESSONS[subjectKey]) {
    LESSONS[subjectKey].units.forEach(u => {
      u.lessons.forEach(l => {
        total++;
        try {
          const p = JSON.parse(localStorage.getItem('progress_' + subjectKey + '_' + l.id) || 'null');
          if (p && p.done) done++;
        } catch (_) {}
      });
    });
  } else {
    // Fallback: just count done
    done = (getStats().bySubject[subjectKey] || 0);
    total = Math.max(done, 10); // avoid div/0
  }
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

function getUnlockedAchievements() {
  const stats = getStats();
  const unlocked = [];
  const locked = [];
  ACHIEVEMENTS.forEach(a => {
    if (a.check(stats)) unlocked.push(a);
    else locked.push(a);
  });
  return { unlocked, locked, stats };
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const last = localStorage.getItem('lastStudyDate');
  let streak = parseInt(localStorage.getItem('streak') || '0', 10);

  if (last !== today) {
    if (last) {
      const lastDate = new Date(last);
      const diff = Math.round((new Date(today) - lastDate) / 86400000);
      if (diff === 1) streak += 1;
      else if (diff > 1) streak = 1;
    } else {
      streak = 1;
    }
    localStorage.setItem('streak', streak);
    localStorage.setItem('lastStudyDate', today);
  }
  return streak;
}

/* ---------- Notificaciones de logros ---------- */

const SEEN_ACH_KEY = 'sapiens_seen_achievements';

function getSeenAchievements() {
  try {
    return JSON.parse(localStorage.getItem(SEEN_ACH_KEY) || '[]');
  } catch {
    return [];
  }
}

function markAchievementSeen(id) {
  const seen = getSeenAchievements();
  if (!seen.includes(id)) {
    seen.push(id);
    localStorage.setItem(SEEN_ACH_KEY, JSON.stringify(seen));
  }
}

function ensureToastStyles() {
  if (document.getElementById('sapiens-ach-toast-styles')) return;
  const style = document.createElement('style');
  style.id = 'sapiens-ach-toast-styles';
  style.textContent = `
    .sapiens-ach-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      pointer-events: none;
      max-width: min(360px, calc(100vw - 32px));
    }
    .sapiens-ach-toast {
      pointer-events: auto;
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px 18px;
      background: linear-gradient(135deg, rgba(255,255,255,0.97), rgba(232,245,233,0.97));
      border: 2px solid #66BB6A;
      border-radius: 18px;
      box-shadow: 0 12px 40px rgba(46,125,50,0.28), 0 0 0 1px rgba(255,255,255,0.5) inset;
      animation: sapiensAchIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      cursor: pointer;
      backdrop-filter: blur(10px);
    }
    [data-theme="dark"] .sapiens-ach-toast {
      background: linear-gradient(135deg, rgba(22,51,44,0.97), rgba(27,94,32,0.85));
      border-color: #81C784;
      box-shadow: 0 12px 40px rgba(0,0,0,0.45);
    }
    .sapiens-ach-toast.out {
      animation: sapiensAchOut 0.35s ease forwards;
    }
    .sapiens-ach-icon {
      font-size: 2.4rem;
      line-height: 1;
      flex-shrink: 0;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
    }
    .sapiens-ach-body { flex: 1; min-width: 0; }
    .sapiens-ach-label {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #2E7D32;
      margin-bottom: 2px;
    }
    [data-theme="dark"] .sapiens-ach-label { color: #A5D6A7; }
    .sapiens-ach-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: #1B3A2F;
      line-height: 1.25;
    }
    [data-theme="dark"] .sapiens-ach-title { color: #E8F5E9; }
    .sapiens-ach-desc {
      font-size: 0.82rem;
      color: #3D6B5A;
      margin-top: 2px;
      line-height: 1.3;
    }
    [data-theme="dark"] .sapiens-ach-desc { color: #A5D6A7; }
    .sapiens-ach-close {
      background: none;
      border: none;
      font-size: 1.1rem;
      color: #78909C;
      cursor: pointer;
      padding: 4px;
      line-height: 1;
      flex-shrink: 0;
    }
    .sapiens-ach-close:hover { color: #E53935; }
    @keyframes sapiensAchIn {
      from { opacity: 0; transform: translateX(80px) scale(0.9); }
      to   { opacity: 1; transform: translateX(0) scale(1); }
    }
    @keyframes sapiensAchOut {
      from { opacity: 1; transform: translateX(0) scale(1); }
      to   { opacity: 0; transform: translateX(60px) scale(0.92); }
    }
    @media (max-width: 480px) {
      .sapiens-ach-container {
        top: auto;
        bottom: 90px;
        right: 12px;
        left: 12px;
        max-width: none;
      }
      .sapiens-ach-toast { padding: 14px 14px; }
      .sapiens-ach-icon { font-size: 2rem; }
    }
  `;
  document.head.appendChild(style);
}

function getToastContainer() {
  let el = document.getElementById('sapiens-ach-container');
  if (!el) {
    el = document.createElement('div');
    el.id = 'sapiens-ach-container';
    el.className = 'sapiens-ach-container';
    document.body.appendChild(el);
  }
  return el;
}

function showAchievementToast(achievement) {
  ensureToastStyles();
  const container = getToastContainer();

  const toast = document.createElement('div');
  toast.className = 'sapiens-ach-toast';
  toast.innerHTML = `
    <div class="sapiens-ach-icon">${achievement.icon}</div>
    <div class="sapiens-ach-body">
      <div class="sapiens-ach-label">¡Logro desbloqueado!</div>
      <div class="sapiens-ach-title">${achievement.title}</div>
      <div class="sapiens-ach-desc">${achievement.desc}</div>
    </div>
    <button class="sapiens-ach-close" aria-label="Cerrar">✕</button>
  `;

  const dismiss = () => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 360);
  };

  toast.querySelector('.sapiens-ach-close').addEventListener('click', (e) => {
    e.stopPropagation();
    dismiss();
  });
  toast.addEventListener('click', dismiss);

  container.appendChild(toast);

  // Auto-cerrar a los 5.5 s
  setTimeout(dismiss, 5500);

  // Sonido suave opcional (Web Audio beep)
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(523.25, ctx.currentTime);
    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12);
    osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.24);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch (_) {}
}

/**
 * Compara logros actuales con los ya vistos y muestra notificaciones
 * para los nuevos. Devuelve el array de logros recién desbloqueados.
 */
function checkAndNotifyAchievements() {
  const { unlocked } = getUnlockedAchievements();
  const seen = getSeenAchievements();
  const newly = unlocked.filter(a => !seen.includes(a.id));

  newly.forEach((a, i) => {
    markAchievementSeen(a.id);
    // Escalonar si hay varios a la vez
    setTimeout(() => showAchievementToast(a), i * 700);
  });

  return newly;
}

/**
 * Inicializa la lista de logros ya vistos con los que el usuario
 * ya tenía desbloqueados (evita spam la primera vez que se carga el sistema).
 * Se ejecuta al cargar el script, ANTES de completar nuevas lecciones.
 */
function seedSeenAchievementsIfNeeded() {
  if (localStorage.getItem(SEEN_ACH_KEY) !== null) return;
  const { unlocked } = getUnlockedAchievements();
  localStorage.setItem(SEEN_ACH_KEY, JSON.stringify(unlocked.map(a => a.id)));
}

// Sembrar al cargar (solo si aún no existe la clave)
try { seedSeenAchievementsIfNeeded(); } catch (_) {}

// Call on lesson complete (llamar DESPUÉS de guardar el progreso en localStorage)
function onLessonComplete(subjectKey, lessonId, stars, xp) {
  updateStreak();
  // Delay para asegurar que localStorage ya tiene los datos de esta lección
  setTimeout(() => checkAndNotifyAchievements(), 200);
}

// Expose globally
window.SapiensProgress = {
  SUBJECTS,
  ACHIEVEMENTS,
  getStats,
  getSubjectProgress,
  getUnlockedAchievements,
  updateStreak,
  onLessonComplete,
  checkAndNotifyAchievements,
  showAchievementToast
};
