import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_Ds78it2i.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Al construir mi sitio web personal (**CarlosBuilds**), necesité combinar dos tipos de datos completamente distintos:</p>\n<ol>\n<li>\n<p>**Landing Page:** Estructura fija (JSON) administrada desde un solo archivo.</p>\n</li>\n<li>\n<p>**Blog:** Artículos dinámicos en formato Markdown.</p>\n</li>\n</ol>\n<p>## La Solución</p>\n<p>Utilizamos las **Content Collections** de Astro declarando dos esquemas con Zod en `src/content/config.ts`:</p>\n<p>```typescript</p>\n<p>// Colección de datos estáticos</p>\n<p>const landingCollection = defineCollection({</p>\n<p>type: ‘data’,</p>\n<p>schema: z.object({ … })</p>\n<p>});</p>\n<p>// Colección de artículos</p>\n<p>const blogCollection = defineCollection({</p>\n<p>type: ‘content’,</p>\n<p>schema: z.object({ … })</p>\n<p>});</p>";

				const frontmatter = {"title":"Solución al error de CORS y tipos en Astro con Decap CMS","category":"PROBLEMA-RESUELTO","summary":"Cómo configuramos colecciones duales (Markdown y JSON) en Astro sin perder el tipado estricto de TypeScript.","date":"2026-11-09T00:00:00.000Z","tags":["astro"]};
				const file = "C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/content/blog/solución-al-error-de-cors-y-tipos-en-astro-con-decap-cms.md";
				const url = undefined;
				function rawContent() {
					return "Al construir mi sitio web personal (\\*\\*CarlosBuilds\\*\\*), necesité combinar dos tipos de datos completamente distintos:\r\n\r\n1. \\*\\*Landing Page:\\*\\* Estructura fija (JSON) administrada desde un solo archivo.\r\n\r\n2. \\*\\*Blog:\\*\\* Artículos dinámicos en formato Markdown.\r\n\r\n\r\n\r\n\\## La Solución\r\n\r\nUtilizamos las \\*\\*Content Collections\\*\\* de Astro declarando dos esquemas con Zod en \\`src/content/config.ts\\`:\r\n\r\n\r\n\r\n\\`\\``typescript\r\n\r\n// Colección de datos estáticos\r\n\r\nconst landingCollection = defineCollection({\r\n\r\n  type: 'data',\r\n\r\n  schema: z.object({ ... })\r\n\r\n});\r\n\r\n\r\n\r\n// Colección de artículos\r\n\r\nconst blogCollection = defineCollection({\r\n\r\n  type: 'content',\r\n\r\n  schema: z.object({ ... })\r\n\r\n});\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
