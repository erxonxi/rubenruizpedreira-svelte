<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import './styles.css';

	export let data: any;
</script>

<svelte:head>
	<title>Rubén Ruiz Pedreira</title>
	<meta name="description" content="Rubén Ruiz Pedreira's personal website" />
</svelte:head>

<main class="app">
	<NavBar lang={data.stuff.lang} />
	<slot />
</main>

<footer>
	<p>
		This page is powered by <a href="https://svelte.dev">Svelte</a> and{' '}
		<a href="https://vercel.com">Vercel</a>
	</p>
</footer>

<style>
	.app {
		margin: 0 auto;
		max-width: 960px;
	}

	footer {
		margin: 0 auto;
		max-width: 960px;
		text-align: center;
		padding: 1rem 1.25rem;
	}

	footer p {
		font-size: 0.9rem;
		color: #666;
	}
</style>
