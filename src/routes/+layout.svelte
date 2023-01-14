<script lang="ts">
	import '$lib/styles/app.scss';

	const meta_description = `Awesome examples of SvelteKit sites in the wild`;

	const now = new Date();
</script>

<svelte:head>
	<title>Awesome SvelteKit</title>
	<meta name="description" content={meta_description} />
	<meta name="og:description" content={meta_description} />
	<meta name="twitter:creator" content="@jrib_" />
</svelte:head>

<h1>from /+layout.svelte {now} dd</h1>

<slot />
