#!/usr/bin/env node
// Vendor the book's Markdown into content/ so this site builds standalone.
//
// Source: $BOOK if set, else the monorepo root this site lives in (..).
// Run after the book changes:  npm run sync:content
//
// The book publishes topics per locale: locales/<locale>/topics/<slug>/index.md,
// plus a `.locale-peer-id` file per topic directory that is byte-identical across
// every locale's version of "the same" topic (slugs can differ by locale, e.g.
// en-us's hard-cash-releasing-savings-deficit-defense vs en-gb's ...-defence).
// That peer-id is how the site resolves "the same page in another locale" for
// the locale switcher, without needing a central manifest.

import { cp, mkdir, rm, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const book = resolve(process.env.BOOK ?? join(siteRoot, '..'));

if (!existsSync(join(book, 'README.md'))) {
	console.error(`No book found at ${book}. Set BOOK=/path/to/health-economics-metrics.`);
	process.exit(1);
}

// Files copied verbatim into content/. Everything here becomes a page or a link target.
// The book is currently README.md + locales/; the optional files are listed so that
// adding them upstream publishes them here without touching this script.
const files = ['README.md', 'GLOSSARY.md', 'INDEX.md', 'STYLE_GUIDE.md', 'CITATION.cff'];

const contentDir = join(siteRoot, 'content');
await rm(contentDir, { recursive: true, force: true });
await mkdir(contentDir, { recursive: true });

let count = 0;

for (const file of files) {
	const from = join(book, file);
	if (!existsSync(from)) {
		console.warn(`skip (missing): ${file}`);
		continue;
	}
	await cp(from, join(contentDir, file));
	count += 1;
}

// Every locale is a directory under locales/ with its own topics/ subdirectory.
// Discovered dynamically so a new locale in the book publishes here with no
// code change.
const localesDir = join(book, 'locales');
const localeNames = existsSync(localesDir)
	? (await readdir(localesDir, { withFileTypes: true }))
			.filter((e) => e.isDirectory())
			.map((e) => e.name)
			.sort()
	: [];

if (localeNames.length === 0) {
	console.error(`No locale directories found under ${localesDir}.`);
	process.exit(1);
}

for (const locale of localeNames) {
	// This locale's own translated index.md (the book's per-locale README,
	// read by book.js's readmeSource/localizedIndex) — vendored even when
	// still an empty placeholder, so the site's fallback-to-canonical logic
	// sees "no content" rather than a missing file.
	const localeIndexFrom = join(localesDir, locale, 'index.md');
	if (existsSync(localeIndexFrom)) {
		const localeDirTo = join(contentDir, 'locales', locale);
		await mkdir(localeDirTo, { recursive: true });
		await cp(localeIndexFrom, join(localeDirTo, 'index.md'));
		count += 1;
	}

	const topicsFrom = join(localesDir, locale, 'topics');
	if (!existsSync(topicsFrom)) {
		console.warn(`skip (missing): locales/${locale}/topics/`);
		continue;
	}
	const topicsTo = join(contentDir, 'locales', locale, 'topics');
	await mkdir(topicsTo, { recursive: true });
	for (const entry of await readdir(topicsFrom, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue; // topics are directories: <slug>/index.md + .locale-peer-id
		const slugFrom = join(topicsFrom, entry.name);
		const slugTo = join(topicsTo, entry.name);
		await mkdir(slugTo, { recursive: true });
		const indexFrom = join(slugFrom, 'index.md');
		const peerIdFrom = join(slugFrom, '.locale-peer-id');
		if (existsSync(indexFrom)) {
			await cp(indexFrom, join(slugTo, 'index.md'));
			count += 1;
		}
		if (existsSync(peerIdFrom)) {
			// Vendored under a non-dotfile name: Vite's import.meta.glob silently
			// excludes dotfiles from matching, even an explicit literal filename,
			// so a hidden file here would be invisible to content.js's glob.
			await cp(peerIdFrom, join(slugTo, 'peer-id.txt'));
			count += 1;
		}
		// README.md is a symlink to index.md in the book; the site reads index.md
		// directly and doesn't need the symlink vendored.
	}
}

// The icon doubles as the favicon and the social-card image, when the book has one.
const icons = [
	['assets/images/icon@600x600.png', 'icon-600.png'],
	['assets/images/icon@1200x1200.png', 'icon-1200.png']
];
for (const [from, to] of icons) {
	const src = join(book, from);
	if (!existsSync(src)) {
		console.warn(`skip (missing): ${from}`);
		continue;
	}
	await cp(src, join(siteRoot, 'static', to));
	count += 1;
}

const { size } = await stat(join(contentDir, 'README.md'));
console.log(
	`Synced ${count} files from ${book} across ${localeNames.length} locales (${localeNames.join(', ')}; README.md ${size} bytes).`
);
