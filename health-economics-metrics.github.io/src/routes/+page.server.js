import { render } from '$lib/markdown.js';
import { read, locales } from '$lib/server/content.js';
import { DEFAULT_LOCALE, localeLabel } from '$lib/locales.js';

export function load() {
	const source = read('README.md') ?? '';
	const { title, summary } = render(source, 'README.md');

	const localeList = locales()
		.map((code) => ({ code, label: localeLabel(code), isDefault: code === DEFAULT_LOCALE }))
		.sort((a, b) => (a.isDefault ? -1 : b.isDefault ? 1 : a.label.localeCompare(b.label)));

	return { title, summary, locales: localeList };
}
