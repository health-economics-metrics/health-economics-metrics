import { render } from '$lib/markdown.js';
import { book, localizeHtml } from '$lib/server/book.js';
import { locales, read } from '$lib/server/content.js';

// This is the first page reached for each locale, so its entries() drives
// prerendering for the whole [locale] subtree: the crawler discovers
// contents/topics/search for each locale from the nav links this page (via
// the shared layout) renders. Only topics/[slug] needs its own entries(),
// since slugs vary by locale in a way a plain crawl still handles fine, but
// declaring it explicitly is more robust (see that file).
export function entries() {
	return locales().map((locale) => ({ locale }));
}

export function load({ params }) {
	const { locale } = params;
	const source = read('README.md') ?? '';
	const { title, summary } = render(source, 'README.md');
	const { order } = book(locale);

	// The README opens with a summary and a "New here?" sentence, both of which
	// the hero and the Start here list already show. Render from the first part
	// heading onward so the page states each of them once. The README only ever
	// links into the canonical locale, so its topic links are re-targeted at
	// this locale's own slugs after rendering.
	const partsStart = source.indexOf('\n## ');
	const rendered = render(partsStart === -1 ? source : source.slice(partsStart + 1), 'README.md');
	const html = localizeHtml(rendered.html, locale);

	// The book's own "New here? Start with ..." sentence decides the starting
	// points, so the site never disagrees with the book about where to begin —
	// resolved into this locale's own slugs via the entries book() already
	// worked out (which went through each topic's .locale-peer-id).
	const intro = /New here\?[^\n]*/.exec(source)?.[0] ?? '';
	const startHere = [...intro.matchAll(/\[([^\]]+)\]\(locales\/[\w-]+\/topics\/([^/]+)\/\)/g)].map(
		([, label, canonicalSlug]) => {
			const entry = order.find((e) => e.canonicalSlug === canonicalSlug);
			return {
				title: entry?.title ?? label,
				blurb: entry?.blurb ?? '',
				href: entry?.href ?? `/locales/${locale}/topics/${canonicalSlug}/`
			};
		}
	);

	return {
		title,
		summary,
		html,
		startHere
	};
}
