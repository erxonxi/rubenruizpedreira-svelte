<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import './styles.css';
</script>

<svelte:head>
	<title>Rubén Ruiz Pedreira</title>
	<meta name="description" content="Rubén Ruiz Pedreira's personal website" />
</svelte:head>

<main class="app">
	<NavBar />
	<slot />
</main>

<style>
	.app {
		margin: 0 auto;
		max-width: 960px;
	}
</style>
