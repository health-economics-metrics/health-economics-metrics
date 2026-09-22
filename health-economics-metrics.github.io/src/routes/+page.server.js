import { render } from '$lib/markdown.js';
import { read, locales } from '$lib/server/content.js';
import { DEFAULT_LOCALE, localeLabel } from '$lib/locales.js';

export function load() {
	const source = read('README.md') ?? '';
	const { title, summary } = render(source, 'README.md');

	// Groups variants of the same language together (by their label's text
	// before the parenthesis, e.g. "Français"), with the CLDR "001" (World)
	// variant sorted first within its group — 'fr-001' Français (Monde) above
	// 'fr-fr' Français (France) — then the rest alphabetically by label.
	const localeList = locales()
		.map((code) => ({ code, label: localeLabel(code), isDefault: code === DEFAULT_LOCALE }))
		.sort((a, b) => {
			if (a.isDefault || b.isDefault) return a.isDefault ? -1 : 1;
			const languageA = a.label.replace(/\s*\(.*$/, '');
			const languageB = b.label.replace(/\s*\(.*$/, '');
			if (languageA !== languageB) return languageA.localeCompare(languageB);
			const worldA = a.code.endsWith('-001') ? 0 : 1;
			const worldB = b.code.endsWith('-001') ? 0 : 1;
			return worldA !== worldB ? worldA - worldB : a.label.localeCompare(b.label);
		});

	return { title, summary, locales: localeList };
}
