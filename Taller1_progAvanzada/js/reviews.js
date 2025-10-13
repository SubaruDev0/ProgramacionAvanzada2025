// reviews.js
document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('reseñas-track');
  const reviews = Array.from(track.querySelectorAll('.review'));
  const btnPrev = document.querySelector('.r-btn.prev');
  const btnNext = document.querySelector('.r-btn.next');
  if (!track || reviews.length === 0) return;

  let current = Math.floor(reviews.length / 2); // iniciamos en el centro por defecto
  // si quieres iniciar en 0, poner current = 0;

  // calcula y aplica el transform para centrar el review 'current'
  function updatePosition(animate = true) {
    const containerWidth = track.parentElement.clientWidth; // ancho visible
    const card = reviews[current];
    const cardRect = card.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();

    // ancho total del item (incluye gap aproximado)
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap || style.columnGap || 16); // fallback
    const itemWidth = card.offsetWidth + gap;

    // pos del centro del item relativo al track's left
    const itemCenter = (card.offsetLeft + card.offsetWidth / 2);

    // el translateX que centra el item en el contenedor
    const translateX = (containerWidth / 2) - itemCenter;

    // apply transform
    track.style.transition = animate ? 'transform 420ms cubic-bezier(.2,.9,.2,1)' : 'none';
    track.style.transform = `translateX(${translateX}px)`;

    // actualizar clases active
    reviews.forEach((r, i) => r.classList.toggle('active', i === current));
  }

  // handlers prev/next
  function goPrev() {
    current = Math.max(0, current - 1);
    updatePosition();
  }
  function goNext() {
    current = Math.min(reviews.length - 1, current + 1);
    updatePosition();
  }

  btnPrev && btnPrev.addEventListener('click', goPrev);
  btnNext && btnNext.addEventListener('click', goNext);

  // soporte teclado: flechas cuando el wrapper tiene foco
  const wrapper = document.querySelector('.reseñas-wrapper');
  wrapper.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  });

  // actualización inicial (sin animación)
  updatePosition(false);

  // Recalcular al redimensionar ventana
  window.addEventListener('resize', () => updatePosition(false));

  // soporte swipe en móviles (opcional simple)
  let startX = null;
  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) goNext();
      else goPrev();
    }
    startX = null;
  });
});
