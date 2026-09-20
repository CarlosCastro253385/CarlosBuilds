import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    summary: z.string(),
    tags: z.array(z.string()), // <-- Agregamos esta línea
  }),
});

export const collections = {
  blog: blogCollection,
};