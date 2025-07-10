import { defineCollection, z } from 'astro:content';

const recommendationCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => 
    z.object({
      avatar: image(),
      name: z.string(),
      position: z.string(),
      text: z.array(z.string())
    }),
});

export const collections = {
  recommendation: recommendationCollection,
}