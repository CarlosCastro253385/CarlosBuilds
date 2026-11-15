import { g as getCollection } from '../../chunks/_astro_content_DMtg91sj.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    const posts = await getCollection("blog");
    const data = posts.map((post) => ({
      slug: post.slug,
      title: post.data.title,
      category: post.data.category,
      summary: post.data.summary,
      date: post.data.date,
      tags: post.data.tags || []
    }));
    return new Response(JSON.stringify({
      success: true,
      total: data.length,
      data
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Error al consultar posts" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
