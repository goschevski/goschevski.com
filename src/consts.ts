export const pageTitle = 'Aleksandar Goševski - software engineer'
export const pageDescription = 'Exploring the world of web development, programming, devops, tools, design, etc.'
export const domain = 'https://www.goschevski.com'
import type { ManifestOptions } from 'vite-plugin-pwa'

export const manifest: Partial<ManifestOptions> = {
	name: pageTitle,
	short_name: "Aleksandar Gosevski",
	description: pageDescription,
	theme_color: "#717358",
	background_color: "#ffffff",
	display: "minimal-ui",
	icons: [
		{
			src: "/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
