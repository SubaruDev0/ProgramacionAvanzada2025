document.addEventListener('DOMContentLoaded', function() {
  const slides = Array.from(document.querySelectorAll('.hero-carousel .slide'));
  const dots  = Array.from(document.querySelectorAll('.hero-carousel .dot'));
  if (!slides.length || !dots.length) return;

  let current = 0;
  let interval = null;
  const AUTOPLAY_MS = 4500; // interval de cambio
  const TRANSITION_MS = 700; // si quieres sincronizar con CSS

  function goTo(index) {
    index = (index + slides.length) % slides.length;
    // actualizar slides
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
      s.setAttribute('aria-hidden', i === index ? 'false' : 'true');
      s.id = `slide-${i}`;
    });
    // actualizar dots
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

  // dots clickeables
  dots.forEach(d => {
    d.addEventListener('click', () => {
      const i = parseInt(d.dataset.index, 10);
      goTo(i);
      // reinicia autoplay para dar tiempo al usuario
      startAutoplay();
    });
    d.addEventListener('keydown', (ev) => {
      if (ev.key === 'ArrowLeft') goTo(current - 1);
      if (ev.key === 'ArrowRight') goTo(current + 1);
    });
  });

  // pausa al hover sobre el carrusel
  const carousel = document.querySelector('.hero-carousel');
  carousel.addEventListener('mouseenter', stopAutoplay, { passive: true });
  carousel.addEventListener('mouseleave', startAutoplay, { passive: true });

  // inicia
  goTo(0);
  startAutoplay();

  // accesibilidad: left/right arrows globalmente cuando el carousel tiene foco
  carousel.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') { goTo(current - 1); startAutoplay(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); startAutoplay(); }
  });
});