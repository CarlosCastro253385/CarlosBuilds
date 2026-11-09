import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  output: 'hybrid',
  adapter: isDev ? undefined : vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});