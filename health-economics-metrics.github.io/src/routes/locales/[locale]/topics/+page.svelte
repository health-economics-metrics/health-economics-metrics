<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { SectionList, SectionListItem } from '@lilydesignsystem/svelte-headless';

	let { data } = $props();
	const locale = $derived(page.params.locale);
</script>

<svelte:head>
	<title>Topics A–Z — Health Economics Metrics</title>
	<meta name="description" content="Every topic in Health Economics Metrics, listed A to Z." />
</svelte:head>

<div class="page page-topics">
	<header class="page-header">
		<h1>Topics A–Z</h1>
		<p>All {data.topicCount} topics in alphabetical order. For reading order, see the <a href="{base}/locales/{locale}/contents/">contents</a>.</p>
		<nav class="alphabet" aria-label="Jump to letter">
			{#each data.groups as group (group.letter)}
				<a href="#letter-{group.letter}">{group.letter}</a>
			{/each}
		</nav>
	</header>

	{#each data.groups as group (group.letter)}
		<section class="letter-group" aria-labelledby="letter-{group.letter}">
			<h2 class="letter-heading" id="letter-{group.letter}">{group.letter}</h2>
			<SectionList class="letter-list">
				{#each group.topics as topic (topic.slug)}
					<SectionListItem class="letter-item">
						<a class="letter-link" href="{base}{topic.href}">{topic.title}</a>
						<span class="letter-part">{topic.part}</span>
						{#if topic.blurb}
							<span class="letter-blurb">{topic.blurb}</span>
						{/if}
					</SectionListItem>
				{/each}
			</SectionList>
		</section>
	{/each}
</div>
