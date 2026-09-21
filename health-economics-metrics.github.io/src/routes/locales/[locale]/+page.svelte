<script>
	import { base } from '$app/paths';
	import { SectionList, SectionListItem } from '@lilydesignsystem/svelte-headless';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.summary} />
</svelte:head>

<div class="page page-home">
	<header class="book-hero">
		<h1>{data.title}</h1>
		<p class="book-hero-summary">{data.summary}</p>
	</header>

	{#if data.startHere.length}
		<section class="start-here" aria-labelledby="start-here">
			<h2 id="start-here">Start here</h2>
			<p>The three ideas everything else builds on.</p>
			<SectionList class="start-list">
				{#each data.startHere as item (item.href)}
					<SectionListItem class="start-item">
						<a class="start-link" href="{base}{item.href}">{item.title}</a>
						<span class="start-blurb">{item.blurb}</span>
					</SectionListItem>
				{/each}
			</SectionList>
		</section>
	{/if}

	<article class="prose">
		{@html data.html}
	</article>
</div>
