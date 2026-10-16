/* Aplica el tema guardado ANTES de que se pinte la página (evita el parpadeo) */
(function () {
  var pref = localStorage.getItem('theme-preference') || 'light';
  var actual = pref;
  if (pref === 'auto') {
    actual = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', actual);
})();

/* Carga los efectos ambientales en todas las pantallas que usan este tema. */
(function () {
  var currentScript = document.currentScript;
  if (!currentScript) return;

  var scriptUrl = new URL('bubbles.js?v=aurora-canvas-1', currentScript.src);
  var stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = new URL('../css/bubbles.css?v=aurora-canvas-1', currentScript.src).href;
  document.head.appendChild(stylesheet);

  var effectsScript = document.createElement('script');
  effectsScript.src = scriptUrl.href;
  document.head.appendChild(effectsScript);
})();

/* Aplica un tema y lo deja escrito en el atributo data-theme del <html> */
function sapiensApplyTheme(pref) {
  var actual = pref;
  if (pref === 'auto') {
    actual = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', actual);
}

/* Si el tema está en "Automático", sigue el cambio del sistema en vivo */
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
  if (localStorage.getItem('theme-preference') === 'auto') {
    sapiensApplyTheme('auto');
  }
});
