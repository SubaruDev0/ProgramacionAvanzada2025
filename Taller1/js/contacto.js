// ====================================
// 1. DATOS DE SEDES
// ====================================
const branchesData = [
    // La primera sede es la principal, que se excluye del carrusel.
    {"id":"concepcion","name":"Sede Principal — Concepción","address":"Arturo Prat 450, Concepción","phone":"+56412345678","email":"concepcion@ejemplo.cl", "image": "img/sede-concepcion.jpg"},
    {"id":"santiago","name":"Santiago","address":"Avenida Libertador Bernardo O'Higgins 100, Santiago","phone":"+56298765432","email":"santiago@ejemplo.cl", "image": "img/sede-santiago.jpg"},
    {"id":"valparaiso","name":"Valparaíso","address":"Condell 1500, Valparaíso","phone":"+56325432109","email":null, "image": "img/sede-valparaiso.jpg"},
    {"id":"vinadelmar","name":"Viña del Mar","address":"Calle Valparaíso 500, Viña del Mar","phone":"+56321098765","email":"vina@ejemplo.cl", "image": "img/sede-vina.jpg"},
    {"id":"puntaarenas","name":"Punta Arenas","address":"Avenida Colón 900, Punta Arenas","phone":"+56616789012","email":"puntaarenas@ejemplo.cl", "image": "img/sede-puntaarenas.jpeg"},
    {"id":"copiapo","name":"Copiapó","address":"Calle O'Higgins 700, Copiapó","phone":"+56523456789","email":"atacama@ejemplo.cl", "image": "img/sede-copiapo.jpg"}
];


// ====================================
// 2. CONSTRUCCIÓN DEL CARRUSEL DE SEDES
// ====================================
function renderCarruselSedes() {
    const carruselContainer = document.getElementById('carrusel-sedes');
    if (!carruselContainer) return;

    // Filtra para mostrar solo las sucursales secundarias.
    const secondaryBranches = branchesData.filter(b => b.id !== 'concepcion');

    let htmlContent = '';
    
    secondaryBranches.forEach(branch => {
        // Extrae el nombre de la ciudad para el título de la tarjeta.
        const cityName = branch.name.includes('(') ? branch.name.split('(')[0].trim() : branch.name;
        
        htmlContent += `
            <div class="sede-card" role="article">
                <div class="sede-card-img-container">
                    <img src="${branch.image}" alt="Fachada de la Sede ${branch.name}" class="sede-card-img">
                </div>
                <h4>${cityName}</h4>
                <p><i class="fas fa-phone-square-alt"></i> ${branch.phone}</p>
                <p style="padding-bottom: 15px;"><i class="fas fa-location-arrow"></i> ${branch.address.split(',')[0].trim()}</p>
            </div>
        `;
    });

    carruselContainer.innerHTML = htmlContent;
}

// ====================================
// 3. INICIALIZACIÓN
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza el carrusel al cargar el DOM.
    renderCarruselSedes();
});