import { defineCollection, z }  from "astro:content";

const projectCollection = defineCollection({
    type:'content',
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
    'projects':projectCollection,
}
