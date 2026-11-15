import { g as getCollection } from '../../chunks/_astro_content_DMtg91sj.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const url = new URL(request.url);
  const categoryName = url.searchParams.get("name")?.toUpperCase();
  const posts = await getCollection("blog");
  if (!categoryName) {
    const categories = Array.from(new Set(posts.map((p) => p.data.category)));
    return new Response(JSON.stringify({ availableCategories: categories }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  const filteredPosts = posts.filter((p) => p.data.category === categoryName).map((p) => ({
    title: p.data.title,
    slug: p.slug,
    date: p.data.date
  }));
  return new Response(JSON.stringify({
    category: categoryName,
    count: filteredPosts.length,
    posts: filteredPosts
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
