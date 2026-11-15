import { g as getCollection } from '../../chunks/_astro_content_DMtg91sj.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  const posts = await getCollection("blog");
  const allTags = new Set(posts.flatMap((p) => p.data.tags || []));
  const stats = {
    status: "online",
    serverTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
    metrics: {
      totalPosts: posts.length,
      miniProjects: posts.filter((p) => p.data.category === "MINI-PROYECTO").length,
      problemsSolved: posts.filter((p) => p.data.category === "PROBLEMA-RESUELTO").length,
      totalTags: allTags.size
    }
  };
  return new Response(JSON.stringify(stats), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
