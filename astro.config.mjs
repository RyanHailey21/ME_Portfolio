import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  site: 'https://RyanHailey21.github.io' ,
  base: '/ME_Portfolio',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ['**/*.HEIC', '**/*.heic'],
  },
});
