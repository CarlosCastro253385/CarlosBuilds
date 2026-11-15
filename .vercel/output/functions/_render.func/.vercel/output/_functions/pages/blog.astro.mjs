import { c as createComponent, r as renderTemplate, e as addAttribute, a as renderHead } from '../chunks/astro/server_Ds78it2i.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DMtg91sj.mjs';
/* empty css                                  */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const totalPosts = posts.length;
  const miniProjectsCount = posts.filter((p) => p.data.category === "MINI-PROYECTO").length;
  const problemsSolvedCount = posts.filter((p) => p.data.category === "PROBLEMA-RESUELTO").length;
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.data.tags || []))
  );
  const contactEmail = "cruzcastro4@gmail.com";
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="dark" data-astro-cid-5tznm7mj> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>CarlosBuilds \u2014 Mini proyectos y problemas reales</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">', '</head> <body class="font-sans text-slate-400 min-h-screen antialiased selection:bg-cyan-400 selection:text-black" data-astro-cid-5tznm7mj> <!-- ENCABEZADO --> <header class="border-b border-slate-800/60 bg-[#050810]/80 backdrop-blur-md sticky top-0 z-50" data-astro-cid-5tznm7mj> <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-sm" data-astro-cid-5tznm7mj> <a href="/" class="font-mono text-slate-100 hover:text-cyan-400 transition-colors flex items-center gap-2" data-astro-cid-5tznm7mj> <span class="text-cyan-400" data-astro-cid-5tznm7mj>&gt;</span> CarlosBuilds<span class="inline-block w-2 h-4 bg-cyan-400 blink-cursor" data-astro-cid-5tznm7mj></span> </a> <div class="flex items-center gap-3 font-mono text-xs" data-astro-cid-5tznm7mj> <!-- BOT\xD3N COPIAR EMAIL --> <button id="copy-email-btn"', ' class="flex items-center gap-2 bg-[#0b1120] text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-400/50 px-3 py-1.5 rounded transition-all cursor-pointer" data-astro-cid-5tznm7mj> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-5tznm7mj></path> </svg> <span id="email-btn-text" data-astro-cid-5tznm7mj>Copiar Email</span> </button> <div class="hidden sm:flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-1 rounded-full" data-astro-cid-5tznm7mj> <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" data-astro-cid-5tznm7mj></span>\nDisponible\n</div> </div> </div> </header> <!-- CONTENIDO PRINCIPAL --> <main class="max-w-6xl mx-auto px-4 py-12" data-astro-cid-5tznm7mj> <!-- HERO SECTION --> <section class="mb-12" data-astro-cid-5tznm7mj> <div class="font-mono text-xs text-cyan-400 mb-3 flex items-center gap-2" data-astro-cid-5tznm7mj> <span data-astro-cid-5tznm7mj>~ / CarlosBuilds / blog</span> </div> <h1 class="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-4 max-w-2xl leading-tight" data-astro-cid-5tznm7mj>\nMini proyectos, <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" data-astro-cid-5tznm7mj>problemas reales</span> y lo que aprend\xED.\n</h1> <p class="text-slate-400 max-w-2xl text-base mb-6 leading-relaxed" data-astro-cid-5tznm7mj>\nEscribo sobre lo que construyo y lo que rompo. Backend, herramientas de l\xEDnea de comandos, bases de datos y los errores que nadie documenta bien.\n</p> <div class="font-mono text-xs text-slate-500 flex items-center gap-4" data-astro-cid-5tznm7mj> <span data-astro-cid-5tznm7mj><strong class="text-slate-100" id="counter-total" data-astro-cid-5tznm7mj>', '</strong> posts publicados</span> </div> </section> <!-- GRID PRINCIPAL --> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8" data-astro-cid-5tznm7mj> <!-- COLUMNA IZQUIERDA: FILTROS + LISTA DE ART\xCDCULOS --> <div class="lg:col-span-8" data-astro-cid-5tznm7mj> <!-- BOTONES DE FILTRO DE CATEGOR\xCDA --> <div class="flex flex-wrap gap-2 mb-6 font-mono text-xs" id="category-filters" data-astro-cid-5tznm7mj> <button data-filter="TODOS" class="cat-btn active bg-cyan-400 text-black font-bold px-3 py-1.5 rounded transition-all" data-astro-cid-5tznm7mj>\nTODOS\n</button> <button data-filter="MINI-PROYECTO" class="cat-btn bg-[#0b1120] text-slate-400 border border-slate-800 hover:border-slate-600 px-3 py-1.5 rounded transition-all" data-astro-cid-5tznm7mj>\nMINI-PROYECTO\n</button> <button data-filter="PROBLEMA-RESUELTO" class="cat-btn bg-[#0b1120] text-slate-400 border border-slate-800 hover:border-slate-600 px-3 py-1.5 rounded transition-all" data-astro-cid-5tznm7mj>\nPROBLEMA-RESUELTO\n</button> </div> <!-- CONTENEDOR DE POSTS --> <div class="space-y-4" id="posts-container" data-astro-cid-5tznm7mj> ', ' </div> <div id="no-results" class="hidden text-center py-12 border border-dashed border-slate-800 rounded-lg font-mono text-xs text-slate-500" data-astro-cid-5tznm7mj>\nNo se encontraron art\xEDculos con estos filtros.\n</div> </div> <!-- COLUMNA DERECHA: SIDEBAR --> <aside class="lg:col-span-4 space-y-6" data-astro-cid-5tznm7mj> <!-- SOBRE M\xCD --> <div class="bg-[#0b1120] border border-slate-800/80 rounded-lg p-5" data-astro-cid-5tznm7mj> <div class="font-mono text-xs text-cyan-400 mb-2" data-astro-cid-5tznm7mj>// SOBRE MI</div> <p class="text-xs text-slate-400 leading-relaxed mb-4" data-astro-cid-5tznm7mj>\nHola, soy Carlos. Construyo proyectos web y de backend para entender cosas grandes. Todo lo que aprendo y resuelvo, lo escribo aqu\xED.\n</p> <div class="font-mono text-xs flex flex-wrap gap-4 text-cyan-400" data-astro-cid-5tznm7mj> <a href="https://github.com/CarlosCastro253385/" target="_blank" class="hover:underline" data-astro-cid-5tznm7mj>GitHub</a> <a href="https://www.instagram.com/slrc_ttr/" target="_blank" class="hover:underline" data-astro-cid-5tznm7mj>Instagram</a> <button class="copy-email-link hover:underline text-left cursor-pointer"', " data-astro-cid-5tznm7mj>Contacto</button> </div> </div> <!-- TAGS INTERACTIVOS --> ", ' <!-- STATS AUTOM\xC1TICAS --> <div class="bg-[#0b1120] border border-slate-800/80 rounded-lg p-5 font-mono text-xs space-y-2" data-astro-cid-5tznm7mj> <div class="text-cyan-400 mb-3" data-astro-cid-5tznm7mj>// STATS</div> <div class="flex justify-between text-slate-400" data-astro-cid-5tznm7mj> <span data-astro-cid-5tznm7mj>total posts</span> <span class="text-cyan-400 font-bold" data-astro-cid-5tznm7mj>', '</span> </div> <div class="flex justify-between text-slate-400" data-astro-cid-5tznm7mj> <span data-astro-cid-5tznm7mj>mini-proyectos</span> <span class="text-cyan-400 font-bold" data-astro-cid-5tznm7mj>', '</span> </div> <div class="flex justify-between text-slate-400" data-astro-cid-5tznm7mj> <span data-astro-cid-5tznm7mj>problemas resueltos</span> <span class="text-cyan-400 font-bold" data-astro-cid-5tznm7mj>', '</span> </div> <div class="flex justify-between text-slate-400" data-astro-cid-5tznm7mj> <span data-astro-cid-5tznm7mj>tags distintos</span> <span class="text-cyan-400 font-bold" data-astro-cid-5tznm7mj>', `</span> </div> </div> </aside> </div> </main> <!-- FOOTER --> <footer class="border-t border-slate-800/60 mt-20 py-8 text-center font-mono text-xs text-slate-600" data-astro-cid-5tznm7mj> <p data-astro-cid-5tznm7mj>\xA9 2026 CarlosBuilds \xB7 El hombre aprende mientras vive \xB7 sin cookies, sin trackers</p> </footer> <!-- SCRIPTS CLIENT SIDE --> <script>
    // --- L\xD3GICA DE COPIAR CORREO ---
    const copyBtn = document.getElementById('copy-email-btn');
    const btnText = document.getElementById('email-btn-text');
    const emailLinks = document.querySelectorAll('.copy-email-link');

    function copyToClipboard(email) {
      navigator.clipboard.writeText(email).then(() => {
        if (btnText) {
          const originalText = btnText.innerText;
          btnText.innerText = '\u2713 \xA1Copiado!';
          setTimeout(() => {
            btnText.innerText = originalText;
          }, 2000);
        }
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const email = copyBtn.dataset.email;
        copyToClipboard(email);
      });
    }

    emailLinks.forEach(link => {
      link.addEventListener('click', () => {
        const email = link.dataset.email;
        copyToClipboard(email);
      });
    });

    // --- L\xD3GICA DE FILTRADO DE POSTS ---
    let activeCategory = 'TODOS';
    let activeTag = null;

    const cards = document.querySelectorAll('.post-card');
    const noResults = document.getElementById('no-results');
    const catBtns = document.querySelectorAll('.cat-btn');
    const tagBtns = document.querySelectorAll('.tag-btn');
    const counterTotal = document.getElementById('counter-total');

    function applyFilters() {
      let visibleCount = 0;

      cards.forEach(card => {
        const category = card.dataset.category;
        const tags = JSON.parse(card.dataset.tags || '[]');

        const matchCategory = activeCategory === 'TODOS' || category === activeCategory;
        const matchTag = activeTag === null || tags.includes(activeTag);

        if (matchCategory && matchTag) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (counterTotal) {
        counterTotal.innerText = visibleCount.toString();
      }

      if (noResults) {
        if (visibleCount === 0) {
          noResults.classList.remove('hidden');
        } else {
          noResults.classList.add('hidden');
        }
      }
    }

    // Eventos de botones de categor\xEDa
    catBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        catBtns.forEach(b => {
          b.className = "cat-btn bg-[#0b1120] text-slate-400 border border-slate-800 hover:border-slate-600 px-3 py-1.5 rounded transition-all";
        });
        btn.className = "cat-btn active bg-cyan-400 text-black font-bold px-3 py-1.5 rounded transition-all";
        
        activeCategory = btn.dataset.filter || 'TODOS';
        applyFilters();
      });
    });

    // Eventos de botones de tags
    tagBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag || null;

        if (activeTag === tag) {
          activeTag = null;
          btn.className = "tag-btn bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-600 px-2 py-1 rounded transition-all";
        } else {
          tagBtns.forEach(b => {
            b.className = "tag-btn bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-600 px-2 py-1 rounded transition-all";
          });
          btn.className = "tag-btn bg-cyan-400 text-black font-bold border border-cyan-400 px-2 py-1 rounded transition-all";
          activeTag = tag;
        }

        applyFilters();
      });
    });
  <\/script> </body> </html>`])), renderHead(), addAttribute(contactEmail, "data-email"), totalPosts, posts.map((post) => renderTemplate`<article class="post-card bg-[#0b1120] border border-slate-800/80 hover:border-cyan-400/50 rounded-lg p-6 transition-all duration-200 group"${addAttribute(post.data.category, "data-category")}${addAttribute(JSON.stringify(post.data.tags || []), "data-tags")} data-astro-cid-5tznm7mj> <div class="flex justify-between items-center font-mono text-xs mb-3" data-astro-cid-5tznm7mj> <span class="bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 px-2 py-0.5 rounded font-semibold" data-astro-cid-5tznm7mj> ${post.data.category} </span> </div> <h2 class="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-5tznm7mj>${post.data.title}</a> </h2> <p class="text-xs text-slate-400 leading-relaxed mb-4" data-astro-cid-5tznm7mj> ${post.data.summary} </p> <div class="flex flex-wrap justify-between items-center font-mono text-[11px] text-slate-500 pt-3 border-t border-slate-800/40 gap-2" data-astro-cid-5tznm7mj> <div class="flex gap-1.5 flex-wrap" data-astro-cid-5tznm7mj> ${post.data.tags?.map((tag) => renderTemplate`<span class="bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded" data-astro-cid-5tznm7mj>
#${tag} </span>`)} </div> <div class="flex items-center gap-3" data-astro-cid-5tznm7mj> <span data-astro-cid-5tznm7mj>${post.data.date}</span> <a${addAttribute(`/blog/${post.slug}`, "href")} class="text-cyan-400 hover:underline" data-astro-cid-5tznm7mj>Leer artículo →</a> </div> </div> </article>`), addAttribute(contactEmail, "data-email"), allTags.length > 0 && renderTemplate`<div class="bg-[#0b1120] border border-slate-800/80 rounded-lg p-5" data-astro-cid-5tznm7mj> <div class="font-mono text-xs text-cyan-400 mb-3" data-astro-cid-5tznm7mj>// TAGS</div> <div class="flex flex-wrap gap-1.5 font-mono text-[11px]" id="tags-container" data-astro-cid-5tznm7mj> ${allTags.map((tag) => renderTemplate`<button${addAttribute(tag, "data-tag")} class="tag-btn bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-600 px-2 py-1 rounded transition-all" data-astro-cid-5tznm7mj>
#${tag} </button>`)} </div> </div>`, totalPosts, miniProjectsCount, problemsSolvedCount, allTags.length);
}, "C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
