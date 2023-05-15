import { expect, test } from '@playwright/test';

test('not visible mobile menu icon in desktop', async ({ page }) => {
	page.setViewportSize({ width: 1920, height: 1080 });

	await page.goto('/');

	await page.waitForLoadState('networkidle');

	expect(await page.isVisible('.navbar__mobile_menu_icon')).toBe(false);
});

test('visible mobile menu icon in mobile', async ({ page }) => {
	page.setViewportSize({ width: 375, height: 812 });

	await page.goto('/');

	await page.waitForLoadState('networkidle');

	expect(await page.isVisible('.navbar__mobile_menu_icon')).toBe(true);
});
