(function () {
  // Global minimal JS: helper to set devicePixelRatio-based class if needed
  function setDprClass() {
    var dpr = Math.round(window.devicePixelRatio || 1);
    document.documentElement.setAttribute('data-dpr', String(dpr));
  }
  setDprClass();
  window.addEventListener('resize', setDprClass);
})();
