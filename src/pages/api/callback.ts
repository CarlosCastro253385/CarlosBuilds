import type { APIRoute } from 'astro';

export const prerender = false;

const env = (k: string): string | undefined =>
  (import.meta.env as any)[k] ?? (globalThis as any).process?.env?.[k];

function respuesta(status: 'success' | 'error', contenido: Record<string, string>) {
  const mensaje = `authorization:github:${status}:${JSON.stringify(contenido)}`;
  const html = `<!doctype html>
<html>
  <body>
    <script>
      (function () {
        var msg = ${JSON.stringify(mensaje)};
        function recibir(e) {
          window.opener.postMessage(msg, e.origin);
        }
        window.addEventListener('message', recibir, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script>
  </body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Set-Cookie': 'oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
    },
  });
}

export const GET: APIRoute = async ({ url, request }) => {
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  const cookies = request.headers.get('cookie') ?? '';
  const estadoGuardado = cookies
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith('oauth_state='))
    ?.split('=')[1];

  if (!code || !state || state !== estadoGuardado) {
    return respuesta('error', { message: 'Estado de autenticación inválido. Intenta de nuevo.' });
  }

  const clientId = env('GITHUB_CLIENT_ID');
  const clientSecret = env('GITHUB_CLIENT_SECRET');
  if (!clientId || !clientSecret) {
    return respuesta('error', { message: 'Faltan las variables de GitHub en Vercel.' });
  }

  try {
    const res = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await res.json();

    if (!data.access_token) {
      return respuesta('error', { message: data.error_description || 'GitHub no devolvió token.' });
    }

    return respuesta('success', { token: data.access_token, provider: 'github' });
  } catch {
    return respuesta('error', { message: 'No se pudo hablar con GitHub.' });
  }
};