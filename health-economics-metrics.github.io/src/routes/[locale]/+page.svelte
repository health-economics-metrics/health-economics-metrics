<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { ContentsNav, SectionList, SectionListItem } from '@lilydesignsystem/svelte-headless';
	import PartsList from '#lib/PartsList.svelte';
	import { ui } from '#lib/i18n.js';
	import { HERO } from '#lib/hero.js';
	import { tilesFor } from '#lib/tiles.js';

	let { data } = $props();
	const t = $derived(ui(page.params.locale));
	const tiles = $derived(tilesFor(page.params.locale));
	const subheadline = $derived(HERO[page.params.locale]?.tagline ?? HERO['en-001'].tagline);
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.summary} />
</svelte:head>

<div class="page page-home">
	<header class="book-hero">
		<h1>{data.title}</h1>
		<p class="book-hero-subheadline">{subheadline}</p>
		<p class="book-hero-summary">{data.summary}</p>
		<p class="book-hero-translations">
			{HERO[page.params.locale]?.translations ?? HERO['en-001'].translations}{#each data.translations as locale, i (locale.code)}{i ? ', ' : ''}<a
					href="/{locale.code}/">{locale.label}</a
				>{/each}
		</p>
	</header>

	<ul class="page-tiles">
		{#each tiles as tile, i (i)}
			<li class="page-tile">
				<h2>{tile.title}</h2>
				<p>{tile.text}</p>
				<p class="page-tile-link"><a href={resolve(data.tileHrefs[i].slice(1))}>{tile.link}</a></p>
			</li>
		{/each}
	</ul>

	{#if data.startHere.length}
		<section class="start-here" aria-labelledby="start-here">
			<h2 id="start-here">{t.startHere}</h2>
			<p>{t.startHereSubtitle}</p>
			<SectionList class="start-list">
				{#each data.startHere as item (item.href)}
					<SectionListItem class="start-item">
						<a class="start-link" href={resolve(item.href.slice(1))}>{item.title}</a>
						<span class="start-blurb">{item.blurb}</span>
					</SectionListItem>
				{/each}
			</SectionList>
		</section>
	{/if}

	<ContentsNav class="contents" label={t.navContents}>
		<PartsList parts={data.parts} />
	</ContentsNav>

	{#if data.trailingHtml}
		<article class="prose">
			{@html data.trailingHtml}
		</article>
	{/if}
</div>

<style>
	.book-hero-subheadline {
		margin: 0 0 1rem;
		font-size: 1.3em;
		font-weight: 600;
	}
	.book-hero-translations {
		margin: 0;
		font-size: 0.9em;
	}
</style>
