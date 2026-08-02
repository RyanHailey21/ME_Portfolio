import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    tags: z.array(z.string()),
    technologies: z.array(z.string()),
    githubUrl: z.string().optional(),
    videoUrl: z.string().optional(),
    sortOrder: z.number().optional(),
    role: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    ownership: z.array(z.string()).optional(),
    resumeHighlights: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
