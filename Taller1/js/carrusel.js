// ===================================================
// CARRUSEL DE SERVICIOS AUTOMÁTICO Y CIRCULAR
// ===================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECCIÓN DE ELEMENTOS DEL DOM
    const carousel = document.querySelector('.carousel');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const cards = carousel.querySelectorAll('.servicio');

    // Salir si los elementos no existen para evitar errores
    if (!carousel || !leftBtn || !rightBtn || cards.length === 0) {
        console.error("No se encontraron todos los elementos necesarios para el carrusel.");
        return;
    }

    // 2. CONFIGURACIÓN DE CONSTANTES
    const GAP = 30;
    const AUTO_SCROLL_INTERVAL = 3000;
    const scrollAmount = cards[0].offsetWidth + GAP;

    // 3. LÓGICA DE NAVEGACIÓN
    function handleLeftClick() {
        if (carousel.scrollLeft <= 0) {
            carousel.scrollTo({
                left: carousel.scrollWidth,
                behavior: 'smooth'
            });
        } else {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    function handleRightClick() {
        const scrollTolerance = 1;
        if (carousel.scrollLeft + carousel.clientWidth + scrollTolerance >= carousel.scrollWidth) {
            carousel.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    leftBtn.addEventListener('click', handleLeftClick);
    rightBtn.addEventListener('click', handleRightClick);

    // 4. AUTO-SCROLL INFINITO
    let autoScrollId;

    function startAutoScroll() {
        stopAutoScroll();
        autoScrollId = setInterval(() => {
            const scrollTolerance = 1;
            if (carousel.scrollLeft + carousel.clientWidth + scrollTolerance >= carousel.scrollWidth) {
                carousel.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                carousel.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }, AUTO_SCROLL_INTERVAL);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollId);
    }

    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);

    startAutoScroll();

    // ===================================================
    // BOTÓN "VOLVER ARRIBA"
    // ===================================================

    const btnTop = document.getElementById("btn-top");
    if (btnTop) {
        window.addEventListener('scroll', () => {
            const isScrolled = window.scrollY > 200 || document.documentElement.scrollTop > 200;
            btnTop.style.display = isScrolled ? "block" : "none";
        });

        btnTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.warn("El botón 'Volver Arriba' no fue encontrado.");
    }
});