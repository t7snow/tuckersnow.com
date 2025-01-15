// import utilities from astro:content
import { defineCollection, z } from 'astro:content';

// Define a schema for the blogposts collection


export const collections = {
  blogposts: defineCollection({
    schema: () => z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    })
  }),
  bookposts: defineCollection({
    schema: ({ image }) => z.object({
      cover: image(),
    })
  }),
};