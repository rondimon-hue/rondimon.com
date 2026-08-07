// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rondimon.com',
  // /design is an unlisted working area — keep it out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/design') })],
  vite: {
    plugins: [tailwindcss()]
  }
});
