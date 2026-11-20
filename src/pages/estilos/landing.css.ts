import type { APIRoute } from 'astro';
import css from '../../styles/landing.css?raw';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(css, {
    headers: { 'Content-Type': 'text/css; charset=utf-8' },
  });