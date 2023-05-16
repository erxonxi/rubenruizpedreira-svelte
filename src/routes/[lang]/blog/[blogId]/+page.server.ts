import fs from 'fs';
import { error, type Load } from '@sveltejs/kit';
import { marked } from 'marked';

export const prerender = false;

export const ssr = true;

export const load: Load = async ({ params }) => {
	const { blogId } = params;

	const file = fs.readFileSync(`src/lib/posts/${blogId}.md`);

	if (!file) {
		throw error(404, 'Post not found');
	}

	return {
		html: marked.parse(file.toString())
	};
};
