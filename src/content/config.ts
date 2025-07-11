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

const worksCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      customer: z.string(),
      important: z.boolean().default(false),
      heroImg: image(),
      tools: z.array(z.string()),
      imagesSlider: z.array(image()),
      texts: z.array(z.string()),
      postNumber: z.number(),
    }),
});

export const collections = {
  recommendation: recommendationCollection,
  works: worksCollection,
}