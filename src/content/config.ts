import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
});

const landingCollection = defineCollection({
  type: 'data',
  schema: z.object({
    hero_sub: z.string(),
    hero_titulo: z.string(),
    hero_descripcion: z.string(),
    perfil_img: z.string(),
    tech_stack: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
      })
    ),
    proyectos: z.array(
      z.object({
        badge: z.string().optional(),
        titulo: z.string(),
        descripcion: z.string(),
        tecnologias: z.array(z.string()),
      })
    ),
    eventos: z.array(
      z.object({
        tag: z.string(),
        titulo: z.string(),
        descripcion: z.string(),
        imagen: z.string(),
      })
    ),
    certifications: z.array(
      z.object({
        title: z.string(),
        issuer: z.string(),
        year: z.string(),
      })
    ),
    contacto_email: z.string(),
    github_url: z.string(),
    instagram_url: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  landing: landingCollection,
};