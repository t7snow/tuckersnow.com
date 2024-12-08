// import utilities from astro:content
import { defineCollection, z } from 'astro:content';

// Define a schema for the blogposts collection
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
<<<<<<< HEAD
    body: z.string(),
=======
>>>>>>> b2a9929 (setting up recent posts)
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  blogposts: blog,
};