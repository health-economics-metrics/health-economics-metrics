// The book's structure, derived from the book's own README, resolved per locale.
//
// README.md is the table of contents: each `## Heading` opens a part, and each
// `- [Title](locales/<default-locale>/topics/<slug>/) — blurb` under it is a
// topic in reading order, linked via the book's default/canonical locale
// (en-gb-oxendict). That makes the site's ordering the book's ordering by
// construction — reorder the README upstream and the sidebar, the contents
// page, and previous/next all follow, in every locale.
//
// A topic's slug can differ by locale (e.g. en-us's
// hard-cash-releasing-savings-deficit-defense vs en-gb-oxendict's
// ...-defence), so resolving "this topic, in locale X" goes through each
// topic's `.locale-peer-id` (see content.js `peers`) rather than assuming the
// slug is the same everywhere.

import { read, readTopic, topicSlugs, peers } from './content.js';
import { firstParagraph, render, splitTitle } from '../markdown.js';

const PART = /^##\s+(.+?)\s*$/;
const ENTRY = /^-\s+\[([^\]]+)\]\(locales\/([\w-]+)\/topics\/([^/]+)\/\)\s*(?:[—–-]\s*(.*))?$/;
const SECTION_HEADING = /^##\s+(.+?)\s*$/;

function buildCanonical() {
	const source = read('README.md') ?? '';
	const { title, body } = splitTitle(source);
	const parts = [];
	let current = null;
	let inFence = false;

	for (const line of body.split('\n')) {
		if (line.startsWith('```')) inFence = !inFence;
		if (inFence) continue;

		const part = PART.exec(line);
		if (part) {
			current = { title: part[1], entries: [] };
			parts.push(current);
			continue;
		}

		const entry = ENTRY.exec(line);
		if (entry && current) {
			current.entries.push({
				title: entry[1],
				canonicalLocale: entry[2],
				canonicalSlug: entry[3],
				blurb: entry[4] ?? ''
			});
		}
	}

	// Parts that carry no topics (the closing note on benchmark freshness, say)
	// belong on the home page as prose, not in the navigation.
	const navParts = parts.filter((part) => part.entries.length > 0);

	return { title: title || 'Health Economics Metrics', navParts };
}

let canonicalCache = null;
function canonical() {
	return (canonicalCache ??= buildCanonical());
}

/** Resolve one README entry (canonical locale + slug) into a locale's own page. */
function resolveEntry(entry, locale) {
	const localePeers = peers(entry.canonicalLocale, entry.canonicalSlug);
	// Falls back to the canonical slug if this locale is somehow missing the
	// topic, so a page still renders (as a 404-prone but non-crashing link)
	// rather than the whole nav silently dropping an entry.
	const slug = localePeers[locale] ?? entry.canonicalSlug;
	const source = readTopic(locale, slug);
	const localTitle = source ? splitTitle(source).title : '';
	return {
		slug,
		href: `/locales/${locale}/topics/${slug}/`,
		title: localTitle || entry.title,
		// README blurbs are only written in the canonical locale's English —
		// they are not part of the translated content, so other locales carry
		// none rather than showing an untranslated English aside.
		blurb: locale === entry.canonicalLocale ? entry.blurb : '',
		part: entry.part,
		// Kept so callers (e.g. the home page's "Start here" links, which quote
		// the README's own canonical-locale slugs) can match an entry without
		// re-deriving it from the README themselves.
		canonicalSlug: entry.canonicalSlug
	};
}

/** The book's `{ title, blurb, href, part }` for the title of a topic file. */
function titleOf(locale, slug) {
	const source = readTopic(locale, slug);
	if (!source) return slug;
	return splitTitle(source).title || slug;
}

const bookCache = new Map();

/** The book for one locale: `{ title, parts: [{title, entries}], order: [...] }`. */
export function book(locale) {
	if (bookCache.has(locale)) return bookCache.get(locale);

	const { title, navParts } = canonical();

	const parts = navParts.map((part) => ({
		title: part.title,
		entries: part.entries.map((entry) => resolveEntry(entry, locale))
	}));
	let order = parts.flatMap((part) => part.entries.map((entry) => ({ ...entry, part: part.title })));

	// Anything in this locale's topics/ that the README never links to (via
	// its canonical-locale peer) would otherwise be unreachable. Publish it in
	// an overflow part rather than dropping it.
	const listed = new Set(order.map((entry) => entry.slug));
	const orphanSlugs = topicSlugs(locale).filter((slug) => !listed.has(slug));
	if (orphanSlugs.length) {
		const entries = orphanSlugs.map((slug) => ({
			slug,
			href: `/locales/${locale}/topics/${slug}/`,
			title: titleOf(locale, slug),
			blurb: ''
		}));
		const part = { title: 'Also in this book', entries };
		parts.push(part);
		order = order.concat(entries.map((entry) => ({ ...entry, part: part.title })));
	}

	const result = { title, parts, order };
	bookCache.set(locale, result);
	return result;
}

/** Navigation neighbours for a topic, either side possibly null. */
export function neighbours(locale, slug) {
	const { order } = book(locale);
	const at = order.findIndex((entry) => entry.slug === slug);
	if (at === -1) return { index: -1, total: order.length, previous: null, next: null, part: null };
	return {
		index: at,
		total: order.length,
		previous: at > 0 ? order[at - 1] : null,
		next: at < order.length - 1 ? order[at + 1] : null,
		part: order[at].part
	};
}

/** A rendered topic page, or null when the slug has no content file in this locale. */
export function topic(locale, slug) {
	const source = readTopic(locale, slug);
	if (!source) return null;
	const rendered = render(source, `locales/${locale}/topics/${slug}/index.md`);
	// Every other locale's URL for this exact topic, for the locale switcher —
	// resolved via .locale-peer-id, not by assuming the slug is unchanged.
	const localeLinks = Object.fromEntries(
		Object.entries(peers(locale, slug)).map(([loc, s]) => [loc, `/locales/${loc}/topics/${s}/`])
	);
	return { slug, locale, ...rendered, ...neighbours(locale, slug), localeLinks };
}

const TOPIC_HREF = /href="\/locales\/([\w-]+)\/topics\/([^/]+)\/"/g;

/**
 * Rewrite rendered HTML's topic links from whichever locale they were written
 * for (normally the canonical one, since the README only ever links into it)
 * into `locale`'s own slugs. Used for the parts of the README's own HTML that
 * are reused as-is (prose, the "Claude skills" section) but still contain a
 * handful of topic cross-references.
 */
export function localizeHtml(html, locale) {
	return html.replace(TOPIC_HREF, (match, fromLocale, slug) => {
		const mapped = peers(fromLocale, slug)[locale];
		return mapped ? `href="/locales/${locale}/topics/${mapped}/"` : match;
	});
}

/** Compact records for listing and searching, without the rendered bodies. */
export function index(locale) {
	return book(locale).order.map((entry) => {
		const source = readTopic(locale, entry.slug) ?? '';
		const { title, body } = splitTitle(source);
		return {
			slug: entry.slug,
			href: entry.href,
			title: title || entry.title,
			part: entry.part,
			blurb: entry.blurb,
			summary: firstParagraph(body),
			// Section headings make the search index cover "what's inside a topic"
			// (the math, the worked example, the pitfalls) without shipping bodies.
			sections: body
				.split('\n')
				.map((line) => SECTION_HEADING.exec(line)?.[1])
				.filter(Boolean)
		};
	});
}
