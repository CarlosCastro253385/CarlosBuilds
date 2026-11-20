import type { APIRoute } from 'astro';

export const prerender = false;

const env = (k: string): string | undefined =>
  (import.meta.env as any)[k] ?? (globalThis as any).process?.env?.[k];

export const GET: APIRoute = () => {
  const clientId = env('GITHUB_CLIENT_ID');
  if (!clientId) {
    return new Response('Falta GITHUB_CLIENT_ID en Vercel', { status: 500 });
  }

  const state = crypto.randomUUID();
  const params = new URLSearchParams({
    client_id: clientId,
    scope: 'repo,user',
    state,
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
      'Set-Cookie': `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  });
};