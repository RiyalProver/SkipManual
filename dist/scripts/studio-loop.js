// A short, continuous preview. The clock stops offscreen and when the tab is hidden.
document.querySelectorAll('[data-studio-loop]').forEach(loop => {
  const frames = [...loop.querySelectorAll('[data-studio-frame]')];
  const captions = [...loop.querySelectorAll('[data-studio-caption]')];
  const steps = [...loop.querySelectorAll('[data-studio-step]')];
  const pause = loop.querySelector('[data-studio-pause]');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const duration = 6500;
  let index = 0, elapsed = 0, previous = 0, request = 0;
  let visible = false, manuallyPaused = false, running = false;

  const render = () => {
    loop.dataset.active = String(index);
    frames.forEach((frame, i) => {
      frame.setAttribute('aria-hidden', String(i !== index));
      frame.inert = i !== index;
    });
    captions.forEach((caption, i) => caption.hidden = i !== index);
    steps.forEach((step, i) => {
      step.setAttribute('aria-pressed', String(i === index));
      step.style.setProperty('--step-progress', i === index ? `${elapsed / duration * 100}%` : '0%');
    });
  };
  const tick = now => {
    if (!running) return;
    elapsed += Math.min(now - previous, 100);
    previous = now;
    if (elapsed >= duration) { index = (index + 1) % frames.length; elapsed %= duration; }
    render();
    request = requestAnimationFrame(tick);
  };
  const sync = () => {
    cancelAnimationFrame(request);
    running = visible && !document.hidden && !motion.matches && !manuallyPaused;
    loop.dataset.playing = String(running);
    pause.hidden = motion.matches;
    const label = manuallyPaused ? 'Resume' : 'Pause';
    pause.setAttribute('aria-label', `${label} website animation`);
    pause.querySelector('[data-studio-pause-label]').textContent = label;
    pause.querySelector('[data-studio-pause-icon]').textContent = manuallyPaused ? '▷' : 'Ⅱ';
    if (running) { previous = performance.now(); request = requestAnimationFrame(tick); }
  };
  steps.forEach((step, i) => step.addEventListener('click', () => { index = i; elapsed = 0; render(); }));
  pause.addEventListener('click', () => { manuallyPaused = !manuallyPaused; sync(); });
  motion.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  loop.querySelector('[data-studio-controls]').hidden = false;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .2;
      sync();
    }, { threshold: [0, .2] }).observe(loop);
  } else { visible = true; }
  render();
  sync();
});
