document.addEventListener('DOMContentLoaded', () => {
    
    /**
     * =================================
     * 1. CONFIGURACIÓN INICIAL Y ELEMENTOS
     * =================================
     */

    // Referencias a los contenedores
    const contenedorLogo = document.querySelector('.contenedor-logo');
    const pantallaInicial = document.querySelector('.pantalla-inicial');
    const contenedorLogin = document.querySelector('.contenedor-login');
    
    // Referencias al formulario y botones
    const loginForm = document.getElementById('loginForm');
    const botonInvitado = document.querySelector('.boton-invitado');
    
    // Referencias a los inputs y al mensaje de error
    const inputUsuario = document.getElementById('nombreUsuario');
    const inputContrasena = document.getElementById('contrasena');
    const mensajeErrorDiv = document.getElementById('mensajeError');


    // Duraciones de las animaciones (en milisegundos)
    const T_EXPANSION = 800;          
    const T_ROTACION_ENTRADA = 700;   
    const T_ESPERA_LOGO = 800;        
    const T_ROTACION_SALIDA = 600;    
    const T_DURACION_ERROR = 4000; // El error desaparece a los 4 segundos

    /**
     * Función de ayuda para esperar un tiempo específico
     */
    const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    /**
     * =================================
     * 2. FUNCIONES DE VALIDACIÓN Y MANEJO
     * =================================
     */

    /**
     * Valida las credenciales. Usuario: Blas (sin mayúsculas), Contraseña: 123
     * @returns {boolean} True si las credenciales son correctas.
     */
    const validarCredenciales = () => {
        const usuarioIngresado = inputUsuario.value.trim();
        const contrasenaIngresada = inputContrasena.value.trim();
        
        const usuarioCorrecto = 'Blas';
        const contrasenaCorrecta = '123';

        // Ocultar cualquier error anterior antes de validar
        mensajeErrorDiv.classList.add('oculto');
        
        // Comprobación de credenciales
        if (usuarioIngresado.toLowerCase() === usuarioCorrecto.toLowerCase() && contrasenaIngresada === contrasenaCorrecta) {
            return true;
        } else {
            // MOSTRAR ERROR VISIBLE
            mensajeErrorDiv.textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo. Usuario: Blas | Contraseña: 123";
            mensajeErrorDiv.classList.remove('oculto');
            
            // Ocultar el error automáticamente después de 4 segundos
            setTimeout(() => {
                mensajeErrorDiv.classList.add('oculto');
            }, T_DURACION_ERROR);

            // Enfocar el input de usuario para facilitar la corrección
            inputUsuario.focus(); 
            return false;
        }
    };

    /**
     * Función genérica para manejar la redirección.
     */
    const manejarRedireccion = (elemento) => {
        const redirectTarget = elemento.getAttribute('data-redirect');
        if (redirectTarget) {
            window.location.href = redirectTarget;
        }
    };


    /**
     * =================================
     * 3. SECUENCIA DE ANIMACIÓN DE INICIO
     * =================================
     */
    const iniciarSecuencia = async () => {
        try {
            await esperar(T_EXPANSION); 
            contenedorLogo.classList.add('mostrar-logo');
            await esperar(T_ROTACION_ENTRADA + T_ESPERA_LOGO);
            contenedorLogo.classList.remove('mostrar-logo'); 
            contenedorLogo.classList.add('desvanecer'); 
            await esperar(T_ROTACION_SALIDA);
            
            contenedorLogo.classList.add('ocultar-final'); 
            pantallaInicial.classList.add('ocultar-fondo-blanco');
            contenedorLogin.classList.remove('oculto'); 
            contenedorLogin.classList.add('visible'); 

        } catch (error) {
            console.error("Error durante la secuencia de animación:", error);
        }
    };
    
    iniciarSecuencia();


    /**
     * =================================
     * 4. LÓGICA DE EVENTOS DE BOTONES
     * =================================
     */

    // Maneja el envío del formulario (Botón Acceder)
    loginForm.addEventListener('submit', (evento) => {
        evento.preventDefault(); 
        
        // Redirección solo si las credenciales son válidas
        if (validarCredenciales()) {
            if (evento.submitter && evento.submitter.hasAttribute('data-redirect')) {
                manejarRedireccion(evento.submitter);
            }
        }
    });

    // Maneja el clic en el botón de Acceder como Invitado (Redirección directa)
    botonInvitado.addEventListener('click', () => {
        // Ocultar el mensaje de error si existía y redirigir
        mensajeErrorDiv.classList.add('oculto');
        manejarRedireccion(botonInvitado);
    });

});