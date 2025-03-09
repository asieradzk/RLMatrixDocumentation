// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RLMAtrix documentation',
			social: {
				github: 'https://github.com/asieradzk/RL_Matrix',
			},
			logo: {
				light: './src/assets/light-logo.png',
				dark: './src/assets/dark-logo.png',
				replacesTitle: true,
			},
			sidebar: [
				{
					label: 'Beginner\'s Handbook',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Let\'s Get Started', slug: 'beginner/gettingstarted' },
						{ label: 'How to use dashboard?', slug: 'beginner/howtodashboard'},
						{ label: 'Continuous Actions', slug: 'beginner/continuousactions'},
						{ label: 'Cartpole Example', slug: 'beginner/cartpole'},
						
					],
				},
				{
					label: 'Quickstart',
					items: [
						{label: 'Setup', slug: 'quickstart/setup'},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	vite: {
		resolve: {
			alias: {
				'@/': new URL('./src/', import.meta.url).pathname,
			},
		},
	},
});