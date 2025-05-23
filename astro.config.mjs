// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
	site: "https://justtheant.github.io",
	base: "/nexium-web/",
	outDir: "dist",
	publicDir: "static",

	integrations: [
		expressiveCode({}),
		starlight({
			title: 'Nexium',
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: "Qu'est ce que nexium ?", slug: 'introduction/quest_ce_que_nexium' },
					],
				},
				{
					label: 'Blockchain',
					autogenerate: { directory: 'blockchain' },
				},
				{
					label: 'Réseau',
					autogenerate: { directory: 'reseau' },
				},
				{
					label: 'API',
					items: [
						{ label: "Header", slug: 'api/header' },
						{ label: "Endpoints", slug: 'api/endpoint' },
						{ label: "Structure d'une transaction", slug: 'api/structure' },
					],
				},
				{
					label: "GitLab",
					items: [
						{ label: "Pourquoi GitLab?", slug: 'gitlab/pourquoi' },
						{ label: "Connexion à GitLab", slug: 'gitlab/connexion' },
					]
				},
				{
					label: 'Développement',
					items: [
						{ label: "Développeurs", slug: 'dev/développeur' },
						{ label: "Compilation/Installation", slug: 'dev/installation' },
					],
				},
			],
		}),
	],
});
