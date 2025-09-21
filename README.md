
-----

# 📚 Programación Avanzada 2025 - Repositorio de entregas

Bienvenido al repositorio oficial de **Programación Avanzada 2025**. Aquí centralizaremos todos los **trabajos**, **tareas** y **talleres** del curso de manera organizada y colaborativa.

Cada estudiante trabajará en su propia rama para subir sus entregas sin interferir con el trabajo de los demás. El objetivo es mantener una estructura clara, ordenada y fácil de mantener.

-----

## 📑 Índice

* [⚙️ Requisitos previos](#️-requisitos-previos)
* [🚀 ¿Cómo subir tus trabajos?](#-cómo-subir-tus-trabajos)
  - [1. Clonar el repositorio](#1-clonar-el-repositorio)
  - [2. Crear una rama con tu nombre](#2-crear-una-rama-con-tu-nombre)
  - [3. Crear una carpeta para la actividad](#3-crear-una-carpeta-para-la-actividad)
  - [4. Guardar y subir tus cambios](#4-guardar-y-subir-tus-cambios)
  - [5. Verifica tu rama en GitHub](#5-verifica-tu-rama-en-github)
* [🧭 Reglas de trabajo](#-reglas-de-trabajo)
* [📁 Estructura sugerida](#-estructura-sugerida)
* [🍥 Flujo de trabajo de git](#-flujo-de-trabajo-de-git)
  - [Clonado](#clonado)
  - [Cambios Locales](#cambios-locales)
  - [Stage](#stage)
  - [Commit](#commit)
  - [Server](#server)
* [❓ Dudas o consultas](#-dudas-o-consultas)

---

## ⚙️ Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente:

  - Git instalado en tu sistema.
  - Una cuenta activa en GitHub.
  - Un editor de código (recomendado: Visual Studio Code).
  - Acceso a la terminal o consola.

Compatible con Windows, Linux y macOS.

-----

## 👤 Configuración Global de Git

Antes de empezar a trabajar, es crucial configurar tu **nombre de usuario** y **correo electrónico** globalmente en Git. Esto asegura que cada `commit` que realices esté asociado a tu identidad.

Abre tu terminal o consola y ejecuta los siguientes comandos, reemplazando `Tu Nombre` y `tu.correo@ejemplo.com` con tus datos:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu.correo@ejemplo.com"
```

Puedes verificar tu configuración con:

```bash
git config --global user.name
git config --global user.email
```

-----

## 🚀 ¿Cómo subir tus trabajos?

### 1\. Clonar el repositorio

Puedes clonar este repositorio de dos maneras:

  * **HTTPS** (más simple si no configuraste claves):

    ```bash
    git clone https://github.com/SubaruDev0/ProgramacionAvanzada2025.git
    ```

  * **SSH** (si ya configuraste tus claves SSH):

    ```bash
    git clone git@github.com:SubaruDev0/ProgramacionAvanzada2025.git
    ```

Luego entra a la carpeta del proyecto:

```bash
cd ProgramacionAvanzada2025
```

-----

### 2\. Crear una rama con tu nombre

Cada estudiante debe tener su propia rama. Crea la tuya ejecutando el siguiente comando:

```bash
git checkout -b TuNombre
```

Ejemplo:

```bash
git checkout -b Blas-Mardones
```

-----

### 3\. Crear una carpeta para la actividad

En tu rama, crea una carpeta con el nombre de la tarea o taller que vas a entregar, lo puedes hacer con tu editor de archivos o con el siguiente comando:

```bash
mkdir Taller1
```

Dentro de esa carpeta debes guardar todos los archivos relacionados: código, imágenes, documentos, etc.

-----

### 4\. Guardar y subir tus cambios

Una vez que tengas tus archivos y/o cambios listos, tendrás que subirlos:

> Para agregar contenido al **Stage** ("." es para aplicar todos los cambios, pero se puede hacer en un archivo específico).

```bash
git add .
git add ejemplo.txt
```

> Para **commitear** ("comentar") los cambios que subiste al Stage.

```bash
git commit -m "Subo Taller 1"
```

> Asegúrate de estar en tu rama antes de hacer `push`.

> Sube los commits al repositorio remoto (-u se usa cuando es una nueva rama).

```bash
git push -u origin NombreRama
git push origin NombreRama
```

-----

### 5\. Verifica tu rama en GitHub

Ingresa a la página del repositorio en GitHub. Desde ahí podrás revisar tu rama y, si corresponde, abrir un **Pull Request** para fusionar tus cambios con otra rama (por ejemplo, `main`).

-----

## 🧭 Reglas de trabajo

  * ✅ Una rama por persona.

  * 📁 Una carpeta por entrega (usa nombres claros).

  * 🚫 No modificar archivos de otros compañeros.

  * 📝 Commits claros y específicos. Ejemplos:

      * `"Subo Taller 2 con HTML y CSS"`
      * `"Agrego ejercicios resueltos de clases en Java"`

-----

## 📁 Estructura sugerida

```bash
ProgramacionAvanzada2025/
├── Taller1_Blas/
│   ├── index.html
│   └── estilos.css
├── README.md (viene por default con el repo)
```

Se permiten archivos en cualquier formato necesario para la entrega: `.java`, `.html`, `.css`, `.js`, `.pdf`, entre otros.

-----

## 🍥 Flujo de trabajo de git

  * ### **Clonado**

    La primera etapa, y la más fundamental, es la de clonar el proyecto. Una vez que el proyecto está clonado, se puede trabajar con él. (Para más detalles, revisar el apartado "Clonado con GitHub Desktop" en la sección "Cómo usar Git (GitHub Desktop)").

  * ### **Cambios Locales**

    En esta etapa, se realizan los cambios al proyecto en la máquina local donde se clonó. Sin embargo, estos cambios no serán registrados en Git a menos que se sigan una serie de pasos importantes para que Git pueda rastrear y registrar los cambios realizados.

    Para que Git siga el proceso, es necesario pasar los archivos cambiados y/o agregados a la etapa de **stage** mediante el comando `add`.

  * ### **Stage**

    En la etapa de **stage**, los cambios realizados en el proyecto se introducen mediante el `add`. Una vez que los cambios están en la etapa de stage, pueden pasar a la etapa de commit.

    En esta etapa, aunque se pueden seguir haciendo cambios en el proyecto, estos no estarán oficialmente registrados en Git hasta que lleguen a la etapa de **commit**.

  * ### **Commit**

    Con los cambios guardados en la etapa de stage, se procede a la etapa de **commit**.

    En esta etapa, los cambios guardados en stage se registran junto con una descripción. Esta descripción, denominada commit, es fundamental para que los colaboradores entiendan qué cambios importantes se realizaron en el proyecto. (Para más detalles, revisar el apartado "Buenas prácticas de Git").

    Es importante asegurarse de que los archivos relevantes al cambio que se va a registrar estén en el stage antes de realizar el commit. Esto garantiza que el commit sea coherente con el progreso del proyecto. (Para más información, revisar la sección "Buenas prácticas en Git").

  * ### **Server**

    Finalmente, en la etapa de **server**, se establece la comunicación con el servicio que almacenará el proyecto (GitHub, en este caso).

    El contenido que se sube al servidor es el que se encuentra en la etapa de commit. Por esta razón, es crucial pasar los cambios del stage a un commit antes de intentar subirlos al servidor.

## ❓ Dudas o consultas

Si tienes preguntas o necesitas ayuda:

  * Puedes escribirme directamente si tienes mi contacto.
  * O consultar a un compañero con experiencia.

El objetivo es trabajar de manera ordenada, colaborativa y sin complicaciones.

-----
