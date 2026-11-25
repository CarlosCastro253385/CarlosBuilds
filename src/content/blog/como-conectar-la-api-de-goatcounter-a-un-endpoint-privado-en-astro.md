---
title: Cómo conectar la API de GoatCounter a un endpoint privado en Astro
category: MINI-PROYECTO
summary: Guía completa para construir una ruta serverless en Astro protegida
  mediante OAuth de GitHub que consulta métricas reales de GoatCounter sin
  exponer tokens privados en el cliente.
date: 2026-11-12
tags:
  - goatcounter
  - astro
  - typescript
---
Cuando integras una herramienta de analítica ligera como GoatCounter en un sitio estático o híbrido con Astro, el script público solo se encarga de registrar visitas. Sin embargo, si quieres mostrar esas estadísticas dentro de tu propio panel administrativo, necesitas consultar su API privada sin exponer tus credenciales en el código del navegador.

Si haces la petición directamente desde el frontend con `fetch`, cualquier visitante que abra las herramientas de desarrollador podrá ver tu `GOATCOUNTER_TOKEN` en las cabeceras de red. La solución limpia es crear un intermediario (proxy) en el servidor mediante una API Route de Astro.

## 1. Arquitectura de seguridad y flujo de validación

El objetivo es que únicamente el dueño o colaborador del repositorio pueda leer los datos de tráfico. Como el panel ya utiliza Decap CMS autenticado con GitHub OAuth, podemos reutilizar ese mismo token de sesión para validar permisos en nuestro servidor:

1. **Petición desde el panel:** El navegador envía una solicitud `GET` a `/api/visitas?periodo=7d` incluyendo la cabecera `Authorization: Bearer <token_de_github>`.
2. **Verificación de identidad en GitHub:** Nuestro endpoint en Astro toma ese token y consulta la API oficial de GitHub (`https://api.github.com/repos/usuario/repositorio`). Si el usuario tiene `permissions.push === true`, confirmamos que es administrador autorizado.
3. **Consulta privada a GoatCounter:** Solo cuando la validación anterior es exitosa, el servidor lee `GOATCOUNTER_TOKEN` desde las variables de entorno de Vercel y consulta los datos de analítica.
4. **Respuesta controlada:** El servidor devuelve únicamente el JSON procesado al frontend con cabeceras de caché privada (`Cache-Control: private, max-age=60`) para evitar saturar la API externa si recargas el panel varias veces seguidas.

## 2. Configurando la ruta dinámica en Astro

Para que Vercel ejecute este archivo como una función serverless bajo demanda y no intente pre-renderizarlo como un archivo estático durante el `astro build`, es indispensable declarar `export const prerender = false` al inicio de `src/pages/api/visitas.ts`:

```typescript
import type { APIRoute } from 'astro';

export const prerender = false;

const GC_CODE = 'carlosbuilds';
const GITHUB_REPO = 'CarlosCastro253385/CarlosBuilds';

async function tieneAcceso(token: string): Promise<boolean> {
  try {
    const res = await fetch(`[https://api.github.com/repos/$](https://api.github.com/repos/$){GITHUB_REPO}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'carlosbuilds-panel',
      },
    });
    if (!res.ok) return false;
    const repo = await res.json();
    return repo?.permissions?.push === true;
  } catch {
    return false;
  }
}
```

3. El detalle técnico de la API v0 de GoatCounter
Un error habitual al trabajar con la API v0 de GoatCounter es intentar consultar un endpoint inexistente como /api/v0/stats/total, lo que devuelve un código 404 Not Found aunque tu token tenga todos los permisos activos.

En la arquitectura de GoatCounter, las métricas se consultan por categoría (/stats/hits, /stats/browsers, /stats/systems), y el endpoint /api/v0/stats/hits ya incluye tanto el desglose por ruta y día como el conteo global en la propiedad total:
```
const base = `https://${GC_CODE}[.goatcounter.com/api/v0](https://.goatcounter.com/api/v0)`;

async function pedir(ruta: string, gcToken: string) {
  const res = await fetch(base + ruta, {
    headers: {
      Authorization: `Bearer ${gcToken}`,
      Accept: 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error(`GoatCounter respondió ${res.status}`);
  }
  return res.json();
}
```
Además, GoatCounter exige que las fechas start y end estén en formato ISO 8601 redondeadas a la hora exacta (YYYY-MM-DDTHH:00:00Z). Al ejecutar en paralelo con Promise.all la consulta del periodo actual (&daily=true&limit=10) y la del periodo anterior equivalente, obtenemos en menos de 300 milisegundos todo lo necesario para calcular porcentajes de crecimiento, renderizar gráficas diarias y listar las páginas más visitadas sin comprometer la seguridad del sitio.
