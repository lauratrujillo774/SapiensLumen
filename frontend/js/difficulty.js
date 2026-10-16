/* ============================================================
   Sapiens Lumen – Grado escolar (6°–11°) y dificultad adaptativa
   ============================================================ */

const GRADE_LABELS = {
  6: '6°',
  7: '7°',
  8: '8°',
  9: '9°',
  10: '10°',
  11: '11°'
};

/** Bandas de dificultad según grado */
function gradeBand(grade) {
  const g = parseInt(grade, 10) || 6;
  if (g <= 7) return 'basic';      // 6–7
  if (g <= 9) return 'intermediate'; // 8–9
  return 'advanced';                 // 10–11
}

function gradeXpMultiplier(grade) {
  const g = parseInt(grade, 10) || 6;
  return 1 + (g - 6) * 0.12; // más XP en grados altos
}

function getStudentGrade() {
  try {
    const user = JSON.parse(localStorage.getItem('sapiens_user') || 'null');
    if (user && user.grade) return parseInt(user.grade, 10);
  } catch (_) {}
  const stored = parseInt(localStorage.getItem('sapiens_grade') || '0', 10);
  return stored >= 6 && stored <= 11 ? stored : null;
}

function setStudentGrade(grade) {
  const g = parseInt(grade, 10);
  if (g < 6 || g > 11) return false;
  localStorage.setItem('sapiens_grade', String(g));
  if (window.SapiensAuth) SapiensAuth.syncPreferencias({ grade: g });
  try {
    const raw = localStorage.getItem('sapiens_user');
    if (raw) {
      const user = JSON.parse(raw);
      user.grade = g;
      localStorage.setItem('sapiens_user', JSON.stringify(user));
      // sincronizar en lista de usuarios
      const users = JSON.parse(localStorage.getItem('sapiens_users') || '[]');
      const idx = users.findIndex(u => u.id === user.id);
      if (idx >= 0) {
        users[idx].grade = g;
        localStorage.setItem('sapiens_users', JSON.stringify(users));
      }
    }
  } catch (_) {}
  return true;
}

/* ---------- Generadores de ejercicios de Matemáticas ---------- */

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeChoice(q, correct, distractors) {
  const opts = shuffleArray([String(correct), ...distractors.map(String)]).slice(0, 4);
  // asegurar que la correcta esté
  if (!opts.includes(String(correct))) opts[0] = String(correct);
  const answer = opts.indexOf(String(correct));
  return { type: 'choice', q, options: opts, answer };
}

function makeTF(q, answer) {
  return { type: 'truefalse', q, answer: !!answer };
}

function makeFill(q, blank, options) {
  return { type: 'fill', q, blanks: [String(blank)], options: options.map(String) };
}

/** Genera un set de ejercicios de math según el grado y el tipo de lección */
function generateMathExercises(lessonId, grade) {
  const band = gradeBand(grade);
  const exercises = [];

  const ranges = {
    basic:        { a: [2, 20],  b: [2, 15],  big: [10, 50],  mult: [2, 10] },
    intermediate: { a: [10, 80], b: [5, 40],  big: [50, 200], mult: [3, 15] },
    advanced:     { a: [20, 150], b: [10, 90], big: [100, 500], mult: [5, 25] }
  };
  const r = ranges[band];

  // Detectar tema por id de lección
  const id = (lessonId || '').toLowerCase();

  if (id.includes('m1-1') || id.includes('suma')) {
    // Sumas
    for (let i = 0; i < 5; i++) {
      const x = randInt(r.a[0], r.a[1]);
      const y = randInt(r.b[0], r.b[1]);
      const sum = x + y;
      if (i === 2) {
        exercises.push(makeTF(`${x} + ${y} = ${sum + (Math.random() > 0.5 ? 0 : randInt(1, 5))}`, Math.random() > 0.5));
        // fix: make one clearly true
        if (i === 2) exercises[exercises.length - 1] = makeTF(`${x} + ${y} = ${sum}`, true);
      } else if (i === 3) {
        exercises.push(makeFill(`Completa: ${x} + ___ = ${sum}`, y, shuffleArray([y, y + 1, y - 1, y + 2]).slice(0, 4)));
      } else {
        const wrong = shuffleArray([sum + 1, sum - 1, sum + 2, sum - 2, sum + 3].filter(n => n !== sum)).slice(0, 3);
        exercises.push(makeChoice(`¿Cuánto es ${x} + ${y}?`, sum, wrong));
      }
    }
  } else if (id.includes('m1-2') || id.includes('resta')) {
    for (let i = 0; i < 5; i++) {
      let x = randInt(r.a[0], r.a[1]);
      let y = randInt(r.b[0], Math.min(r.b[1], x));
      const diff = x - y;
      if (i === 1) {
        exercises.push(makeTF(`${x} − ${y} = ${diff}`, true));
      } else if (i === 3) {
        exercises.push(makeFill(`Completa: ${x} − ___ = ${diff}`, y, shuffleArray([y, y + 1, y - 1, y + 2]).slice(0, 4)));
      } else {
        const wrong = shuffleArray([diff + 1, diff - 1, diff + 2, diff - 2].filter(n => n !== diff && n >= 0)).slice(0, 3);
        exercises.push(makeChoice(`¿Cuánto es ${x} − ${y}?`, diff, wrong));
      }
    }
  } else if (id.includes('m1-3') || id.includes('multi')) {
    for (let i = 0; i < 5; i++) {
      const x = randInt(r.mult[0], r.mult[1]);
      const y = randInt(r.mult[0], Math.min(12, r.mult[1]));
      const prod = x * y;
      if (i === 2) {
        exercises.push(makeTF(`${x} × ${y} = ${prod}`, true));
      } else if (i === 3) {
        exercises.push(makeFill(`Completa: ${x} × ___ = ${prod}`, y, shuffleArray([y, y + 1, y - 1, y + 2]).slice(0, 4)));
      } else {
        const wrong = shuffleArray([prod + x, prod - x, prod + y, prod - y, prod + 1].filter(n => n !== prod && n > 0)).slice(0, 3);
        exercises.push(makeChoice(`¿Cuánto es ${x} × ${y}?`, prod, wrong));
      }
    }
  } else if (id.includes('frac') || id.includes('m2')) {
    // Fracciones / decimales según grado
    if (band === 'basic') {
      exercises.push(makeChoice('¿Qué fracción representa la mitad?', '1/2', ['1/4', '1/3', '2/3']));
      exercises.push(makeChoice('¿Cuánto es 1/2 + 1/2?', '1', ['1/2', '2', '1/4']));
      exercises.push(makeTF('0,5 es igual a 1/2', true));
      exercises.push(makeFill('Completa: 1/4 + 1/4 = ___', '1/2', ['1/2', '1/4', '2/4', '1']));
      exercises.push(makeChoice('¿Cuál es mayor: 1/3 o 1/2?', '1/2', ['1/3', 'Son iguales', 'No se puede saber']));
    } else if (band === 'intermediate') {
      exercises.push(makeChoice('¿Cuánto es 2/5 + 1/5?', '3/5', ['3/10', '1/5', '2/10']));
      exercises.push(makeChoice('Simplifica 4/8', '1/2', ['2/4', '4/8', '1/4']));
      exercises.push(makeTF('3/4 > 2/3', true));
      exercises.push(makeFill('Completa: 0,25 = ___/100', '25', ['25', '2.5', '250', '1/4']));
      exercises.push(makeChoice('¿Cuánto es 1/2 × 1/3?', '1/6', ['1/5', '2/3', '1/3']));
    } else {
      exercises.push(makeChoice('¿Cuánto es 3/4 ÷ 1/2?', '3/2', ['3/8', '6/4', '1/2']));
      exercises.push(makeChoice('Convierte 5/8 a decimal', '0,625', ['0,58', '0,85', '0,125']));
      exercises.push(makeTF('2/3 + 1/6 = 5/6', true));
      exercises.push(makeFill('Completa: 2/5 de 50 = ___', '20', ['20', '25', '10', '15']));
      exercises.push(makeChoice('¿Cuál es el inverso de 3/7?', '7/3', ['3/7', '−3/7', '7/4']));
    }
  } else if (id.includes('geo') || id.includes('m3') || id.includes('perimetro') || id.includes('area') || id.includes('figura')) {
    if (band === 'basic') {
      exercises.push(makeChoice('¿Cuántos lados tiene un triángulo?', '3', ['2', '4', '5']));
      exercises.push(makeChoice('Un cuadrado tiene todos sus lados…', 'iguales', ['diferentes', 'curvos', 'ninguno']));
      exercises.push(makeTF('Un círculo tiene 4 vértices', false));
      exercises.push(makeFill('Perímetro de un cuadrado de lado 5: ___', '20', ['20', '10', '25', '15']));
      exercises.push(makeChoice('Área de un rectángulo 4 × 3', '12', ['14', '7', '16']));
    } else if (band === 'intermediate') {
      exercises.push(makeChoice('Área de un triángulo base 10 altura 6', '30', ['60', '16', '20']));
      exercises.push(makeChoice('Circunferencia de radio 7 (π≈3,14)', '43,96', ['21,98', '14', '49']));
      exercises.push(makeTF('La suma de ángulos de un triángulo es 180°', true));
      exercises.push(makeFill('Área de círculo radio 5 (π≈3,14): ≈___', '78,5', ['78,5', '31,4', '25', '15,7']));
      exercises.push(makeChoice('¿Cuántos grados tiene un ángulo recto?', '90', ['45', '180', '60']));
    } else {
      exercises.push(makeChoice('Volumen de un cubo de arista 4', '64', ['16', '48', '32']));
      exercises.push(makeChoice('Teorema de Pitágoras: a=3, b=4 → c=?', '5', ['6', '7', '12']));
      exercises.push(makeTF('El área de un trapecio es (B+b)·h/2', true));
      exercises.push(makeFill('Diagonal de un cuadrado de lado 1: √___', '2', ['2', '1', '3', '4']));
      exercises.push(makeChoice('Área de un rombo con diagonales 6 y 8', '24', ['48', '14', '32']));
    }
  } else if (id.includes('algebra') || id.includes('m4') || id.includes('ecuacion') || id.includes('variable')) {
    if (band === 'basic') {
      exercises.push(makeChoice('Si x + 3 = 7, ¿cuánto vale x?', '4', ['3', '5', '10']));
      exercises.push(makeChoice('2 × n = 10 → n = ?', '5', ['4', '8', '12']));
      exercises.push(makeTF('Si a = 2, entonces a + a = 4', true));
      exercises.push(makeFill('Completa: x − 5 = 3 → x = ___', '8', ['8', '2', '15', '5']));
      exercises.push(makeChoice('¿Qué es una variable?', 'Una letra que representa un número', ['Un número fijo', 'Una operación', 'Un resultado']));
    } else if (band === 'intermediate') {
      exercises.push(makeChoice('Resuelve: 3x + 2 = 14', '4', ['3', '5', '6']));
      exercises.push(makeChoice('2(x + 3) = 16 → x = ?', '5', ['8', '11', '4']));
      exercises.push(makeTF('Si 5x = 20, entonces x = 4', true));
      exercises.push(makeFill('Completa: 4x − 8 = 0 → x = ___', '2', ['2', '4', '8', '0']));
      exercises.push(makeChoice('Simplifica: 3a + 2a', '5a', ['6a', '3a²', 'a']));
    } else {
      exercises.push(makeChoice('Resuelve: 2x − 5 = 3x + 1', '−6', ['6', '−4', '4']));
      exercises.push(makeChoice('Factoriza: x² − 9', '(x−3)(x+3)', ['(x−9)(x+1)', 'x(x−9)', '(x−3)²']));
      exercises.push(makeTF('(x+1)² = x² + 2x + 1', true));
      exercises.push(makeFill('Si f(x)=2x+3, f(4)=___', '11', ['11', '8', '14', '5']));
      exercises.push(makeChoice('Solución de x² − 5x + 6 = 0', 'x=2 o x=3', ['x=1 o x=6', 'x=−2 o x=−3', 'x=0']));
    }
  } else if (id.includes('porcent') || id.includes('%') || id.includes('m5')) {
    if (band === 'basic') {
      exercises.push(makeChoice('¿Qué es el 50% de 80?', '40', ['30', '50', '8']));
      exercises.push(makeChoice('10% de 200', '20', ['10', '2', '100']));
      exercises.push(makeTF('25% es lo mismo que 1/4', true));
      exercises.push(makeFill('Completa: 100% de 45 = ___', '45', ['45', '100', '0', '4.5']));
      exercises.push(makeChoice('Si de 20 alumnos, 5 aprobaron, ¿qué % aprobó?', '25%', ['5%', '20%', '50%']));
    } else if (band === 'intermediate') {
      exercises.push(makeChoice('¿Cuánto es el 15% de 240?', '36', ['24', '48', '30']));
      exercises.push(makeChoice('Un producto de $80 con 20% de descuento cuesta', '64', ['60', '70', '16']));
      exercises.push(makeTF('Aumentar 10% y luego bajar 10% deja el mismo precio', false));
      exercises.push(makeFill('Completa: 3/5 = ___% ', '60', ['60', '35', '15', '75']));
      exercises.push(makeChoice('Si el IVA es 19%, $100 + IVA = ?', '119', ['109', '190', '81']));
    } else {
      exercises.push(makeChoice('Interés simple: $1000 al 5% anual, 2 años → interés', '100', ['50', '150', '200']));
      exercises.push(makeChoice('Variación porcentual de 40 a 50', '25%', ['10%', '20%', '15%']));
      exercises.push(makeTF('Un aumento del 100% duplica la cantidad', true));
      exercises.push(makeFill('Si el 30% de N es 45, N = ___', '150', ['150', '135', '75', '90']));
      exercises.push(makeChoice('Precio final con 15% desc. y luego 10% IVA sobre $200', '195,5', ['200', '187', '210']));
    }
  } else {
    // Genérico: operaciones mixtas según grado
    for (let i = 0; i < 5; i++) {
      const x = randInt(r.a[0], r.a[1]);
      const y = randInt(r.b[0], r.b[1]);
      if (band === 'advanced' && i % 2 === 0) {
        const z = randInt(2, 9);
        const ans = (x + y) * z;
        const wrong = [ans + z, ans - z, x * y * z].filter(n => n !== ans).slice(0, 3);
        exercises.push(makeChoice(`¿Cuánto es (${x} + ${y}) × ${z}?`, ans, wrong));
      } else if (band === 'intermediate' && i % 2 === 0) {
        const ans = x * 2 + y;
        exercises.push(makeChoice(`¿Cuánto es ${x} × 2 + ${y}?`, ans, [ans + 1, ans - 1, ans + y]));
      } else {
        const ans = x + y;
        exercises.push(makeChoice(`¿Cuánto es ${x} + ${y}?`, ans, [ans + 1, ans - 1, ans + 2]));
      }
    }
  }

  return exercises.slice(0, 5);
}

/* ---------- Adaptación de ejercicios no-math ---------- */

/** Ajusta dificultad de ejercicios existentes según grado */
function adaptGenericExercises(exercises, grade, subjectKey) {
  const band = gradeBand(grade);
  if (!exercises || !exercises.length) return exercises;

  // En básico dejamos tal cual (contenido base)
  if (band === 'basic') return exercises.map(e => ({ ...e }));

  return exercises.map((ex, idx) => {
    const copy = JSON.parse(JSON.stringify(ex));

    if (copy.type === 'fill' && band === 'advanced' && copy.options) {
      if (copy.options.length < 5 && copy.blanks && copy.blanks[0]) {
        const b = String(copy.blanks[0]);
        const extra = [b + 's', 'N/A', '—'].filter(x => !copy.options.includes(x));
        copy.options = shuffleArray([...copy.options, ...extra]).slice(0, 6);
      }
    }

    if (band === 'advanced' && idx === 0) {
      copy.hint = ((copy.hint || '') + ' (Nivel avanzado · 10°–11°)').trim();
    } else if (band === 'intermediate' && idx === 0) {
      copy.hint = ((copy.hint || '') + ' (Nivel intermedio · 8°–9°)').trim();
    }

    return copy;
  });
}

/**
 * Adapta una lección completa al grado del estudiante.
 * Math: regenera ejercicios. Otras materias: ajusta y etiqueta.
 */
function adaptLessonForGrade(lesson, grade, subjectKey) {
  if (!lesson) return lesson;
  const g = parseInt(grade, 10) || 6;
  const adapted = JSON.parse(JSON.stringify(lesson));
  const mult = gradeXpMultiplier(g);
  adapted.xp = Math.round((lesson.xp || 10) * mult);
  adapted.gradeBand = gradeBand(g);
  adapted.gradeLabel = GRADE_LABELS[g] || String(g);

  if (subjectKey === 'math') {
    const generated = generateMathExercises(lesson.id, g);
    if (generated && generated.length) {
      adapted.exercises = generated;
    }
  } else {
    adapted.exercises = adaptGenericExercises(lesson.exercises || [], g, subjectKey);
  }

  return adapted;
}

/**
 * getLesson con adaptación de grado (reemplaza / envuelve el de lessons-data.js)
 */
function getLessonForStudent(subjectKey, lessonId) {
  const subject = typeof LESSONS !== 'undefined' ? LESSONS[subjectKey] : null;
  if (!subject) return null;
  let found = null;
  let foundUnit = null;
  for (const unit of subject.units) {
    for (const lesson of unit.lessons) {
      if (lesson.id === lessonId) {
        found = lesson;
        foundUnit = unit;
        break;
      }
    }
    if (found) break;
  }
  if (!found) return null;
  const grade = getStudentGrade() || 6;
  const adapted = adaptLessonForGrade(found, grade, subjectKey);
  return { subject, unit: foundUnit, lesson: adapted, grade };
}

/* ---------- Modal de selección de grado ---------- */

function ensureGradeModalStyles() {
  if (document.getElementById('sapiens-grade-styles')) return;
  const style = document.createElement('style');
  style.id = 'sapiens-grade-styles';
  style.textContent = `
    .grade-modal-overlay {
      position: fixed; inset: 0; z-index: 10000;
      background: rgba(0,0,0,0.55); backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
    }
    .grade-modal {
      background: var(--surface, #fff);
      color: var(--text, #1B3A2F);
      border-radius: 24px; padding: 28px 24px;
      max-width: 420px; width: 100%;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      border: 1px solid var(--border, rgba(46,125,50,0.25));
      animation: gradeIn 0.3s ease;
    }
    @keyframes gradeIn {
      from { opacity: 0; transform: translateY(16px) scale(0.96); }
      to { opacity: 1; transform: none; }
    }
    .grade-modal h2 {
      font-size: 1.35rem; margin-bottom: 8px; text-align: center;
    }
    .grade-modal > p {
      text-align: center; color: var(--text-light, #3D6B5A);
      font-size: 0.92rem; margin-bottom: 20px;
    }
    .grade-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
      margin-bottom: 18px;
    }
    .grade-btn {
      padding: 16px 8px; border-radius: 14px;
      border: 2px solid var(--border, rgba(46,125,50,0.28));
      background: var(--input-bg, rgba(255,255,255,0.9));
      color: var(--text, #1B3A2F);
      font-weight: 700; font-size: 1.15rem; cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }
    .grade-btn:hover, .grade-btn.selected {
      border-color: var(--olive, #2E7D32);
      background: var(--hover-bg, rgba(129,199,132,0.35));
      transform: translateY(-2px);
    }
    .grade-btn .sub {
      display: block; font-size: 0.7rem; font-weight: 500;
      color: var(--text-light, #3D6B5A); margin-top: 2px;
    }
    .grade-confirm {
      width: 100%; padding: 14px; border: none; border-radius: 14px;
      background: linear-gradient(135deg, var(--olive, #2E7D32), var(--green-soft, #66BB6A));
      color: #fff; font-weight: 700; font-size: 1rem; cursor: pointer;
      font-family: inherit;
    }
    .grade-confirm:disabled { opacity: 0.5; cursor: not-allowed; }
    .grade-confirm:not(:disabled):hover { filter: brightness(1.08); }
    [data-theme="dark"] .grade-modal {
      background: rgba(18, 40, 35, 0.97);
      color: #E8F5E9;
    }
    [data-theme="dark"] .grade-btn {
      background: rgba(15, 36, 30, 0.9);
      color: #E8F5E9;
      border-color: rgba(129, 199, 132, 0.25);
    }
  `;
  document.head.appendChild(style);
}

function showGradePicker(onDone) {
  ensureGradeModalStyles();
  if (document.getElementById('gradeModalOverlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'gradeModalOverlay';
  overlay.className = 'grade-modal-overlay';
  overlay.innerHTML = `
    <div class="grade-modal" role="dialog" aria-labelledby="gradeTitle">
      <h2 id="gradeTitle">¿En qué grado estás?</h2>
      <p>Adaptaremos la dificultad de los retos de cada materia a tu nivel (6° a 11°).</p>
      <div class="grade-grid" id="gradeGrid">
        ${[6,7,8,9,10,11].map(g => `
          <button type="button" class="grade-btn" data-grade="${g}">
            ${g}°
            <span class="sub">${g <= 7 ? 'Básico' : g <= 9 ? 'Intermedio' : 'Avanzado'}</span>
          </button>
        `).join('')}
      </div>
      <button type="button" class="grade-confirm" id="gradeConfirm" disabled>Continuar</button>
    </div>
  `;
  document.body.appendChild(overlay);

  let selected = null;
  overlay.querySelectorAll('.grade-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selected = parseInt(btn.dataset.grade, 10);
      overlay.querySelector('#gradeConfirm').disabled = false;
    });
  });

  overlay.querySelector('#gradeConfirm').addEventListener('click', () => {
    if (!selected) return;
    setStudentGrade(selected);
    overlay.remove();
    if (typeof onDone === 'function') onDone(selected);
  });
}

/** Si el usuario está logueado y no tiene grado, muestra el modal */
function requireGradeIfNeeded() {
  const path = (window.location.pathname.split('/').pop() || '');
  if (path === 'login.html' || path === 'register.html') return;
  try {
    const user = JSON.parse(localStorage.getItem('sapiens_user') || 'null');
    if (!user) return;
    if (getStudentGrade()) return;
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => showGradePicker());
    } else {
      showGradePicker();
    }
  } catch (_) {}
}

// Auto: pedir grado al cargar páginas autenticadas
requireGradeIfNeeded();

// Exponer API
window.SapiensDifficulty = {
  GRADE_LABELS,
  gradeBand,
  getStudentGrade,
  setStudentGrade,
  adaptLessonForGrade,
  getLessonForStudent,
  showGradePicker,
  gradeXpMultiplier
};
