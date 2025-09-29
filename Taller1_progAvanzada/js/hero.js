// js/hero.js — adaptado a tus clases (.carrusel .slide .dot)
document.addEventListener('DOMContentLoaded', function() {
  const slides = Array.from(document.querySelectorAll('.carrusel .slide'));
  const dots  = Array.from(document.querySelectorAll('.carrusel .dot'));
  if (!slides.length || !dots.length) {
    console.warn('hero.js: no se encontraron slides o dots. Revisa selectores y HTML.');
    return;
  }

  let current = 0;
  let interval = null;
  const AUTOPLAY_MS = 4500;

  function goTo(index) {
    index = (index + slides.length) % slides.length;
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
      s.setAttribute('aria-hidden', i === index ? 'false' : 'true');
      s.id = `slide-${i}`;
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
      d.setAttribute('aria-selected', i === index ? 'true' : 'false');
      d.tabIndex = i === index ? 0 : -1;
    });
    current = index;
  }

  function next() { goTo(current + 1); }
  function startAutoplay() {
    stopAutoplay();
    interval = setInterval(next, AUTOPLAY_MS);
  }
  function stopAutoplay() {
    if (interval) { clearInterval(interval); interval = null; }
  }

  dots.forEach(d => {
    d.addEventListener('click', () => {
      const i = parseInt(d.dataset.index, 10);
      goTo(i);
      startAutoplay();
    });
    d.addEventListener('keydown', (ev) => {
      if (ev.key === 'ArrowLeft') goTo(current - 1);
      if (ev.key === 'ArrowRight') goTo(current + 1);
    });
  });

  const carousel = document.querySelector('.carrusel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoplay, { passive: true });
    carousel.addEventListener('mouseleave', startAutoplay, { passive: true });
    carousel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') { goTo(current - 1); startAutoplay(); }
      if (e.key === 'ArrowRight') { goTo(current + 1); startAutoplay(); }
    });
  }

  goTo(0);
  startAutoplay();
});
