import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { domain, manifest } from './src/consts';
import { VitePWA } from "vite-plugin-pwa"

// https://astro.build/config
export default defineConfig({
  site: domain,
  integrations: [sitemap()],
  vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
				  globDirectory: 'dist',
				  globPatterns: [
				    '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,avif,woff2,ico}',
				  ],
				  navigateFallback: null,
				}
			})
		]
	}
});
