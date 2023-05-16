<script lang="ts">
	import { t } from '$lib/translations';
</script>

<section>
	<h1 id="ruben-ruiz-pedreira">Rubén Ruiz Pedreira</h1>
	<h2 id="web-software-developer-freelancer">{$t('home.short_description')}</h2>

	<h3 id="about-me">{$t('home.about_me.title')}</h3>
	<p>{$t('home.about_me.body')}</p>

	<h3 id="my-career-path">{$t('home.my_career_path.title')}</h3>
	<p>{$t('home.my_career_path.body')}</p>

	<h3 id="my-work">{$t('home.my_work.title')}</h3>
	<p>{$t('home.my_work.body')}</p>

	<h3 id="interests">{$t('home.interests.title')}</h3>
	<p>{$t('home.interests.body')}</p>

	<h3 id="expertise">{$t('home.expertise.title')}</h3>
	<p>{$t('home.expertise.body')}</p>

	<h3 id="connect-with-me">{$t('home.connect_with_me.title')}</h3>

	<p>
		{$t('home.connect_with_me.body1')}
		<a href="https://www.linkedin.com/in/rub%C3%A9n-ruiz-pedreira/">LinkedIn</a>
		{$t('home.connect_with_me.body2')} <a href="https://github.com/your-github-link">GitHub</a>. {$t(
			'home.connect_with_me.body3'
		)}
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		flex: 0.6;
		padding: 0 2.5em;
		line-height: 1.6;
	}
</style>
