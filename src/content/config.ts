import { defineCollection, z } from "astro:content";

// const blog = defineCollection({
//   type: "content",
//   // Type-check frontmatter using a schema
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     // Transform string to Date object
// pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//     heroImage: z.string().optional(),
//   }),
// });

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      source: z.string(),
      url: z.string(),
      pubDate: z.coerce.date(),
      heroImage: image(),
      heroVideo: z.string().optional(),
      description: z.string().optional(),
      backgroundColor: z.string().optional(),
    }),
});

export const collections = { projects };
