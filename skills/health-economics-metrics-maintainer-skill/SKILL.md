---
name: health-economics-metrics-maintainer-skill
description: Maintain this repository — add or edit a topic file under topics/ in the established structure, keep README.md's categorized index in sync, cross-link new topics into related existing docs, and validate links and naming conventions. Use when the user asks to add a new metric/topic, edit an existing one, reorganize README.md, or check the repo for broken links or inconsistent structure.
---

# Maintaining health-economics-metrics

This repo is a flat set of Markdown reference docs (`topics/*.md`) plus a categorized index
(`README.md`). There is no build step, no frontmatter, no CI — consistency is entirely
convention-based, so following the existing pattern precisely is the whole job.

## Adding a new topic

1. **Filename**: kebab-case, matching the concept, e.g. `topics/net-monetary-benefit.md`. This
   slug is also what every cross-link and the README link use — pick it first and don't rename
   later without grepping for every reference.

2. **File structure** — follow this exactly (see `topics/cost-of-delay.md` or
   `topics/quality-adjusted-life-year.md` as reference examples):

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

3. **Cross-links use bare relative filenames** (same directory), e.g. `[DORA lead
   time](dora-metrics.md)`, not `topics/dora-metrics.md` and not an absolute path. Add a
   reciprocal link from the new topic into any existing topic it clearly relates to, and from
   existing topics into the new one where relevant — cross-linking is the repo's main navigation
   mechanism.

4. **Update `README.md`**:
   - Add one bullet to the correct category section:
     `- [Title](topics/new-file.md) — one-line hook`. The hook is a punchy, specific description
     (often "X — Y" format), not a restatement of the title.
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
- If you change a topic's filename, grep the whole repo for the old filename (topics link to
  each other) and for the old title text in `README.md` before finishing.
- If you change what a file covers substantially, re-check whether its README hook line and its
  category placement still fit.

## Validation checklist (run before finishing any structural change)

```bash
# Every topics/*.md file is linked from README.md, and vice versa (should be empty diffs):
comm -23 <(ls topics/*.md | sort) <(grep -o 'topics/[a-z0-9-]*\.md' README.md | sort -u)
comm -13 <(ls topics/*.md | sort) <(grep -o 'topics/[a-z0-9-]*\.md' README.md | sort -u)

# Every relative cross-link between topic files resolves to a real file:
grep -rho '\]([a-z0-9-]*\.md' topics/*.md | sed 's/](//' | sort -u | while read f; do
  [ -f "topics/$f" ] || echo "BROKEN LINK -> $f"
done
```

Run both before treating an add/rename/reorganize task as done. Either check failing means a
topic was added without a README entry, a README entry points at a nonexistent file, or a
cross-link typo'd a slug.
