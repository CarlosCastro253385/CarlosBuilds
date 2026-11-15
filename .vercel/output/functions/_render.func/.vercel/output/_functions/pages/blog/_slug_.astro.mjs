import { c as createComponent, a as renderHead, b as renderComponent, r as renderTemplate, d as createAstro } from '../../chunks/astro/server_Ds78it2i.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_DMtg91sj.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`<html lang="es" class="dark"> <head><meta charset="utf-8"><title>${entry.data.title} — CarlosBuilds</title>${renderHead()}</head> <body class="bg-gray-950 text-gray-100 min-h-screen font-sans p-6"> <main class="max-w-3xl mx-auto space-y-6"> <a href="/" class="text-cyan-400 hover:underline">← Volver al inicio</a> <h1 class="text-3xl font-bold text-white">${entry.data.title}</h1> <p class="text-gray-400 text-sm">${entry.data.date} • ${entry.data.category}</p> <hr class="border-gray-800"> <article class="prose prose-invert max-w-none"> ${renderComponent($$result, "Content", Content, {})} </article> </main> </body></html>`;
}, "C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
