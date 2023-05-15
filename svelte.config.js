import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';

const supportedLocales = ['en', 'es'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			entries: supportedLocales.map((locale) => `/${locale}`)
		}
	}
};

export default config;
