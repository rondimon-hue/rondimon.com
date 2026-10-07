// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rondimon.com',
  // the tool briefly lived under /about; keep the old link working
  redirects: {
    '/about/whole-life-experiment': '/design/whole-life-experiment',
    '/talent-lab.html': '/design/talent-lab',
    '/design/santa-fe-homelessness-network': '/design/the-santa-fe-unhoused-network',
  },
  // /design is an unlisted working area — keep it out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/design') })],
  vite: {
    plugins: [tailwindcss()]
  }
});
