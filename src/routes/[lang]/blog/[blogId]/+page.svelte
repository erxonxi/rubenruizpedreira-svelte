<script>
	import { page } from '$app/stores';
</script>

<main>
	{@html $page.data.html}
</main>

<style>
	main {
		padding: 0 2.5em;
	}
</style>
