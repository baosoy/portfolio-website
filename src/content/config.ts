import { defineCollection, z } from "astro:content";

// const blog = defineCollection({
//   type: "content",
//   // Type-check frontmatter using a schema
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     // Transform string to Date object
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//     heroImage: z.string().optional(),
//   }),
// });

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    source: z.string(),
    url: z.string(),
    heroImage: z.string().optional(),
    heroVideo: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional().default(0),
    backgroundColor: z.string().optional(),
  }),
});

export const collections = { projects };
