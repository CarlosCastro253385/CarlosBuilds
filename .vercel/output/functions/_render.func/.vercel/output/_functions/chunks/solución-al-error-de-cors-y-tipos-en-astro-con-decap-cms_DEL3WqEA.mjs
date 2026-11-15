const id = "solución-al-error-de-cors-y-tipos-en-astro-con-decap-cms.md";
						const collection = "blog";
						const slug = "solución-al-error-de-cors-y-tipos-en-astro-con-decap-cms";
						const body = "Al construir mi sitio web personal (\\*\\*CarlosBuilds\\*\\*), necesité combinar dos tipos de datos completamente distintos:\r\n\r\n1. \\*\\*Landing Page:\\*\\* Estructura fija (JSON) administrada desde un solo archivo.\r\n\r\n2. \\*\\*Blog:\\*\\* Artículos dinámicos en formato Markdown.\r\n\r\n\r\n\r\n\\## La Solución\r\n\r\nUtilizamos las \\*\\*Content Collections\\*\\* de Astro declarando dos esquemas con Zod en \\`src/content/config.ts\\`:\r\n\r\n\r\n\r\n\\`\\``typescript\r\n\r\n// Colección de datos estáticos\r\n\r\nconst landingCollection = defineCollection({\r\n\r\n  type: 'data',\r\n\r\n  schema: z.object({ ... })\r\n\r\n});\r\n\r\n\r\n\r\n// Colección de artículos\r\n\r\nconst blogCollection = defineCollection({\r\n\r\n  type: 'content',\r\n\r\n  schema: z.object({ ... })\r\n\r\n});\r\n";
						const data = {title:"Solución al error de CORS y tipos en Astro con Decap CMS",date:"2026-11-09",category:"PROBLEMA-RESUELTO",summary:"Cómo configuramos colecciones duales (Markdown y JSON) en Astro sin perder el tipado estricto de TypeScript.",tags:["astro"]};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/content/blog/solución-al-error-de-cors-y-tipos-en-astro-con-decap-cms.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
