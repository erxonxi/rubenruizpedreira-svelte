import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from '../$types';

export const load = (async ({ url }) => {
	const { pathname } = url;

	const lang = `${pathname.match(/\w+?(?=\/|$)/) || ''}`;

	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	await loadTranslations(lang, route);

	return {};
}) satisfies LayoutLoad;
