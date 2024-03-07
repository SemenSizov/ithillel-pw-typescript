import { expect, test } from '@playwright/test';
import { MainPage } from '../../src/pages/mainPage/MainPage';

test('Check sign in buttons', async ({ page }) => {
	const mainPage = new MainPage(page);
	await mainPage.navigate();
	await expect(mainPage.header.signInBtn).toBeVisible();
	await expect(mainPage.header.signInBtn).toBeEnabled();
	await expect(mainPage.header.signInAsGuest).toBeVisible();
	await expect(mainPage.header.signInAsGuest).toBeEnabled();
});

