import type { APIRoute } from 'astro';

export const prerender = false;

// ---- Ajustes ----
const GC_CODE = 'carlosbuilds';
const GITHUB_REPO = 'CarlosCastro253385/CarlosBuilds';
const PERIODOS: Record<string, number> = {
  '1d': 1,
  '7d': 7,
  '14d': 14,
  '30d': 30,
  '90d': 90,
  '365d': 365,
};

const env = (k: string): string | undefined =>
  (import.meta.env as any)[k] ?? (globalThis as any).process?.env?.[k];

function json(cuerpo: unknown, status = 200, guardarEnCache = false) {
  return new Response(JSON.stringify(cuerpo), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': guardarEnCache ? 'private, max-age=60' : 'no-store',
    },
  });
}

// Fecha en el formato que entiende GoatCounter, redondeada a la hora
function iso(fecha: Date): string {
  const d = new Date(fecha);
  d.setUTCMinutes(0, 0, 0);
  return d.toISOString().replace('.000Z', 'Z');
}

function decodificar(texto: string): string {
  try {
    return decodeURIComponent(texto);
  } catch {
    return texto;
  }
}

// Comprueba con GitHub que el token de sesión es de alguien que puede escribir en tu repo
async function tieneAcceso(token: string): Promise<boolean> {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'carlosbuilds-panel',
      },
    });
    if (!res.ok) return false;
    const repo = await res.json();
    return repo?.permissions?.push === true;
  } catch {
    return false;
  }
}

// Reduce la respuesta de GoatCounter a lo que necesita el tablero
function resumir(datos: any) {
  const hits: any[] = Array.isArray(datos?.hits)
    ? datos.hits.filter((h: any) => !h?.event)
    : [];

  // Visitas por día, sumando todas las páginas (solo se usa el campo "daily")
  const porDia = new Map<string, number>();
  for (const h of hits) {
    const dias: any[] = Array.isArray(h?.stats) ? h.stats : [];
    for (const s of dias) {
      porDia.set(s.day, (porDia.get(s.day) ?? 0) + (Number(s.daily) || 0));
    }
  }

  const diario = Array.from(porDia.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([dia, visitas]) => ({ dia, visitas }));

  const paginas = hits
    .map((h: any) => ({
      ruta: decodificar(String(h?.path ?? '')),
      titulo: String(h?.title ?? ''),
      visitas: Number(h?.count) || 0,
    }))
    .sort((a, b) => b.visitas - a.visitas);

  return {
    total: Number(datos?.total) || 0,
    diario,
    paginas,
    hayMas: Boolean(datos?.more),
  };
}

export const GET: APIRoute = async ({ request, url }) => {
  // 1) Quién pregunta
  const auth = request.headers.get('authorization') ?? '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (!token) {
    return json({ error: 'Falta iniciar sesión en el panel.' }, 401);
  }
  if (!(await tieneAcceso(token))) {
    return json({ error: 'No tienes permiso para ver estas estadísticas.' }, 403);
  }

  // 2) Llave de GoatCounter (guardada en Vercel)
  const gcToken = env('GOATCOUNTER_TOKEN');
  if (!gcToken) {
    return json({ error: 'Falta GOATCOUNTER_TOKEN en Vercel.' }, 500);
  }

  // 3) Periodo pedido
  const periodo = url.searchParams.get('periodo') ?? '7d';
  const dias = PERIODOS[periodo];
  if (!dias) {
    return json({ error: 'Periodo no válido. Usa: ' + Object.keys(PERIODOS).join(', ') }, 400);
  }

  const fin = new Date();
  const inicio = new Date(fin.getTime() - dias * 86400000);
  const inicioAnterior = new Date(inicio.getTime() - dias * 86400000);

  const base = `https://${GC_CODE}.goatcounter.com/api/v0`;

  async function pedir(ruta: string) {
    const res = await fetch(base + ruta, {
      headers: { Authorization: `Bearer ${gcToken}`, Accept: 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`GoatCounter respondió ${res.status}`);
    }
    return res.json();
  }

  const q = (a: Date, b: Date) =>
    `start=${encodeURIComponent(iso(a))}&end=${encodeURIComponent(iso(b))}`;

  // 4) Consulta: periodo actual (con desglose diario) y periodo anterior (solo el total)
  try {
    const [hitsActual, hitsAnterior] = await Promise.all([
      pedir(`/stats/hits?${q(inicio, fin)}&daily=true&limit=100`),
      pedir(`/stats/hits?${q(inicioAnterior, inicio)}&limit=1`),
    ]);

    return json(
      {
        periodo,
        dias,
        rango: {
          inicio: iso(inicio),
          fin: iso(fin),
          inicioAnterior: iso(inicioAnterior),
        },
        actual: resumir(hitsActual),
        anterior: { total: Number(hitsAnterior?.total) || 0 },
      },
      200,
      true
    );
  } catch (e) {
    return json(
      { error: e instanceof Error ? e.message : 'No se pudo consultar GoatCounter.' },
      502
    );
  }
};