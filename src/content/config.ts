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
    }),
});

export const collections = {
    'projects':projectCollection,
}