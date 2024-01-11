import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { domain } from './src/consts';

// https://astro.build/config
export default defineConfig({
  site: domain,
  integrations: [sitemap()],
});
