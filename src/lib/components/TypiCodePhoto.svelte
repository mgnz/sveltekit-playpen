<!-- <script lang="ts" context="module">
	/** @type {import('./$types').PageLoad} */
	export const load = async ({ fetch: any }) => {
		debugger;

		const url = 'https://jsonplaceholder.typicode.com/photos/1';
		console.log(`TypiCodePhoto: load ${url}`);

		const response = await fetch(url);
		console.log(`TypiCodePhoto: Ok? ${response.ok}`);

		if (response.ok) {
			return {
				props: {
					photo: await response.json()
				}
			};
		} else {
			return {
				status: response.status,
				statusText: response.statusText,
				error: new Error(`Could not load ${url}`)
			};
		}
	};
</script> 
<script context="module">
-->
<script lang="ts">
	import { onMount } from 'svelte';

	console.log('TypiCodePhoto: script');

	let loadPhotoPromise = Promise.resolve([]);

	const loadPhoto = async (id: number = 1) => {
		//async function loadPhoto(id: number = 1) {
		const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
		console.log(`TypiCodePhoto: load ${url}`);

		const response = await fetch(url);
		console.log(`TypiCodePhoto: Ok? ${response.ok}`);

		if (response.ok) {
			let { id, title, thumbnailUrl } = await response.json();
			return { id, title, thumbnailUrl };
		} else {
			return {
				status: response.status,
				statusText: response.statusText,
				error: new Error(`Could not load ${url}`)
			};
		}
	};

	onMount(async () => {
		loadPhotoPromise = loadPhoto(10);
	});
</script>

<!-- {#if photo}
	debugger;

	<h1>{photo.title}</h1>
	<img src={photo.thumbnailUrl} alt="STFU" />
	<h2>{message}</h2>
{/if} -->

{#await loadPhotoPromise}
	<p>...waiting</p>
{:then data}
	<h3>{data.id}</h3>
	<h3>{data.title}</h3>
	<img height="100" src={data.thumbnailUrl} alt={data.title} />
{:catch exception}
	<p style="color: red">Status : {exception.status}</p>
	<p style="color: red">Status Text : {exception.statusText}</p>
	<p style="color: red">Error Message : {exception.error.description}</p>
{/await}

<style lang="scss">
</style>
