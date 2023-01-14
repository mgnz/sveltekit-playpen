<script lang="ts">
	let post: any = {};

	const getPost = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/photos/1');
		const json = await response.json();

		console.log(json);
		return json;
	};

	$: getPost().then((val) => {
		post = val;
	});
</script>

<h1>{post.title}</h1>
<img src={post.thumbnailUrl} />

<style lang="scss">
</style>
