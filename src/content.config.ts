// import utilities from astro:content
import { defineCollection, z } from 'astro:content';

// Define a schema for the blogposts collection


export const collections = {
  blogposts: defineCollection({
    schema: () => z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      date: z.string(),
    })
  }),
  bookposts: defineCollection({
    schema: ({ image }) => z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      cover: image(),
    })
  }),
};