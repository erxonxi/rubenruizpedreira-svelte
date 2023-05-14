<script lang="ts">
	import logo from '$lib/images/logo.png';

	let menuOpened = false;

	function toggleMenu() {
		menuOpened = !menuOpened;
	}
</script>

<nav class="navbar">
	<div class="navbar__logo">
		<a href="/">
			<img src={logo} alt="logo" />
		</a>
	</div>

	<div class="navbar__links">
		<a href="/">Home</a>
		<a href="/about">About</a>
	</div>

	<div class="navbar__mobile_menu" style="display: {menuOpened ? 'block' : 'none'}">
		<a href="/">Home</a>
		<a href="/about">About</a>
	</div>

	<div on:click={toggleMenu} class="navbar__mobile_menu_icon">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-category-2"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M14 4h6v6h-6z" />
			<path d="M4 14h6v6h-6z" />
			<path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
		</svg>
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		padding: 0.5rem 2rem;
		position: relative;
	}

	.navbar__logo {
		width: 2rem;
	}

	.navbar__logo img {
		width: 100%;
	}

	.navbar__links {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: flex-end;
		gap: 2rem;
	}

	.navbar__links a {
		color: #000;
		text-decoration: none;
		font-size: 1.2rem;
	}

	.navbar__links a:hover {
		color: #000;
	}

	.navbar__mobile_menu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		background: #fff;
		width: 100%;
		padding: 1rem;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	}

	.navbar__mobile_menu a {
		display: block;
		margin-bottom: 1rem;
		color: #000;
	}

	.navbar__mobile_menu_icon {
		display: none;
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		.navbar__links {
			display: none;
		}

		.navbar__mobile_menu_icon {
			display: block;
			font-size: 1.5rem;
		}
	}
</style>
