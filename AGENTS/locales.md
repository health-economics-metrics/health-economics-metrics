# Locales

## Layout

- Every locale directory is `<language>-<region>` (for example `en-us`, `fr-001`). Never create a language-only directory such as `locales/en/`.
- `en-gb-oxendict` is the canonical locale. `README.md` and all cross-references point at it.
- English variants: `en-us`, `en-gb`, `en-001`, `en-150`. Dialect-spelled slugs differ by locale (for example `...-defense` and `...-defence`); the shared `.locale-peer-id` identifies the topic.
- Full-language locales translate the topic slug too: each directory name is derived from that locale's own H1 by `bin/localize-slugs`. The English dialects (`en-us`, `en-gb`, `en-001`, `en-150`, `en-gb-oxendict`) keep English slugs.
- `xx-001` ("World") is usually an exact copy of `xx-xx`: `rsync -a locales/xx-xx/ locales/xx-001/`, then `diff -rq` to confirm.
- Exceptions with their own translations and localized directory names: ar, bn, es, fr, hi, id, pt, ru, ur, zh.
- `et-001`, `th-001` and `vi-001` have no `-xx` sibling.

## Adding a locale

1. Create `locales/<locale>/` (home page `index.md`, `README.md` symlink, `.locale-peer-id`, and the topics directory), by copying a sibling or translating. English locales call the topics directory `topics`; every other locale translates its name into its own language and script (`temas`, `sujets`, `topik`, `主题`, `विषय`, `トピック`, `주제`, `المواضيع`, `বিষয়সমূহ`, `pynciau`). The directory carries the same `.locale-peer-id` as the English one, `bin/test` finds it as the subdirectory whose children carry a `.locale-peer-id`, and `pnpm sync:content` vendors it back under the fixed name `topics/` so the site's routes stay locale-agnostic.
2. Add a row to `spec/locales-for-global-sharing-with-svelte/locales.tsv`.
3. In the site: `src/lib/i18n.js` (translations map), `src/lib/locales.js` (label), `spec/locales-for-global-sharing-with-svelte/index.md` (locale list).
4. `pnpm sync:content`, then `pnpm build`.

Use separate commits: the locale content, the site registration, the spec row.

## Home pages

`locales/<locale>/index.md` mirrors the root `README.md`: same parts, same bullets in the same order, links to `locales/en-gb-oxendict/topics/<slug>/`, translated titles and hooks. A new topic's bullet goes after the same neighbour as in `README.md`.
