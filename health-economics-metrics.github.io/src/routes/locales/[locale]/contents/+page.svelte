<script>
	import { base } from '$app/paths';
	import {
		ContentsList,
		ContentsListItem,
		ContentsNav,
		SectionHeading
	} from '@lilydesignsystem/svelte-headless';

	let { data } = $props();

	/** Anchor id for a part, so the sidebar and deep links can target it. */
	function partId(title) {
		return title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}
</script>

<svelte:head>
	<title>Contents — Health Economics Metrics</title>
	<meta name="description" content="Every topic in Health Economics Metrics, in reading order." />
</svelte:head>

<div class="page page-contents">
	<header class="page-header">
		<h1>Contents</h1>
		<p>
			All {data.topicCount} topics in reading order, across {data.parts.length} parts. Each topic covers
			one metric or concept: definition, why it matters, the math, a worked example, the software
			engineering connection, pitfalls, and sources.
		</p>
	</header>

	<ContentsNav class="contents" label="Contents">
		{#each data.parts as part (part.title)}
			<section class="contents-part" id={partId(part.title)}>
				<SectionHeading
					class="contents-part-heading"
					heading={part.title}
					subtitle="{part.entries.length} topics"
				/>
				<ContentsList class="contents-part-list">
					{#each part.entries as entry (entry.slug)}
						<ContentsListItem class="contents-entry">
							<a class="contents-entry-link" href="{base}{entry.href}">{entry.title}</a>
							{#if entry.blurb}
								<span class="contents-entry-blurb">{entry.blurb}</span>
							{/if}
						</ContentsListItem>
					{/each}
				</ContentsList>
			</section>
		{/each}
	</ContentsNav>
</div>
