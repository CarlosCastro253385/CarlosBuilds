import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const posts = await getCollection('blog');
    
    const data = posts.map((post: any) => ({
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
      data: data
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Error al consultar posts' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};