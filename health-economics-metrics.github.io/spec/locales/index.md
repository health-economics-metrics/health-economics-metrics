# Locales

How this site supports multiple locales end to end: book content, site
routing, UI chrome, and the bugs already hit and fixed along the way.

## Locale list (55)

One English canonical plus regional/international variants, using the
CLDR `-001` code for "World":

- `en-gb-oxendict` — canonical/default locale (`DEFAULT_LOCALE` in `src/lib/locales.js`)
- `en-us`, `en-gb`, `en-150` (Europe), `en-001` (World)
- `es-es`, `es-mx`, `es-001`
- `fi-fi`, `fi-001`
- `fr-fr`, `fr-ca`, `fr-001`
- `da-dk`, `da-001`
- `de-de`, `de-001`
- `it-it`, `it-001`
- `ja-jp`, `ja-001`
- `ko-kr`, `ko-001`
- `nl-nl`, `nl-001`
- `no-no`, `no-001`
- `pl-pl`, `pl-001`
- `ru-ru`, `ru-001`
- `sv-se`, `sv-001`
- `uk-ua`, `uk-001`
- `zh-cn`, `zh-001`
- `ar-eg`, `ar-001`
- `cy-gb`, `cy-001`
- `bn-001`, `bn-bd`
- `hi-001`, `hi-in`
- `ur-001`, `ur-pk`
- `vi-001` (no regional variant yet)
- `id-001`, `id-id`
- `pt-001`, `pt-pt`, `pt-br`
- `et-001` (no regional variant yet)
- `th-001` (no regional variant yet)

The site never hardcodes this list — `content.js`'s `locales()` discovers it
from whatever `content/locales/*/` directories the sync script vendored, so a
new locale in the book publishes here with no code change.

## Content structure (book side)

Each locale is `locales/<code>/` in the book repo, containing:

- `locales/<code>/topics/<slug>/index.md` + `.locale-peer-id` — one per topic.
  `README.md` is a symlink to `index.md`.
- `locales/<code>/index.md` + `.locale-peer-id` + `README.md` symlink — the
  locale's own translated README (site home/contents page source). Every
  locale gets this file scaffolded (matching the topic-file pattern) even
  before it has a translation; it starts empty.

**Slugs are per-locale, not shared.** Translated locales rename topic
directories to native-script/accented slugs (e.g. `es-001`'s
`año-de-vida-ajustado-por-calidad`, `ur-001`'s `صحت-ایڈجسٹڈ-متوقع-زندگی`).
`en-us` vs `en-gb-oxendict` differ only by spelling
(`hard-cash-releasing-savings-deficit-defense` vs `...-defence`). Two older
locales (`es-es`, and generally the pre-`-001`-era locales) kept English
slugs with translated content inside — both patterns are valid; nothing in
the site assumes slugs match across locales.

**`.locale-peer-id`** is a hash, byte-identical across every locale's version
of "the same" topic, regardless of slug. It's how the site resolves "this
page, in locale X" — see `content.js`'s `peers()`/`peerIndex()`.

## Vendoring into the site

`bin/sync-content.mjs` (`npm run sync:content`) copies the book's
`locales/<code>/index.md` and `locales/<code>/topics/<slug>/{index.md,
.locale-peer-id}` into `content/locales/<code>/...`, discovering locale names
and topic slugs dynamically (never a hardcoded list). `.locale-peer-id` is
vendored as `peer-id.txt` — Vite's `import.meta.glob` silently excludes
dotfiles, even an explicit literal filename, so a hidden name here would be
invisible to `content.js`'s glob.

Default source: the monorepo root (`..` relative to this site, since the
site lives inside the book repo as `health-economics-metrics.github.io/`).
Override with `BOOK=/path/to/book`.

## Site structure

- `content.js` — raw file access, `locales()`, `peers()`, peer-id index.
- `book.js` — the book's structure per locale: parses the canonical
  `/README.md` for part/entry order + canonical (locale, slug) references
  (`buildCanonical`/`parseIndex`), resolves each entry into a locale's own
  page via peer-id (`resolveEntry`), and layers in a locale's own translated
  `locales/<code>/index.md` (title, part headings, blurbs) via
  `localizedIndex`/`localizedEntries`/`localizedPartTitles` when present,
  falling back to canonical English per-field when a locale has none yet.
- `paths.js` — resolves Markdown links (written as bare directory
  references) to site routes.
- `i18n.js` — UI chrome strings (nav, page headings/hints, pagination,
  share/picker labels) that aren't book content. `ui(locale)` returns
  `{...EN, ...TRANSLATIONS[locale]}` — full English fallback per key, not
  just per locale, so a locale with only some keys translated still renders
  correctly everywhere else.
- `locales.js` — `LOCALE_LABELS` (display names, in-language) and
  `DEFAULT_LOCALE` for the locale picker.

## Locale picker (labels + ordering)

- Labels live in `locales.js`'s `LOCALE_LABELS`, one entry per code, in that
  language, as `"<language>"` for a `-001` world variant or `"<language> -
  <region>"` otherwise (e.g. `'fr-001': 'Français'`, `'fr-fr': 'Français -
  France'`) — see the top-level `spec/locales-for-global-sharing-with-svelte/
  locales.tsv` for the full endonym/exonym table. Falls back to the raw code
  via `localeLabel()` if a code has no label yet.
- Header `PickerBar` order comes from `content.js`'s `locales()` (sorted by
  code) — the `-001` suffix happens to sort before any letter-starting
  regional suffix, so World variants already come first there.
- Home page's locale list (`+page.server.js`) sorts explicitly: default
  locale first, then grouped by language name (label text before `" - "`),
  with the `-001`/World variant sorted before its regional siblings within
  each group, then alphabetically by label.

- The URL is the source of truth for the picker. On any `/locales/<code>/...`
  page the picker is seeded with that code (`value: locale`), so a saved
  locale never overrides a link, and the saved locale is overwritten with the
  one the visitor actually opened. The picker's automatic restore of the saved
  locale only navigates on the root chooser (`/`); on `/about/` the first
  `onChange` after a full page load is ignored, so the page stays put.

## Bug fixes (regression watch-list)

These were all found and fixed in the same pass of adding new locales
(`ar-001`, `bn-001`, `es-001`, `fr-001`, `hi-001`, `id-001`, `pt-001`,
`ru-001`, `ur-001`, `zh-001`) — the site had never actually been built
end-to-end with non-Latin-slug locales before, so these were latent from the
start, not regressions from a working state.

1. **ASCII-only `\w` regexes broke every non-Latin/non-accented slug.** Five
   places matched topic slugs with `[\w.-]+` (ASCII word chars only):
   `content.js`'s `TOPIC_PATH`, `book.js`'s `ENTRY` and `TOPIC_HREF`,
   `locales/[locale]/+page.server.js`'s "start here" link regex, and
   `paths.js`'s `routeFor`. Any locale with an accented or native-script slug
   (Spanish, French, Russian, Chinese, Arabic, Welsh, Hindi, Bengali,
   Portuguese, Indonesian, Urdu) silently failed peer-id resolution and
   cross-topic links, and crashed prerendering outright once a link actually
   404'd. Fixed by widening the slug capture group to `[^/]+` in all five
   (locale-code capture groups stay `[\w-]+` — codes are always ASCII).

2. **Every locale's home/contents page showed canonical English content,**
   not just untranslated links. `book.js`/`+page.server.js` always read the
   single top-level `/README.md` for title, intro, "New here?" picks, part
   headings, and blurbs — only topic *links* were ever localized. Fixed by
   populating the previously-empty `locales/<code>/index.md` per locale and
   having `book.js` prefer it (`localizedIndex`), falling back to canonical
   English per-locale (not per-site) when a locale has none.

3. **`"New here?"` link extraction was hardcoded to the literal English
   phrase**, so it silently found nothing once the README was translated.
   Fixed by extracting all links from the whole pre-`##` intro block instead
   of regex-matching the English sentence.

4. **All UI chrome was hardcoded English in the `.svelte` templates** — nav
   labels, "Start here"/subtitle, Contents/Topics/Search page titles and
   intros, breadcrumbs, topic position, pagination, picker/share labels.
   None of this is book content, so translating the README didn't touch it.
   Fixed by adding `i18n.js` and threading `ui(locale)` through every
   locale-scoped route and `+layout.svelte`.

5. **Header/footer brand wordmark stayed English even on translated
   locales**, because it came only from the root (locale-agnostic)
   `+layout.server.js`, which deliberately never picks a locale. Fixed by
   having `locales/[locale]/+layout.server.js` supply this locale's own book
   title, which overrides the root layout's canonical one via SvelteKit's
   merged `page.data` on any route under `/locales/<locale>/` — the root
   picker and `/about/` (no locale in the URL) correctly keep the canonical
   English title.

6. **The five English dialect variants' home pages showed American spelling
   regardless of dialect**, because `locales/{en-us,en-gb,en-gb-oxendict,
   en-150,en-001}/index.md` were still the empty scaffold placeholder, so
   `readmeSource()` fell back to the canonical (American-spelled) root
   `README.md` for all of them — visible as "math"/"organizations" on
   `en-gb`'s home page even though its own topic pages already said
   "maths"/"organisations". Fixed by populating each with the same content,
   spelling-adjusted per the `Guidance` rules in
   `spec/locales-for-global-sharing-with-svelte/index.md` (`en-150` and
   `en-001` follow `en-gb`, confirmed against their already-dialect-correct
   topic files).

7. **`+page.server.js`'s language-grouping regex silently broke when
   `LOCALE_LABELS` moved from `"<language> (<region>)"` to `"<language> -
   <region>"`.** It stripped everything from `(` onward to find the
   "language" part of a label to group by; once no label contained `(`
   anymore, every regional variant grouped as its own one-item "language"
   instead of joining its `-001` sibling. Fixed by stripping from `" - "`
   instead, matching the new label format.

8. **A picker button could not be clicked with a mouse on `/about/`.** Since
   `@lilydesignsystem/svelte-picker-bar` 0.2.0 each picker renders a hover
   tooltip as a sibling of its button, and the theme stylesheet predates it,
   so the tooltip sat in normal flow. Hovering widened the right-aligned
   control row and shoved the button left by the tooltip's width; on
   `/about/` the label ("Language") is wider than the button, so the pointer
   ended up beside the button, `mousedown`/`mouseup` hit different elements,
   and the `click` fired on the picker's wrapper instead. Fixed in
   `static/assets/style.css` by taking `.*-picker-tooltip` out of flow
   (absolute, under the button, end-aligned, still hoverable).

## Known remaining gaps

- Theme-name and text-size option labels (e.g. "Largest", "Dracula") come
  from the third-party `@lilydesignsystem/svelte-picker-bar` component's own
  internal labels, not this site's code — not localized.
- A locale can be content-complete (topics) but chrome-incomplete (no
  `i18n.js`/`index.md` entry) or vice versa; both fall back to English
  per-field, independently, so this degrades gracefully rather than
  crashing — worth checking when adding a new locale.
