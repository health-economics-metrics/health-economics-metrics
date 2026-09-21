import { error } from '@sveltejs/kit';
import { locales } from '$lib/server/content.js';

// `entries()` for the [locale] segment lives in +page.server.js (this
// directory's own) and in topics/[slug]/+page.server.js — `entries()` is only
// a valid export from +page.js/+page.server.js/+server.js, not from a layout.

export function load({ params }) {
	if (!locales().includes(params.locale)) {
		error(404, `Unknown locale: ${params.locale}`);
	}
	return { locale: params.locale };
}
