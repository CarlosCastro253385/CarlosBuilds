import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q')?.toLowerCase() || '';

  if (!query) {
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Debes proporcionar un parámetro de búsqueda. Ejemplo: ?q=git' 
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const posts = await getCollection('blog');
  
  const results = posts.filter((post: CollectionEntry<'blog'>) => 
    post.data.title.toLowerCase().includes(query) ||
    post.data.summary.toLowerCase().includes(query) ||
    post.data.tags?.some((tag: string) => tag.toLowerCase().includes(query))
  ).map((post: CollectionEntry<'blog'>) => ({
    title: post.data.title,
    slug: post.slug,
    category: post.data.category,
    summary: post.data.summary
  }));

  return new Response(JSON.stringify({
    success: true,
    query: query,
    count: results.length,
    results: results
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};