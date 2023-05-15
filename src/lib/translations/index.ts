import i18n, { type Config } from 'sveltekit-i18n';
import en_common from './en/common.json';
import en_home from './en/home.json';
import es_common from './es/common.json';
import es_home from './es/home.json';
import lang from './lang.json';

export const config: Config = {
	translations: {
		en: {
			lang,
			common: en_common,
			home: en_home
		},
		es: {
			lang,
			common: es_common,
			home: es_home
		}
	},
	loaders: [
		{
			locale: 'en',
			key: 'lang',
			loader: async () => (await import('./lang.json')).default
		},
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'es',
			key: 'lang',
			loader: async () => (await import('./lang.json')).default
		},
		{
			locale: 'es',
			key: 'common',
			loader: async () => (await import('./es/common.json')).default
		},
		{
			locale: 'es',
			key: 'home',
			loader: async () => (await import('./es/home.json')).default
		}
	]
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);
