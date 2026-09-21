---
name: health-economics-metrics-maintainer-skill
description: Maintain this repository — add or edit a topic file under locales/<locale>/topics/ in the established structure, keep README.md's categorized index in sync, cross-link new topics into related existing docs, and validate links and naming conventions across all locales. Use when the user asks to add a new metric/topic, edit an existing one, reorganize README.md, or check the repo for broken links or inconsistent structure.
---

# Maintaining health-economics-metrics

This repo's reference docs live under `locales/<locale>/topics/<slug>/`, one directory per topic,
for each of 11 locales: `en-us`, `en-gb`, `en-gb-oxendict` (the canonical/default locale that
`README.md` and the skills link into), `en-001`, `en-150`, and six full-language translations —
`es-es`, `fr-fr`, `ru-ru`, `zh-cn`, `ar-eg`, `cy-gb`. Every topic directory contains:

- `index.md` — the actual content (what used to be a flat `topics/<slug>.md` file)
- `README.md` — a real symlink to `index.md` (`ln -s index.md README.md`), so the directory
  renders on GitHub and resolves cleanly as a URL
- `.locale-peer-id` — a bare hash, byte-identical across every locale's version of "the same"
  topic. This is the cross-locale identity key: two directories with different slugs (see
  "Slugs can differ by locale" below) are the same topic if and only if their `.locale-peer-id`
  matches. Never regenerate or hand-edit this file — copy it verbatim when creating a new
  locale's version of an existing topic, and never let two different topics share one.

There is no build step, no CI — consistency is entirely convention-based, so following the
existing pattern precisely (across all 11 locales, not just one) is the whole job.

## Slugs can differ by locale

Directory names (slugs) are usually identical across locales, but a topic whose slug contains a
dialect-variant word is spelled per-locale: e.g. the topic at
`locales/en-us/topics/hard-cash-releasing-savings-deficit-defense/` is the same topic as
`locales/en-gb/topics/hard-cash-releasing-savings-deficit-defence/` and
`locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/` — same
`.locale-peer-id`, different slug. The six full-language translations (es-es, fr-fr, ru-ru,
zh-cn, ar-eg, cy-gb) keep the *English* (en-gb-oxendict) slug for every topic — only the content
is translated, never the directory name.

## Adding a new topic

1. **Filename**: kebab-case, matching the concept, e.g.
   `locales/en-gb-oxendict/topics/net-monetary-benefit/index.md`. This slug is also what every
   cross-link and the README link use — pick it first and don't rename later without grepping for
   every reference across every locale.

2. **File structure** — follow this exactly (see `locales/en-gb-oxendict/topics/cost-of-delay/index.md` or
   `locales/en-gb-oxendict/topics/quality-adjusted-life-year/index.md` as reference examples):

   ```markdown
   # Title (Optional Abbreviation)

   A 2–4 sentence definition/intro paragraph: what it is and why a software engineer building
   for national health service organizations should care.

   ## Why it matters

   Prose paragraph(s) — the argument for why this concept matters, grounded in a real
   institutional detail (a named rule, a named body, a named RCT) rather than generic claims.

   ## The math

   Formula(s) in a fenced ```` ``` ```` block (plain-text notation, not a real programming
   language). Cross-reference related topics inline where a formula depends on one, e.g.
   "For prioritization, see wsjf-and-cd3.md".

   ## Worked example

   One or more concrete numeric examples, each showing the arithmetic, not just the result.
   Label distinct scenarios in bold (e.g. "**Operational**:", "**Clinical**:").

   ## Software engineering connection

   How this concept maps onto software delivery / digital health engineering work. This is what
   makes the repo useful to its stated audience — never skip it even for a "pure" health-econ
   topic. Link related topics with relative Markdown links, e.g. `[flow efficiency](flow-metrics.md)`.

   ## Pitfalls

   Bulleted list, each a **bolded mistake name** followed by why it's wrong and how to avoid it.
   These should be mistakes people actually make, not strawmen.

   ## Sources

   Bulleted list of real, citable sources — books, papers, or URLs in angle brackets
   `<https://...>`. No source-free claims of specific figures (rates, thresholds, prices).
   ```

3. **Cross-links use `../<slug>/`** (sibling topic directory, same locale), e.g. `[DORA lead
   time](../dora-metrics/)`, not `dora-metrics.md`, not `topics/dora-metrics.md`, and not an
   absolute path — each topic now lives at `<locale>/topics/<slug>/index.md`, so a sibling is one
   level up and back down. Add a reciprocal link from the new topic into any existing topic it
   clearly relates to, and from existing topics into the new one where relevant — cross-linking is
   the repo's main navigation mechanism. Add the new topic to every locale you're maintaining, with
   the same `.locale-peer-id`; if you're only adding it in English for now, that's fine, but say so
   rather than leaving other locales silently out of sync.

4. **Update `README.md`** (links into `locales/en-gb-oxendict/topics/`, the default locale):
   - Add one bullet to the correct category section:
     `- [Title](locales/en-gb-oxendict/topics/new-file/) — one-line hook`. The hook is a punchy,
     specific description (often "X — Y" format), not a restatement of the title.
   - Keep bullets in the section's existing order (usually foundational → specific, or the
     order the category's narrative builds in) rather than strictly alphabetical — check the
     surrounding bullets before deciding where to insert.
   - If the new topic is foundational (something several other topics will depend on), consider
     whether it belongs in the "New here?" sentence at the top.
   - Do not create a new category section for one topic unless it genuinely doesn't fit any of
     the 8 existing ones (Economic reasoning foundations, Outcome measures, Economic analysis
     types, Health system operational economics, HTA frameworks and prevention economics,
     Software engineering and digital delivery, AI acceleration, Consumer health apps and
     devices).

5. **Dating figures**: any specific number quoted (a rate, a price, a threshold) should be dated
   in-line (e.g. "as of 2024") per the "Benchmark freshness" convention at the bottom of
   `README.md`, so future maintainers know what to re-verify.

## Editing an existing topic

- Preserve section headings and order even for a small fix — don't reorganize a file you're
  only correcting a number in.
- If you edit `locales/en-gb-oxendict/topics/<slug>/index.md` (the canonical English content),
  the other 10 locales now disagree with it until someone updates them too — say so rather than
  leaving it silently unsynced; you don't have to translate immediately, but flag the drift.
- If you change a topic's slug (directory name), grep the whole repo for the old slug (topics
  link to each other via `../<slug>/`) and for the old title text in `README.md` before
  finishing, in every locale that uses that slug — remember slugs can legitimately differ by
  locale (see above), so don't assume a rename in one locale applies to all of them.
- If you change what a file covers substantially, re-check whether its README hook line and its
  category placement still fit.
- Never touch `.locale-peer-id` when editing content — it identifies the topic across locales,
  not a particular translation's freshness.

## Validation checklist (run before finishing any structural change)

```bash
# Every locales/en-gb-oxendict/topics/*/ directory is linked from README.md, and vice versa
# (should be empty diffs):
comm -23 <(ls -d locales/en-gb-oxendict/topics/*/ | xargs -n1 basename | sort) \
         <(grep -o 'locales/en-gb-oxendict/topics/[a-z0-9-]*/' README.md | xargs -n1 basename | sort -u)
comm -13 <(ls -d locales/en-gb-oxendict/topics/*/ | xargs -n1 basename | sort) \
         <(grep -o 'locales/en-gb-oxendict/topics/[a-z0-9-]*/' README.md | xargs -n1 basename | sort -u)

# Every relative cross-link between topic files, in every locale, resolves to a real sibling
# directory:
for loc in locales/*/topics; do
  slugs=$(ls -d "$loc"/*/ | xargs -n1 basename)
  grep -rho '\]\.\./[a-z0-9.-]*/' "$loc"/*/index.md 2>/dev/null | sed 's/](\.\.\///;s#/$##' | sort -u | while read f; do
    echo "$slugs" | grep -qx "$f" || echo "BROKEN LINK in $loc -> $f"
  done
done

# Every topic directory has matching .locale-peer-id counts across locales (76 == 76 == ...):
for loc in locales/*/topics; do
  echo "$loc: $(find "$loc" -name .locale-peer-id | wc -l)"
done
```

Run all three before treating an add/rename/reorganize task as done. A README diff failing means
a topic was added without a README entry, or a README entry points at a nonexistent slug; a
broken cross-link means a `../slug/` typo'd or wasn't updated after a rename; a mismatched
peer-id count means a locale is missing a topic (or has an orphan one) relative to the others.
