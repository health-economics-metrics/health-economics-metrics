# health-economics-metrics.github.io

The website for **[Health Economics Metrics](https://github.com/health-economics-metrics/health-economics-metrics)** — a comprehensive introduction to health economics math, examples, and reasoning, written for software engineers building for national health service organizations worldwide.

Published at <https://health-economics-metrics.github.io/>.

## How it works

A [SvelteKit](https://svelte.dev/docs/kit) site built with [adapter-static](https://svelte.dev/docs/kit/adapter-static). Every page is prerendered to plain HTML at build time, so GitHub Pages serves files and nothing else — no server, no database, no tracking.

The book's Markdown is **vendored** into `content/` rather than read across repositories, so a fresh clone builds on its own. The site's user interface is built from the [Lily Design System](https://github.com/LilyDesignSystem): the headless components and the theme/locale/text-size/share pickers are ordinary npm dependencies (`@lilydesignsystem/svelte-headless`, `@lilydesignsystem/svelte-picker-bar`), imported from `node_modules` like any other package. Only the theme stylesheets are vendored, into `static/assets/themes/`, because Lily does not publish those as an npm package.

### The book's README is the table of contents

`content/README.md` defines the structure, and the site derives everything else from it:

- each `## Heading` becomes a **part** of the book
- each `- [Title](topics/slug.md) — blurb` under it becomes a **topic**, in reading order
- that order drives the sidebar, the contents page, and previous/next

Reorder the README upstream, run `pnpm run sync`, and the site follows. A topic file that the README never links to is still published, under an "Also in this book" part, so nothing becomes unreachable.

## Develop

```sh
pnpm install
pnpm run dev
```

## Build

```sh
pnpm run build     # -> build/
pnpm run preview
```

## Sync from upstream

```sh
pnpm run sync           # both of the below
pnpm run sync:content   # book Markdown -> content/
pnpm run sync:lily      # Lily themes  -> static/assets/themes
```

Both scripts default to sibling checkouts and can be pointed elsewhere:

```sh
BOOK=/path/to/health-economics-metrics pnpm run sync:content
LILY=/path/to/lily-design-system pnpm run sync:lily
```

Vendored files carry a "do not edit here" banner. Change them upstream, then re-sync. The Lily components themselves are not vendored — bump `@lilydesignsystem/svelte-headless` and `@lilydesignsystem/svelte-picker-bar` in `package.json` instead.

## Layout

```
bin/sync-content.mjs   vendor the book's Markdown into content/
bin/vendor-lily.mjs    vendor Lily's theme stylesheets (components are npm deps)
content/               the book, verbatim (generated — do not edit)
src/lib/markdown.js    Markdown -> HTML: link rewriting, heading ids
src/lib/paths.js       content path <-> site route mapping
src/lib/server/        content access and book structure (server-only)
src/routes/            home, contents, topics A-Z, topic pages, search, about
static/assets/style.css  the site's own styling; Lily ships none
static/assets/themes/  vendored Lily themes, swapped by the theme picker
```

The Lily headless components (`ArticleLayout`, `Header`, `Card`, ...) come from `@lilydesignsystem/svelte-headless`; the header's theme/locale/text-size/share row comes from `@lilydesignsystem/svelte-picker-bar`. Both are regular npm dependencies — see `package.json`.

Content lives under `$lib/server`, so the book's Markdown can never reach a browser bundle: pages read it from `+page.server.js` loads, which run at build time under prerendering.

## Themes

All 45 Lily default themes ship in `static/assets/themes/` — not a curated subset — including the UK Government Digital Service, NHS England, NHS Scotland, NHS Wales, and US Web Design System palettes. `PickerBar` offers them in its own default order (alphabetical, with the UK/US government themes grouped at the end), so the site never hand-maintains a theme list. The site's stylesheet is written against Lily's semantic tokens (`--lily-surface`, `--lily-text`, `--lily-space-*`), so every theme works without a per-theme branch. Theme and text size choices persist in the reader's browser.

`pnpm run sync:lily` re-vendors every theme stylesheet found in the Lily checkout's `themes/` directory — there is no per-site curation to edit.

## Deploy

`.github/workflows/pages.yml` builds and deploys on every push to `main`. In the repository settings, set **Pages → Source** to **GitHub Actions**.

The configuration follows the SvelteKit guidance for [GitHub Pages](https://svelte.dev/docs/kit/adapter-static#GitHub-Pages):

- **`fallback: '404.html'`** — every route is prerendered, so the fallback is only reached by a URL that does not exist. GitHub Pages serves `404.html` for those, which replaces its default 404 page with this site's own (`src/routes/+error.svelte`).
- **`static/.nojekyll`** — stops Jekyll from stripping paths that begin with an underscore, such as `_app/`.
- **`paths.base`** — this repository is named `<org>.github.io`, so the site is served from the domain root and the base path is **empty**. The docs set `BASE_PATH` to the repository name; that is correct for a *project* site served from `/<repo>/`, and wrong here — it would serve the site from `/health-economics-metrics.github.io/`. The workflow therefore leaves `BASE_PATH` unset.

To deploy this source somewhere that *is* under a subpath, set it at build time:

```sh
BASE_PATH=/some-subpath pnpm run build
```

Links in the built output are relative (SvelteKit's `paths.relative` default), so the site also survives being moved without a rebuild.
