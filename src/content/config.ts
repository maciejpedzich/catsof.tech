import { z, defineCollection } from 'astro:content';

const cats = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string().max(25),
    dateAdded: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    description: z.string().max(300),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }),
    passedAway: z.boolean().optional().default(false),
    owner: z.object({
      name: z.string(),
      link: z.string().optional()
    })
  })
});

export const collections = { cats };
