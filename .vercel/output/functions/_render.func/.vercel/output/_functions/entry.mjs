import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DAy51PXZ.mjs';
import { manifest } from './manifest_DPsAmeQ9.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/category.astro.mjs');
const _page2 = () => import('./pages/api/posts.astro.mjs');
const _page3 = () => import('./pages/api/search.astro.mjs');
const _page4 = () => import('./pages/api/stats.astro.mjs');
const _page5 = () => import('./pages/blog/_slug_.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/category.ts", _page1],
    ["src/pages/api/posts.ts", _page2],
    ["src/pages/api/search.ts", _page3],
    ["src/pages/api/stats.ts", _page4],
    ["src/pages/blog/[slug].astro", _page5],
    ["src/pages/blog/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d09c414d-44ec-496f-8940-a52c60913ead",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
