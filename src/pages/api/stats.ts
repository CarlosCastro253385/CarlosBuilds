import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = false;

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const allTags = new Set(posts.flatMap((p: any) => p.data.tags || []));

  const stats = {
    status: 'online',
    serverTimestamp: new Date().toISOString(),
    metrics: {
      totalPosts: posts.length,
      miniProjects: posts.filter((p: any) => p.data.category === 'MINI-PROYECTO').length,
      problemsSolved: posts.filter((p: any) => p.data.category === 'PROBLEMA-RESUELTO').length,
      totalTags: allTags.size
    }
  };

  return new Response(JSON.stringify(stats), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};