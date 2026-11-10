---
title: Solución al error de CORS y tipos en Astro con Decap CMS
category: PROBLEMA-RESUELTO
summary: Cómo configuramos colecciones duales (Markdown y JSON) en Astro sin
  perder el tipado estricto de TypeScript.
date: 2026-11-09
tags:
  - astro
---
Al construir mi sitio web personal (\*\*CarlosBuilds\*\*), necesité combinar dos tipos de datos completamente distintos:

1. \*\*Landing Page:\*\* Estructura fija (JSON) administrada desde un solo archivo.

2. \*\*Blog:\*\* Artículos dinámicos en formato Markdown.



\## La Solución

Utilizamos las \*\*Content Collections\*\* de Astro declarando dos esquemas con Zod en \`src/content/config.ts\`:



\`\``typescript

// Colección de datos estáticos

const landingCollection = defineCollection({

  type: 'data',

  schema: z.object({ ... })

});



// Colección de artículos

const blogCollection = defineCollection({

  type: 'content',

  schema: z.object({ ... })

});
