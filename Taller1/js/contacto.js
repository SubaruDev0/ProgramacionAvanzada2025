// =====================
// ARCHIVO: contacto.js
// DESCRIPCIÓN: Funcionalidades JavaScript para la página de contacto
// FECHA: 2025
// =====================

// ====================================
// 1. DATOS DE SEDES
// ====================================
const branchesData = [
    // La primera sede es la principal, que se excluye del carrusel.
    {
        "id": "concepcion",
        "name": "Sede Principal — Concepción",
        "address": "Arturo Prat 450, Concepción",
        "phone": "+56412345678",
        "email": "concepcion@ejemplo.cl", 
        "image": "img/sede-concepcion.jpg"
    },
    {
        "id": "santiago",
        "name": "Santiago",
        "address": "Avenida Libertador Bernardo O'Higgins 100, Santiago",
        "phone": "+56298765432",
        "email": "santiago@ejemplo.cl", 
        "image": "img/sede-santiago.jpg"
    },
    {
        "id": "valparaiso",
        "name": "Valparaíso",
        "address": "Condell 1500, Valparaíso",
        "phone": "+56325432109",
        "email": null, 
        "image": "img/sede-valparaiso.jpg"
    },
    {
        "id": "vinadelmar",
        "name": "Viña del Mar",
        "address": "Calle Valparaíso 500, Viña del Mar",
        "phone": "+56321098765",
        "email": "vina@ejemplo.cl", 
        "image": "img/sede-vina.jpg"
    },
    {
        "id": "puntaarenas",
        "name": "Punta Arenas",
        "address": "Avenida Colón 900, Punta Arenas",
        "phone": "+56616789012",
        "email": "puntaarenas@ejemplo.cl", 
        "image": "img/sede-puntaarenas.jpeg"
    },
    {
        "id": "copiapo",
        "name": "Copiapó",
        "address": "Calle O'Higgins 700, Copiapó",
        "phone": "+56523456789",
        "email": "atacama@ejemplo.cl", 
        "image": "img/sede-copiapo.jpg"
    }
];

// ====================================
// 2. CONSTRUCCIÓN DEL CARRUSEL DE SEDES
// ====================================
function renderCarruselSedes() {
    const carruselContainer = document.getElementById('carrusel-sedes');
    if (!carruselContainer) {
        console.error('No se encontró el contenedor del carrusel de sedes');
        return;
    }

    // Filtra para mostrar solo las sucursales secundarias (excluye Concepción)
    const secondaryBranches = branchesData.filter(branch => branch.id !== 'concepcion');

    let htmlContent = '';
    
    // Genera el HTML para cada sede secundaria
    secondaryBranches.forEach(branch => {
        // Extrae el nombre de la ciudad para el título de la tarjeta
        const cityName = branch.name.includes('—') ? 
            branch.name.split('—')[0].trim() : 
            branch.name;

        // Dirección abreviada (solo la primera parte)
        const shortAddress = branch.address.split(',')[0].trim();
        
        htmlContent += `
            <div class="sede-card" role="article" aria-label="Sede ${cityName}">
                <div class="sede-card-img-container">
                    <img src="${branch.image}" 
                         alt="Fachada de la Sede ${cityName}" 
                         class="sede-card-img"
                         onerror="this.src='img/sede-default.jpg'">
                </div>
                <h4>${cityName}</h4>
                <p><i class="fas fa-phone-alt"></i> ${branch.phone}</p>
                <p style="padding-bottom: 15px;">
                    <i class="fas fa-map-marker-alt"></i> ${shortAddress}
                </p>
            </div>
        `;
    });

    carruselContainer.innerHTML = htmlContent;
}

// ====================================
// 3. FUNCIÓN PARA INICIALIZAR EL MAPA
// ====================================
function inicializarMapa() {
    const mapaDiv = document.getElementById('mapa-interactivo-div');
    if (!mapaDiv) {
        console.warn('No se encontró el contenedor del mapa');
        return;
    }

    // Verificar si el iframe del mapa se cargó correctamente
    const iframe = mapaDiv.querySelector('iframe');
    if (iframe) {
        iframe.addEventListener('load', function() {
            console.log('Mapa de Google cargado correctamente');
        });
        
        iframe.addEventListener('error', function() {
            console.error('Error al cargar el mapa de Google');
            // Mostrar un placeholder en caso de error
            mostrarPlaceholderMapa();
        });
    }
}

// ====================================
// 4. FUNCIÓN PARA MOSTRAR PLACEHOLDER DEL MAPA
// ====================================
function mostrarPlaceholderMapa() {
    const mapaDiv = document.getElementById('mapa-interactivo-div');
    if (mapaDiv) {
        mapaDiv.innerHTML = `
            <div class="mapa-placeholder">
                <i class="fas fa-map-marked-alt" style="font-size: 3em; color: #666; margin-bottom: 15px;"></i>
                <h3>Mapa no disponible</h3>
                <p>No se pudo cargar el mapa interactivo.</p>
                <p><strong>Dirección:</strong> Arturo Prat 450, Concepción</p>
            </div>
        `;
    }
}

// ====================================
// 5. FUNCIÓN PARA AGREGAR BOTÓN FLOTANTE
// ====================================
function agregarBotonFlotante() {
    // Verificar si ya existe el botón
    if (document.querySelector('.btn-pedir-turno')) {
        return;
    }

    const boton = document.createElement('button');
    boton.className = 'btn-pedir-turno';
    boton.textContent = 'Pedir Turno';
    boton.onclick = function() {
        window.location.href = 'pedirTurno.html';
    };

    document.body.appendChild(boton);
}

// ====================================
// 6. INICIALIZACIÓN AL CARGAR EL DOM
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando página de contacto...');
    
    // Renderizar el carrusel de sedes
    renderCarruselSedes();
    
    // Inicializar el mapa interactivo
    inicializarMapa();
    
    // Agregar botón flotante para pedir turno
    agregarBotonFlotante();
    
    console.log('Página de contacto inicializada correctamente');
});

// ====================================
// 7. MANEJO DE ERRORES GLOBALES
// ====================================
window.addEventListener('error', function(e) {
    console.error('Error en la página de contacto:', e.error);
});

// ====================================
// 8. FUNCIONES ADICIONALES (OPCIONALES)
// ====================================

/**
 * Función para obtener información de una sede específica
 * @param {string} sedeId - ID de la sede
 * @returns {Object|null} - Objeto con información de la sede o null si no existe
 */
function obtenerInformacionSede(sedeId) {
    return branchesData.find(sede => sede.id === sedeId) || null;
}

/**
 * Función para filtrar sedes por ciudad
 * @param {string} ciudad - Nombre de la ciudad a filtrar
 * @returns {Array} - Array de sedes que coinciden con la ciudad
 */
function filtrarSedesPorCiudad(ciudad) {
    return branchesData.filter(sede => 
        sede.name.toLowerCase().includes(ciudad.toLowerCase())
    );
}