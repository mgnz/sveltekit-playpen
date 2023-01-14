<script lang="ts">
	let count: number = 0;
	const increment = () => {
		count += 1;
	};
</script>

<button on:click="{increment}">
	<h1>count is {count}</h1>
</button>

<style lang="scss">
	button {
		h1 {
			color: red;
		}
	}
</style>
