<script>
	import { base } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>About — Health Economics Metrics</title>
	<meta name="description" content="How this book and this website are built." />
</svelte:head>

<div class="page page-about">
	<header class="page-header">
		<h1>About</h1>
	</header>

	<div class="prose">
		<h2>The book</h2>
		<p>
			<strong>Health Economics Metrics</strong> is a comprehensive introduction to health economics
			math, examples, and reasoning, written for software engineers building for national health
			service organizations worldwide. It runs to {data.topicCount} topics across {data.partCount} parts,
			available in {data.localeCount} locales — the canonical English (Oxford spelling), several
			other English variants, and AI translations into Welsh, Spanish, Chinese, Arabic, French, and
			Russian. Each topic covers one metric or concept: definition, why it matters, the math, a
			worked example, the software engineering connection, pitfalls, and sources.
		</p>
		<p>
			Pick a language from the <a href="{base}/">home page</a>, then use that locale's contents
			page for reading order, its A–Z index to look one thing up, or its search.
		</p>

		<h2>Benchmark freshness</h2>
		<p>
			Many quoted figures refresh annually — NHS unit costs, payment scheme prices, DORA clusters,
			DiGA counts, LLM prices. Each topic dates its benchmarks in-line. Re-verify before using any
			number in a live business case.
		</p>

		<h2>This website</h2>
		<p>
			This site is a <a href="https://svelte.dev/docs/kit">SvelteKit</a> application built with
			<a href="https://svelte.dev/docs/kit/adapter-static">adapter-static</a>, configured per its
			<a href="https://svelte.dev/docs/kit/adapter-static#GitHub-Pages">GitHub Pages guidance</a>:
			every page is prerendered to plain HTML at build time, so GitHub Pages serves files and
			nothing else. There is no server, no database, and no tracking.
		</p>
		<p>
			The book's Markdown is <em>vendored</em> into this repository under <code>content/</code>
			rather than referenced across repositories, so the site builds standalone from a fresh clone.
			<code>pnpm run sync</code> re-copies it from the book. The book's own README is the table of
			contents: its section headings become the parts of the book, and the order of its links
			becomes reading order, previous/next, and the sidebar.
		</p>

		<h2>Design system</h2>
		<p>
			The interface is built from the
			<a href="https://github.com/LilyDesignSystem">Lily Design System</a> — its headless Svelte
			components for structure and accessibility, and its PickerBar helper for the theme, language,
			text size, and share controls in the header. Headless means the components ship markup, ARIA,
			and keyboard behaviour but no styling, so the look here comes from a Lily theme plus this
			site's own stylesheet. All {data.themeCount} Lily default themes are available from the
			header, including the UK Government Digital Service, NHS England, NHS Scotland, NHS Wales, and
			US Web Design System palettes. Theme and text size choices persist in this browser.
		</p>

		<h2>Claude skills</h2>
		<p>
			The book ships two <a href="https://code.claude.com/docs/en/skills">Claude Skills</a>, so
			an agentic coding session can put it to work directly rather than recalling health
			economics from general training:
			<a
				href="https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md"
				>health-economics-metrics-skill</a
			>
			explains a concept, computes a metric from your own numbers, or assembles a multi-metric
			business case, grounded in this book's formulas, worked examples, and pitfalls; and
			<a
				href="https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md"
				>health-economics-metrics-maintainer-skill</a
			>
			carries the per-topic template and README conventions for maintaining the book itself. Drop
			either into a project's <code>.claude/skills/</code> to use it.
		</p>

		<h2>Licence and source</h2>
		<p>
			The book and this site are open source. See
			<a href="https://github.com/health-economics-metrics/health-economics-metrics">the book repository</a>
			and
			<a href="https://github.com/health-economics-metrics/health-economics-metrics.github.io"
				>this site's repository</a
			>.
		</p>
	</div>
</div>
