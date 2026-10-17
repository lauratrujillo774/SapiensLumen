/* ============================================================
   Compañeros / mascotas – catálogo y preferencia del usuario
   Edita name y description aquí cuando quieras personalizarlos.
   ============================================================ */

const SAPIENS_COMPANIONS = [
  {
    id: 'flamenco',
    img: '../img/companions/flamenco.png',
    name: 'Valentino',
  },
  {
    id: 'kiwi',
    img: '../img/companions/kiwi.png',
    name: 'Cody',
  },
  {
    id: 'owlet',
    img: '../img/companions/owlet.png',
    name: 'Aria',
  },
  {
    id: 'penguin',
    img: '../img/companions/penguin.png',
    name: 'Lev',
  },
  {
    id: 'shark',
    img: '../img/companions/shark.png',
    name: 'Dante',
  },
  {
    id: 'crocodile',
    img: '../img/companions/crocodile.png',
    name: 'Louis',
  },
  {
    id: 'jellyfish',
    img: '../img/companions/jellyfish.png',
    name: 'Angela',
  },
  {
    id: 'clownfish',
    img: '../img/companions/clownfish.png',
    name: 'Wyatt',
  },
  {
    id: 'chameleon',
    img: '../img/companions/chameleon.png',
    name: 'Raymond',
  },
  {
    id: 'platypus',
    img: '../img/companions/platypus.png',
    name: 'Jason',
  },
  {
    id: 'kitten',
    img: '../img/companions/kitten.png',
    name: 'Charlotte',
  },
  {
    id: 'parrot',
    img: '../img/companions/parrot.png',
    name: 'Maxwell',
  },
  {
    id: 'puppy',
    img: '../img/companions/puppy.png',
    name: 'George',
  },
  {
    id: 'capybara',
    img: '../img/companions/capybara.png',
    name: 'Bob',
  }
];

const COMPANION_KEY = 'sapiens_companion';

const SapiensCompanions = {
  list() {
    return SAPIENS_COMPANIONS.slice();
  },

  getById(id) {
    return SAPIENS_COMPANIONS.find(c => c.id === id) || null;
  },

  getSelectedId() {
    // Preferencia en usuario de sesión, luego localStorage
    try {
      const user = JSON.parse(localStorage.getItem('sapiens_user') || 'null');
      if (user && user.companionId) return user.companionId;
    } catch (_) {}
    return localStorage.getItem(COMPANION_KEY) || null;
  },

  getSelected() {
    const id = this.getSelectedId();
    return id ? this.getById(id) : null;
  },

  clearSelected() {
    localStorage.removeItem(COMPANION_KEY);
    try {
      const raw = localStorage.getItem('sapiens_user');
      if (raw) {
        const user = JSON.parse(raw);
        delete user.companionId;
        localStorage.setItem('sapiens_user', JSON.stringify(user));
      }
    } catch (_) {}
  },

  setSelected(id) {
    const c = this.getById(id);
    if (!c) return false;
    localStorage.setItem(COMPANION_KEY, id);
    if (window.SapiensAuth) SapiensAuth.syncPreferencias({ companionId: id });
    try {
      const raw = localStorage.getItem('sapiens_user');
      if (raw) {
        const user = JSON.parse(raw);
        user.companionId = id;
        localStorage.setItem('sapiens_user', JSON.stringify(user));
      }
    } catch (_) {}
    return true;
  }
};

window.SAPIENS_COMPANIONS = SAPIENS_COMPANIONS;
window.SapiensCompanions = SapiensCompanions;
