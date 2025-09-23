 /* =====================
         SCRIPT PARA FORMATEAR RUT
         Formatea el RUT a medida que se escribe
    ===================== --> */
    
        class RutFormatter {
            constructor(inputId) {
                this.input = document.getElementById(inputId);
                if (this.input) {
                    this.input.addEventListener("input", () => this.format());
                }
            }

            format() {
                let value = this.input.value.replace(/\D/g, ""); // elimina todo lo que no sea número
                if (value.length > 1) {
                    let cuerpo = value.slice(0, -1);
                    let dv = value.slice(-1);

                    // Agregar puntos cada 3 dígitos desde la derecha
                    cuerpo = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                    this.input.value = `${cuerpo}-${dv}`;
                } else {
                    this.input.value = value; // si aún no tiene dígito verificador
                }
            }
        }

        //Activar formato en el input con id="rut"
        new RutFormatter("rut");