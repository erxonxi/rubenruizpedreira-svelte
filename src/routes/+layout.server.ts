import { loadTranslations } from '$lib/translations';
import type { Load } from '@sveltejs/kit';
  
export const load: Load = async ({ url }) => {
  const { pathname } = url;

  const lang = `${pathname.match(/\w+?(?=\/|$)/) || ''}`;

  const route = pathname.replace(new RegExp(`^/${lang}`), '');

  await loadTranslations(lang, route);

  return { stuff: { route, lang } };
}