````markdown
# 📘 Programación Avanzada 2025 - Repositorio de trabajos y talleres

Este repositorio fue creado para centralizar todos los trabajos, tareas y talleres de la materia **Programación Avanzada**. Cada estudiante tendrá su propia rama para subir sus entregas de manera organizada, evitando conflictos y pisar el trabajo de otros compañeros.

---

## 🧰 ¿Qué necesito para empezar?

Antes de comenzar, asegúrate de tener instalado:

- Git
- Una cuenta en GitHub
- Un editor de código (por ejemplo, VS Code)

Podés usar cualquier sistema operativo: Windows, Linux o macOS.

---

## 🔄 ¿Cómo subo mis trabajos?

### 1. Cloná el repositorio

Podés clonar el repositorio usando dos métodos:

#### Opción 1: Con SSH (requiere tener configuradas las claves SSH)

```bash
git clone git@github.com:SubaruDev0/ProgramacionAvanzada2025.git
````

#### Opción 2: Con HTTPS (más simple si no configuraste claves SSH)

```bash
git clone https://github.com/SubaruDev0/ProgramacionAvanzada2025.git
```

Luego, ingresá a la carpeta del proyecto:

```bash
cd ProgramacionAvanzada2025
```

---

### 2. Creá tu rama personal

Cada estudiante debe trabajar en su propia rama para mantener todo organizado. Creá tu rama usando tu nombre o alias:

```bash
git checkout -b TuNombre
```

Por ejemplo:

```bash
git checkout -b AgustinLopez
```

---

### 3. Creá una carpeta para cada actividad

Dentro de tu rama, creá una carpeta con el nombre de la tarea, taller o trabajo que vas a entregar. Ahí debes guardar todos los archivos relacionados.

```bash
mkdir Taller1
```

Guardá en esa carpeta los archivos que correspondan: código, imágenes, documentos, etc.

---

### 4. Guardá y subí tus cambios

Cuando tengas todo listo, añadí los archivos, realizá un commit y subí tu rama al repositorio remoto:

```bash
git add .
git commit -m "Subo Taller 1"
git push -u origin TuNombre
```

> Asegurate de estar en tu rama antes de hacer el `push`.

---

### 5. Revisá tus archivos en GitHub

Podés ingresar a la página del repositorio en GitHub para revisar tu rama y tus archivos. También podés abrir un **Pull Request** si querés integrar tus cambios a otra rama, como `main`.

---

## ✅ Reglas y organización

* **Una rama por persona**: trabajá solo en tu rama personal.
* **Una carpeta por actividad**: nombrá cada carpeta con la tarea o taller correspondiente.
* **No modifiques archivos de otros compañeros.**
* Usá mensajes claros y descriptivos en los commits. Por ejemplo:

  * `"Subo Taller 2 con HTML y CSS"`
  * `"Agrego solución al ejercicio de clases en Java"`

---

## 🗂️ Estructura sugerida del repositorio

```bash
ProgramacionAvanzada2025/
├── Taller1_Juan/
│   ├── index.html
│   └── estilos.css
├── Taller1_Camila/
│   └── Taller1.java
├── README.md
```

Podés usar cualquier tipo de archivo necesario para la entrega: `.java`, `.html`, `.css`, `.js`, `.pdf`, etc.

---

## 🙋‍♂️ ¿Tenés dudas?

Consultá con la persona que coordina el repositorio en el grupo o preguntale a un compañero que ya haya subido trabajos. Lo importante es que todos podamos colaborar sin problemas ni conflictos.

---

¡A darle con todo, equipo! 🔥💻

````

---

### Si querés, te paso los comandos para subir este README desde tu rama personal:

```bash
# Cambiá a tu rama personal (por ejemplo, Subaru)
git checkout Subaru

# Crear o editar el README.md
nano README.md
# (Pegá el contenido, guardá con CTRL + O, luego salí con CTRL + X)

# Agregar y subir los cambios
git add README.md
git commit -m "docs: Agrega README con guía para colaborar en el repositorio"
git push origin Subaru
````

