# AGENTS.md

Guidance for AI coding agents working in this repository.

## Specification Driven Development

**The `spec/` directory is the source of truth.** 
- Before doing anything read all files inside the `spec/` directory using your file-reading tools.
- Treat all files inside `spec/` as strict requirements. Where any file disagrees with the spec, the spec wins: fix the file, or change the spec on purpose and bring the other files into line in the same commit. 
- Do not improvise structure, style, or citation practice.

## What this repo is

*Health Economics Metrics*: a book of reference topics (health economics maths for software engineers building for national health services), published in many locales, plus the SvelteKit site that publishes it.

```
README.md                          canonical table of contents (links into en-gb-oxendict)
locales/<locale>/index.md          each locale's home page (mirrors README.md, translated)
locales/<locale>/<topics-dir>/<slug>/  one directory per topic (English locales: `topics`; every other
                                   locale translates the name, e.g. `temas`, `主题`, `주제`; the site vendors it back as `topics`):
    index.md                       the content
    README.md                      symlink to index.md
    .locale-peer-id                hash, byte-identical across locales for the same topic
health-economics-metrics.github.io/  the static site (SvelteKit + adapter-static, pnpm)
    content/                       vendored copy of the book; refreshed with `pnpm sync:content`
skills/                            Claude skills for using and maintaining the book
spec/                              specs for the site's locales, contents page and search
bin/test                           structure checks (sh)
```

## Guides

- [AGENTS/topics.md](AGENTS/topics.md): topic structure, link and citation rules, validation
- [AGENTS/locales.md](AGENTS/locales.md): locale layout, `-001` copies, adding a locale, home pages
- [AGENTS/translation.md](AGENTS/translation.md): the serial per-language translation workflow
- [AGENTS/site.md](AGENTS/site.md): the SvelteKit site, vendored content, build and sync hazards
- [AGENTS/git.md](AGENTS/git.md): signed commits, commit hygiene, reverts

`skills/health-economics-metrics-maintainer-skill/SKILL.md` is the authoritative guide to adding and editing topics.

## Commands

```sh
sh bin/test                         # locale names, peer-ids, topic sets, README symlinks, cross-links
cd health-economics-metrics.github.io && pnpm install && pnpm build
```
