import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Replace 'ryanh' with your GitHub username if different
  // Replace 'project' with your GitHub repository name if different
  site: 'https://ryanhailey21.github.io', 
  base: '/ME_Portofolio', 
  integrations: [tailwind(), mdx()]
});