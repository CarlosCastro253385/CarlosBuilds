---
title: "Cómo subir tu proyecto a GitHub desde la terminal de VS Code"
date: "20 sep 2026"
category: "PROBLEMA-RESUELTO"
summary: "Guía paso a paso usando los comandos esenciales (git init, git add, git commit y git push) para publicar tu código sin instalar programas extra."
tags: ["git", "github", "vscode"]
---

Cuando estás empezando en el desarrollo web, una de los principales problemas no es escribir código HTML o CSS, sino entender **cómo publicar tu proyecto en GitHub** (porque a los maestros les encanta que usemos GitHub) desde la terminal sin que salgan errores raros o confusos.

En esta guía rápida vamos a resolver este problema paso a paso usando únicamente la terminal integrada de Visual Studio Code.

---

## Prerrequisitos

Antes de empezar, asegúrate de cumplir con estos tres puntos:

1. Tener **Git** instalado en tu computadora.
2. Tener una cuenta creada en [GitHub](https://github.com).
3. Tener la carpeta de tu proyecto abierta en Visual Studio Code.

---

## Paso 1: Inicializar el repositorio local

Abre la terminal en VS Code usando el atajo `Ctrl + ~` (o desde el menú superior en *Terminal > New Terminal*).

Asegúrate de estar en la carpeta raíz de tu proyecto y ejecuta:

- git init
Esto creará una carpeta oculta .git en tu proyecto, lo que le indica a Git que empiece a rastrear tus cambios.

## Paso 2: Crear el archivo .gitignore (Muy Importante)
Antes de agregar archivos, debes indicarle a Git qué carpetas no debe subir, como dependencias pesadas o archivos con claves secretas.

Crea un archivo llamado .gitignore en la raíz y agrega lo siguiente:

Plaintext
node_modules/
.astro/
dist/
.env

## Paso 3: Guardar los cambios (Git Add y Git Commit)
Ahora vamos a preparar todos tus archivos y tomar una "captura" del estado actual de tu código:

Agregar todos los archivos al área de preparación:

- git add .
Crear el commit con un mensaje descriptivo:

- git commit -m "feat: primer commit del proyecto"

## Paso 4: Crear el repositorio en GitHub
- Ve a tu cuenta de GitHub y haz clic en el botón verde New (Nuevo repositorio).

- Ponle un nombre a tu repositorio (por ejemplo, mi-blog-en-astro).

- Déjalo como Público o Privado.

- NO marques la opción de agregar un README, .gitignore o Licencia.

- Haz clic en Create repository.

## Paso 5: Conectar y subir tu código (Git Push)
GitHub te mostrará un bloque de comandos. Copia y pega en tu terminal las siguientes tres líneas (reemplazando la URL por la de tu repositorio):

- git branch -M main
- git remote add origin [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
- git push -u origin main

¡Y listo! Al presionar Enter, verás cómo la terminal sube todos tus archivos. Si recargas la página de GitHub, tu código ya estará publicado.

Resumen de comandos diarios
Una vez configurado, cada vez que hagas cambios en tu proyecto solo tendrás que repetir estos tres comandos:

``` Bash
git add .
git commit -m "mensaje de los cambios realizados"
git push origin main

---