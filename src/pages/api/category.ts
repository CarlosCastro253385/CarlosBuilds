import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const categoryName = url.searchParams.get('name')?.toUpperCase();

  const posts = await getCollection('blog');

  if (!categoryName) {
    const categories = Array.from(new Set(posts.map((p: any) => p.data.category)));
    return new Response(JSON.stringify({ availableCategories: categories }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const filteredPosts = posts
    .filter((p: any) => p.data.category === categoryName)
    .map((p: any) => ({
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
    headers: { 'Content-Type': 'application/json' }
  });
};