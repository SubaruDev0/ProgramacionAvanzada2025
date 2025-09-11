````markdown
# Programación Avanzada 2025 - Repositorio de trabajos y talleres

Este repositorio centraliza todos los trabajos, tareas y talleres de la materia **Programación Avanzada**.  

Cada estudiante debe crear su propia rama para subir sus entregas de forma ordenada, evitando conflictos y respetando el trabajo de los demás.

---

## Requisitos previos

- Tener instalado Git.  
- Cuenta activa en GitHub.  
- Un editor de código (como Visual Studio Code).  

Funciona en Windows, Linux y macOS.

---

## Cómo subir tus trabajos

### 1. Clonar el repositorio

Puedes clonar usando:

- **SSH** (si tienes configuradas las claves SSH):

  ```bash
  git clone git@github.com:SubaruDev0/ProgramacionAvanzada2025.git
````

* **HTTPS** (si no tienes configuradas las claves SSH):

  ```bash
  git clone https://github.com/SubaruDev0/ProgramacionAvanzada2025.git
  ```

Luego, ingresa a la carpeta del proyecto:

```bash
cd ProgramacionAvanzada2025
```

### 2. Crear una rama con tu nombre

Cada estudiante debe trabajar en su propia rama para mantener el orden. Crea la rama con:

```bash
git checkout -b TuNombre
```

Por ejemplo:

```bash
git checkout -b JuanPerez
```

### 3. Crear una carpeta para la actividad

Dentro de tu rama, crea una carpeta con el nombre de la tarea o taller que vas a entregar.

```bash
mkdir Taller1
```

Guarda ahí todos los archivos relacionados.

### 4. Guardar y subir los cambios

Cuando termines, añade los archivos, realiza un commit y sube tu rama al repositorio remoto:

```bash
git add .
git commit -m "Subo Taller 1"
git push -u origin TuNombre
```

Asegúrate de estar en tu rama antes de hacer `push`.

### 5. Revisar en GitHub

Ingresa al repositorio en GitHub para verificar tu rama y archivos. Si es necesario, abre un Pull Request para integrar cambios a otra rama (como `main`).

---

## Reglas y organización

* Usa una rama por persona.
* Crea una carpeta por actividad.
* No modifiques archivos de otros.
* Utiliza mensajes claros y descriptivos en los commits. Ejemplos:

  * `"Subo Taller 2 con HTML y CSS"`
  * `"Agrego solución al ejercicio de clases en Java"`

---

## Estructura recomendada

```bash
ProgramacionAvanzada2025/
├── Taller1_Juan/
│   ├── index.html
│   └── estilos.css
├── Taller1_Camila/
│   └── Taller1.java
├── README.md
```

Puedes usar cualquier tipo de archivo que se requiera: `.java`, `.html`, `.css`, `.js`, `.pdf`, etc.

---

## Dudas o consultas

Contactame, tienes mi numero...quiza, o a un compañero con experiencia. El objetivo es colaborar eficientemente y sin conflictos.

---

**Trabajo en equipo y compromiso.**

```

