<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status === 404 ? 'Page not found' : 'Something went wrong'} — Health Economics Metrics</title>
</svelte:head>

<div class="page page-error">
	<header class="page-header">
		<h1>{page.status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
		{#if page.status === 404}
			<p>
				There is no page at this address. It may have moved, or the link that brought you here may
				be out of date.
			</p>
		{:else}
			<p>{page.error?.message ?? 'An unexpected error occurred.'}</p>
		{/if}
	</header>

	<p>Try one of these instead:</p>
	<ul class="error-links">
		<li><a href="{base}/contents/">Contents</a> — every topic in reading order</li>
		<li><a href="{base}/topics/">Topics A–Z</a> — look one thing up</li>
		<li><a href="{base}/search/">Search</a> — search all topics</li>
		<li><a href="{base}/">Home</a></li>
	</ul>
</div>
