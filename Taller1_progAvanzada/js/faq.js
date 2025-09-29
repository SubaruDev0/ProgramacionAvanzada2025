// Funcionalidad del acordeón
document.addEventListener('DOMContentLoaded', function() {
    // Acordeón
    const acordeonBtns = document.querySelectorAll('.acordeon-btn');
    
    acordeonBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los items
            document.querySelectorAll('.acordeon-item').forEach(el => {
                el.classList.remove('active');
            });
            
            // Abrir el clickeado si no estaba activo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Cambio de categorías
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const categoriasPreguntas = document.querySelectorAll('.categoria-preguntas');
    
    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            
            // Actualizar botones activos
            categoriaBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar categoría correspondiente
            categoriasPreguntas.forEach(cat => {
                cat.classList.remove('active');
                if (cat.id === categoria) {
                    cat.classList.add('active');
                }
            });
        });
    });
    
    // Búsqueda en FAQ
    const buscador = document.getElementById('buscadorFAQ');
    if (buscador) {
        buscador.addEventListener('input', function() {
            const termino = this.value.toLowerCase();
            const preguntas = document.querySelectorAll('.acordeon-btn span:first-child');
            
            preguntas.forEach(pregunta => {
                const texto = pregunta.textContent.toLowerCase();
                const item = pregunta.closest('.acordeon-item');
                const categoria = item.closest('.categoria-preguntas');
                
                if (texto.includes(termino)) {
                    item.style.display = '';
                    categoria.style.display = 'block';
                    categoria.classList.add('active');
                    
                    // Activar la categoría correspondiente
                    const categoriaId = categoria.id;
                    document.querySelector(`[data-categoria="${categoriaId}"]`).classList.add('active');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});