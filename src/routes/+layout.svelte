<script lang="ts">
	import { onMount } from 'svelte';

	import { loadTranslations } from '$lib/translations';
	import NavBar from '$lib/components/NavBar.svelte';
	import './styles.css';

	export let data: any;

	onMount(async () => {
		await loadTranslations(data.stuff.lang, data.stuff.route);
	});
</script>

<svelte:head>
	<title>Rubén Ruiz Pedreira</title>
	<meta name="description" content="Rubén Ruiz Pedreira's personal website" />
</svelte:head>

<main class="app">
	<NavBar lang={data.stuff.lang} />
	<slot />
</main>

<style>
	.app {
		margin: 0 auto;
		max-width: 960px;
	}
</style>
