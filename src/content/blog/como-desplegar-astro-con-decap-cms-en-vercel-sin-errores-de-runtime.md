---
title: Cómo desplegar Astro con Decap CMS en Vercel sin errores de runtime
category: PROBLEMA-RESUELTO
summary: "Guía práctica para evitar fallos comunes al publicar Astro en Vercel:
  ignorar la carpeta .vercel, forzar Node 20 y validar esquemas de contenido."
date: 2026-11-24
tags:
  - astro
  - vercel
  - decap-cms
---
Subir un proyecto de Astro con adaptador serverless a Vercel parece directo hasta que aparecen errores inesperados en el log de compilación. Estos fueron los tres bloqueos reales que surgieron al montar este blog y cómo quedaron resueltos.

## 1. Error de runtime `nodejs18.x` y artefactos locales

Cuando ejecutas `npm run build` en tu computadora antes de subir el repositorio, Astro genera la carpeta `.vercel/output`. Si esa carpeta se sube a GitHub, Vercel intenta reutilizarla en lugar de compilar en la nube y falla si apunta a una versión antigua de Node.

**Solución:**
* Agrega `.vercel/` y `.astro/` a tu archivo `.gitignore`.
* Elimina la carpeta rastreada en Git sin borrar tus archivos locales:

```bash
git rm -r --cached .vercel

Define "engines": { "node": "20.x" } en package.json y selecciona Node.js 20.x en Settings > General dentro de Vercel.
