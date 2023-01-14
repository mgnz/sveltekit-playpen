<script lang="ts">
	import TypiCodePhoto from '$lib/components/TypiCodePhoto.svelte';
	import Counter from '$lib/components/Counter.svelte';
</script>

<body>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation ....</p>
	<Counter />
	<!-- <TypiCodePhoto /> -->
</body>

<style lang="scss">
	a {
		color: #dd1472;
		text-decoration: none;

		&:hover {
			color: #55ed37;
			text-decoration: none;
		}
	}
</style>
