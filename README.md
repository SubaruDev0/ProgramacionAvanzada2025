
# 📚 Programación Avanzada 2025 - Repositorio de entregas

Bienvenido al repositorio oficial de **Programación Avanzada 2025**.  
Aquí centralizaremos todos los **trabajos**, **tareas** y **talleres** del curso de manera organizada y colaborativa.

Cada estudiante trabajará en su propia rama para subir sus entregas sin interferir con el trabajo de los demás.  
El objetivo es mantener una estructura clara, ordenada y fácil de mantener.

---

## ⚙️ Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente:

- Git instalado en tu sistema.
- Una cuenta activa en GitHub.
- Un editor de código (recomendado: Visual Studio Code).
- Acceso a la terminal o consola.

Compatible con Windows, Linux y macOS.

---

## 🚀 ¿Cómo subir tus trabajos?

### 1. Clonar el repositorio

Puedes clonar este repositorio de dos maneras:

- **SSH** (si ya configuraste tus claves SSH):

  ```bash
  git clone git@github.com:SubaruDev0/ProgramacionAvanzada2025.git


* **HTTPS** (más simple si no configuraste claves):

  ```bash
  git clone https://github.com/SubaruDev0/ProgramacionAvanzada2025.git
  ```

Luego entra a la carpeta del proyecto:

```bash
cd ProgramacionAvanzada2025
```

---

### 2. Crear una rama con tu nombre

Cada estudiante debe tener su propia rama. Crea la tuya con:

```bash
git checkout -b TuNombre
```

Ejemplo:

```bash
git checkout -b MariaGomez
```

---

### 3. Crear una carpeta para la actividad

En tu rama, crea una carpeta con el nombre de la tarea o taller que vas a entregar:

```bash
mkdir Taller1
```

Dentro de esa carpeta debes guardar todos los archivos relacionados: código, imágenes, documentos, etc.

---

### 4. Guardar y subir tus cambios

Una vez que tengas tus archivos listos:

```bash
git add .
git commit -m "Subo Taller 1"
git push -u origin TuNombre
```

> Asegúrate de estar en tu rama antes de hacer `push`.

---

### 5. Verifica tu rama en GitHub

Ingresa a la página del repositorio en GitHub.
Desde ahí podrás revisar tu rama y, si corresponde, abrir un **Pull Request** para fusionar tus cambios con otra rama (por ejemplo, `main`).

---

## 🧭 Reglas de trabajo

* ✅ Una rama por persona.
* 📁 Una carpeta por entrega (usa nombres claros).
* 🚫 No modificar archivos de otros compañeros.
* 📝 Commits claros y específicos. Ejemplos:

  * `"Subo Taller 2 con HTML y CSS"`
  * `"Agrego ejercicios resueltos de clases en Java"`

---

## 📁 Estructura sugerida

```bash
ProgramacionAvanzada2025/
├── Taller1_Maria/
│   ├── index.html
│   └── estilos.css
├── Taller1_Luis/
│   └── Taller1.java
├── README.md
```

Se permiten archivos en cualquier formato necesario para la entrega: `.java`, `.html`, `.css`, `.js`, `.pdf`, entre otros.

---

## ❓ Dudas o consultas

Si tienes preguntas o necesitas ayuda:

* Puedes escribirme directamente si tienes mi contacto.
* O consultar a un compañero con experiencia.

El objetivo es trabajar de manera ordenada, colaborativa y sin complicaciones.
