(() => {
  'use strict';
  const allowed = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  const cards = [...document.querySelectorAll('.hero-dashboard, .employee, .department, .orb')];
  const states = new Map();
  function reset(card) {
    const state = states.get(card);
    if (state?.frame) cancelAnimationFrame(state.frame);
    card.classList.remove('motion-active');
    ['--tilt-x', '--tilt-y', '--shift-x', '--shift-y'].forEach(name => card.style.setProperty(name, '0' + (name.includes('tilt') ? 'deg' : 'px')));
    states.delete(card);
  }
  function prepare(card) {
    reset(card);
    card.classList.remove('motion-target');
    card.style.setProperty('--motion-base', getComputedStyle(card).transform === 'none' ? 'translateZ(0)' : getComputedStyle(card).transform);
    card.classList.add('motion-target');
  }
  cards.forEach(card => {
    prepare(card);
    card.addEventListener('pointerenter', event => {
      if (!allowed.matches || event.pointerType !== 'mouse') return;
      states.set(card, {rect: card.getBoundingClientRect(), frame: 0});
      card.classList.add('motion-active');
    });
    card.addEventListener('pointermove', event => {
      const state = states.get(card);
      if (!state || !allowed.matches || event.pointerType !== 'mouse') return;
      const x = Math.max(-1, Math.min(1, (event.clientX - state.rect.left) / state.rect.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - state.rect.top) / state.rect.height * 2 - 1));
      if (state.frame) cancelAnimationFrame(state.frame);
      state.frame = requestAnimationFrame(() => {
        const tilt = card.classList.contains('hero-dashboard') ? 3.5 : 6;
        card.style.setProperty('--tilt-x', (-y * tilt).toFixed(2) + 'deg');
        card.style.setProperty('--tilt-y', (x * tilt).toFixed(2) + 'deg');
        card.style.setProperty('--shift-x', (x * 4).toFixed(2) + 'px');
        card.style.setProperty('--shift-y', (y * 3 - 3).toFixed(2) + 'px');
        card.style.setProperty('--light-x', ((x + 1) * 50).toFixed(1) + '%');
        card.style.setProperty('--light-y', ((y + 1) * 50).toFixed(1) + '%');
        state.frame = 0;
      });
    });
    card.addEventListener('pointerleave', () => reset(card));
    card.addEventListener('pointercancel', () => reset(card));
  });
  let resizeFrame;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => cards.forEach(prepare));
  }, {passive: true});
  allowed.addEventListener('change', () => cards.forEach(prepare));
  window.addEventListener('blur', () => cards.forEach(reset));
})();
