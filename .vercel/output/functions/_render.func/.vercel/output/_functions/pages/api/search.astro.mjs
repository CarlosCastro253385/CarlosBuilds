import { g as getCollection } from '../../chunks/_astro_content_DMtg91sj.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.toLowerCase() || "";
  if (!query) {
    return new Response(JSON.stringify({
      success: false,
      message: "Debes proporcionar un parámetro de búsqueda. Ejemplo: ?q=git"
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const posts = await getCollection("blog");
  const results = posts.filter(
    (post) => post.data.title.toLowerCase().includes(query) || post.data.summary.toLowerCase().includes(query) || post.data.tags?.some((tag) => tag.toLowerCase().includes(query))
  ).map((post) => ({
    title: post.data.title,
    slug: post.slug,
    category: post.data.category,
    summary: post.data.summary
  }));
  return new Response(JSON.stringify({
    success: true,
    query,
    count: results.length,
    results
  }), {
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
