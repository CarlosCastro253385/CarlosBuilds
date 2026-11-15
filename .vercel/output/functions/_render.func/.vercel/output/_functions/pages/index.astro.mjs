import { c as createComponent, a as renderHead, e as addAttribute, r as renderTemplate } from '../chunks/astro/server_Ds78it2i.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getEntry } from '../chunks/_astro_content_DMtg91sj.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const landingEntry = await getEntry("landing", "index");
  const data = landingEntry.data;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Carlos Armando Cruz Castro | Ingeniero en IT</title>${renderHead()}</head> <body> <header> <nav class="nav-container"> <a href="/" class="logo">Carlos<span>Castro</span></a> <ul class="nav-links"> <li><a href="#contacto">Contacto</a></li> <li><a href="/blog">Blog</a></li> </ul> </nav> </header> <!-- SOBRE MÍ / HERO --> <section id="sobre-mi"> <div class="sobre-mi-container"> <div class="sobre-mi-texto"> <p class="hero-sub">${data.hero_sub}</p> <h1 class="hero-titulo">${data.hero_titulo}<br></h1> <p class="hero-descripcion">${data.hero_descripcion}</p> <div> <a href="#proyectos" class="btn-cta">Ver mis proyectos</a> </div> </div> <div class="sobre-mi-foto-wrapper"> <div class="sobre-mi-foto-marco"> <img class="perfil-img"${addAttribute(data.perfil_img, "src")} alt="Fotografía de Carlos"> </div> </div> </div> </section> <!-- LENGUAJES --> <section id="lenguajes"> <h2 class="titulo-seccion">Lenguajes de Programación</h2> <div class="skills-grid"> ${data.tech_stack.map((tech) => renderTemplate`<div class="skill-card"> <img${addAttribute(tech.icon, "src")}${addAttribute(tech.name, "alt")} width="40" height="40"> <p>${tech.name}</p> </div>`)} </div> </section> <!-- PROYECTOS --> <section id="proyectos"> <h2 class="titulo-seccion">Mis Proyectos</h2> <div class="proyectos-grid"> ${data.proyectos.map((proy) => renderTemplate`<div${addAttribute(`proyecto-card ${proy.badge ? "proyecto-destacado" : ""}`, "class")}> <div class="proyecto-info"> ${proy.badge && renderTemplate`<span class="badge-integrador">${proy.badge}</span>`} <h3 class="proyecto-titulo">${proy.titulo}</h3> <p class="proyecto-desc">${proy.descripcion}</p> <ul class="proyecto-tech"> ${proy.tecnologias.map((tech) => renderTemplate`<li>${tech}</li>`)} </ul> </div> </div>`)} </div> </section> <!-- TRAYECTORIA ACADÉMICA --> <section id="eventos"> <h2 class="titulo-seccion">Trayectoria Académica</h2> <div class="eventos-grid"> ${data.eventos.map((evento) => renderTemplate`<div class="evento-card"> <div class="evento-contenedor-img"> <img class="evento-img"${addAttribute(evento.imagen, "src")}${addAttribute(evento.titulo, "alt")}> </div> <div class="evento-info"> <span class="evento-tag">${evento.tag}</span> <h3 class="evento-titulo">${evento.titulo}</h3> <p class="evento-desc">${evento.descripcion}</p> </div> </div>`)} </div> </section> <!-- CERTIFICACIONES --> <section id="certificaciones"> <h2 class="titulo-seccion">Certificaciones y Cursos</h2> <div class="cert-lista"> ${data.certifications.map((cert) => renderTemplate`<div class="cert-item"> <div class="cert-info"> <h3>${cert.title}</h3> <p>${cert.issuer}</p> </div> <div class="cert-fecha">${cert.year}</div> </div>`)} </div> </section> <!-- CONTACTO --> <section id="contacto"> <h2 class="titulo-seccion">Ponte en Contacto</h2> <div class="contacto-container"> <p class="contacto-desc">¿Tienes un proyecto en mente, una consulta o te gustaría colaborar juntos? ¡Escríbeme!</p> <div class="contacto-links"> <a${addAttribute(`mailto:${data.contacto_email}`, "href")} class="btn-contacto">📧 Enviar Correo</a> <a${addAttribute(data.github_url, "href")} target="_blank" class="btn-contacto">💻 GitHub</a> <a${addAttribute(data.instagram_url, "href")} target="_blank" class="btn-contacto">📸 Instagram</a> </div> </div> </section> <footer> <p>&copy; 2026 Carlos Castro. Si no te gusta mi trabajo, te pido una disculpa pública en X</p> </footer> </body></html>`;
}, "C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/index.astro", void 0);

const $$file = "C:/Users/castr/OneDrive/Desktop/CarlosBuilds/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
