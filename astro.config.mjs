import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';


export default defineConfig({
  site: 'https://ryanhailey21.github.io', 
  base: '/ME_Portofolio', 
  integrations: [tailwind(), mdx()]
});