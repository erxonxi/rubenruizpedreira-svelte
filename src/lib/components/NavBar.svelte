<script lang="ts">
	import logo from '$lib/images/logo.png';

	export let lang: string;

	let menuOpened = false;

	function toggleMenu() {
		menuOpened = !menuOpened;
	}
</script>

<nav class="navbar">
	<div>
		<a href="/{lang}">
			<img src={logo} alt="logo" width="38px" height="38px" />
		</a>
	</div>

	<div class="navbar__links">
		<a href="/{lang}/about">About</a>
	</div>

	<div class="navbar__mobile_menu" style="display: {menuOpened ? 'flex' : 'none'}">
		<a href="/{lang}/about">About</a>
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
		padding: 1rem 1.25rem;
		position: relative;
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
		border-radius: 4px;
		flex-direction: column;
		position: absolute;
		top: 100%;
		left: 37%;
		background-color: var(--primary-surface);
		width: 60%;
		padding: 1rem;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		gap: 1rem;
	}

	.navbar__mobile_menu a {
		display: block;
		color: #000;
		padding: 1rem 1rem;
		border-radius: 4px;
	}

	.navbar__mobile_menu a:hover {
		background-color: var(--primary-surface-shadow);
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
