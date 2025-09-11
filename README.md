### 📄 Acá va el `README.md` final, listo para copiar y usar:

````markdown
# 📘 Programación Avanzada 2025 - Repositorio de trabajos y talleres

Este repositorio fue creado con el objetivo de centralizar todos los trabajos, tareas y talleres de la materia **Programación Avanzada**. Cada estudiante tendrá su propia rama de trabajo donde podrá subir sus entregas de manera organizada y sin pisar el trabajo de los demás.

---

## 🧰 ¿Qué necesito para empezar?

Antes de usar este repositorio, asegurate de tener instalado:

- Git
- Una cuenta en GitHub
- Un editor de código (por ejemplo, VS Code)

Podés trabajar desde cualquier sistema operativo, ya sea Windows, Linux o macOS.

---

## 🔄 ¿Cómo subo mis trabajos?

### 1. Cloná el repositorio

Tenés dos formas de hacerlo:

#### Opción 1: Con SSH (si ya lo tenés configurado)

```bash
git clone git@github.com:SubaruDev0/ProgramacionAvanzada2025.git
````

#### Opción 2: Con HTTPS (más simple si no configuraste claves)

```bash
git clone https://github.com/SubaruDev0/ProgramacionAvanzada2025.git
```

Después entrás a la carpeta del proyecto:

```bash
cd ProgramacionAvanzada2025
```

---

### 2. Creá tu rama personal

Cada estudiante debe tener su propia rama para trabajar. Usá tu nombre para que sea fácil de identificar.

```bash
git checkout -b TuNombre
```

Por ejemplo:

```bash
git checkout -b AgustinLopez
```

---

### 3. Creá una carpeta para la actividad

Dentro de tu rama, creá una carpeta con el nombre de la tarea, taller o trabajo. Ahí va todo lo relacionado a esa actividad.

```bash
mkdir Taller1
```

Guardá adentro tus archivos: código, capturas, PDFs, etc.

---

### 4. Guardá y subí tus cambios

Una vez que tengas todo listo:

```bash
git add .
git commit -m "Subo Taller 1"
git push -u origin TuNombre
```

> Asegurate de que estás en tu rama antes de hacer `push`.

---

### 5. Revisá en GitHub

Podés ver tu rama en la página del repositorio. Ahí podés revisar tus archivos o hacer un **Pull Request** si querés integrar algo a otra rama (como a `main` o `Subaru`, según indique el grupo o el profe).

---

## ✅ Reglas y organización

* **Una rama por persona**. No trabajes en la rama de otro.
* **Una carpeta por actividad**. Ejemplo: `Taller2/`, `TP_Final/`, etc.
* **No modifiques archivos de otros compañeros.**
* Usá nombres claros en los commits, por ejemplo:

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

Podés usar cualquier tipo de archivo según lo que te pidan: `.java`, `.html`, `.css`, `.js`, `.pdf`, etc.

---

## 🙋‍♂️ ¿Dudas?

Consultá con quien esté coordinando el repositorio en el grupo o preguntale a algún compañero que ya haya hecho el proceso. Lo importante es que todos podamos trabajar bien y sin romper nada 😅

---

¡A meterle KBROS! 🔥💻

````

---

### ✅ Listo para subir

Si querés, te dejo los comandos para agregar este README al repo:

```bash
# Asegurate de estar en tu rama (por ejemplo, Subaru)
git checkout Subaru

# Crear el archivo
nano README.md
# (Pega ahí todo el contenido, guardá con CTRL + O y salí con CTRL + X)

# Subirlo
git add README.md
git commit -m "docs: Agrega README con guía de uso colaborativo"
git push origin Subaru
````


