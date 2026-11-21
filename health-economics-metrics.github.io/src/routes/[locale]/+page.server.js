import { render } from '#lib/markdown.js';
import { book, localizeHtml, readmeSource } from '#lib/server/book.js';
import { locales } from '#lib/server/content.js';
import { localeLabel } from '#lib/locales.js';
import { TILE_TOPICS } from '#lib/tiles.js';

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
	// This locale's own translated locales/<locale>/index.md when it has one,
	// else the canonical (English) README — so an untranslated locale still
	// renders instead of crashing, rather than the page silently staying English.
	const source = readmeSource(locale);
	// Rendered against the literal 'README.md' regardless of which file the
	// source actually came from: every README-shaped file (canonical or
	// translated) writes its links as content-root-relative paths
	// ("locales/…"), which only resolve correctly when the base directory used
	// for relative-link resolution is the content root (dirname('README.md')),
	// not a translated file's own locales/<locale>/ directory.
	const { title, summary } = render(source, 'README.md');
	const { parts, order, sourcePartCount } = book(locale);

	// The README opens with a summary and a "New here?" sentence, both of which
	// the hero and the Start here list already show, so the intro is only used
	// below to resolve those "New here?" picks, never rendered itself.
	const partsStart = source.indexOf('\n## ');
	const intro = partsStart === -1 ? source : source.slice(0, partsStart);

	// Parts/topics render as PartsList's numbered nested list, built from
	// `parts` above — not from the raw Markdown — so this only needs whatever
	// prose follows the last topic-bearing part (e.g. "Benchmark freshness",
	// "Claude skills": headings with no topic entries under them, which
	// book.js's `navParts` filter already excludes from `parts`). Every
	// translated index.md mirrors the canonical heading order line for line,
	// so counting `sourcePartCount` many `\n## ` markers from the front lands
	// on that same boundary in every locale.
	let tailStart = source.length;
	if (partsStart !== -1) {
		let from = partsStart;
		for (let seen = 0; seen < sourcePartCount; seen += 1) {
			const next = source.indexOf('\n## ', from + 1);
			if (next === -1) {
				tailStart = source.length;
				break;
			}
			from = next;
			tailStart = next + 1;
		}
	}
	const tail = tailStart < source.length ? source.slice(tailStart) : '';
	const trailingHtml = tail.trim() ? localizeHtml(render(tail, 'README.md').html, locale) : '';

	// The book's own intro sentence ("New here? Start with …", translated)
	// decides the starting points, so the site never disagrees with the book
	// about where to begin — resolved into this locale's own slugs via the
	// entries book() already worked out (which went through each topic's
	// .locale-peer-id). Every link in the intro is one of these picks, in any
	// language, so no literal-English phrase match is needed to find them.
	const startHere = [...intro.matchAll(/\[([^\]]+)\]\(locales\/[\w-]+\/topics\/([^/]+)\/\)/g)].map(
		([, label, canonicalSlug]) => {
			const entry = order.find((e) => e.canonicalSlug === canonicalSlug);
			return {
				title: entry?.title ?? label,
				blurb: entry?.blurb ?? '',
				href: entry?.href ?? `/${locale}/topics/${canonicalSlug}/`
			};
		}
	);

	// The world (-001) translations, English first, then by code.
	const translations = locales()
		.filter((code) => code.endsWith('-001'))
		.sort((a, b) => (a === 'en-001' ? -1 : b === 'en-001' ? 1 : a.localeCompare(b)))
		.map((code) => ({ code, label: localeLabel(code) }));

	const tileHrefs = TILE_TOPICS.map(
		(slug) => order.find((e) => e.canonicalSlug === slug)?.href ?? `/${locale}/topics/${slug}/`
	);

	return {
		title,
		tileHrefs,
		translations,
		summary,
		parts,
		trailingHtml,
		startHere
	};
}
