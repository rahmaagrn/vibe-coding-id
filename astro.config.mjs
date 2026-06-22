// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://rahmaagrn.github.io',
	base: '/vibe-coding-id',
	integrations: [
		starlight({
			title: 'Vibe Coding Starter Kit',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Bahasa Indonesia',
					lang: 'id'
				}
			},
			customCss: [
				'./src/styles/kustom.css',
			],
			social: [{
				icon: 'github',
				label: 'GitHub',
				href: 'https://github.com/rahmaagrn/vibe-coding-id'
			}],
			sidebar: [
				{
					label: 'Mulai',
					items: [
						{ label: 'Apa Itu Vibe Coding?', slug: 'mulai/apa-itu-vibe-coding' },
						{ label: 'Pilih Tool Pertamamu', slug: 'mulai/pilih-tool' },
						{ label: 'Kamus Istilah', slug: 'mulai/kamus-istilah' }
					]
				},
				{
					label: 'Tutorial',
					items: [
						{ label: 'Buat Website Pertamamu', slug: 'tutorial/website-pertama' },
						{ label: 'Buat Quiz Interaktif', slug: 'tutorial/quiz-interaktif' }
					]
				},
				{
					label: 'Lanjutan',
					items: [
						{ label: 'Teori: The Bus Ticket Theory', slug: 'lanjut/bus-ticket-theory' },
						{ label: 'Teori: The New Way To Build', slug: 'lanjut/new-way-to-build' }
					]
				}
			]
		}),
		mdx()
	]
});
