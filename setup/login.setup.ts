import { test } from '@playwright/test';
import { MainPage } from '../src/pages/mainPage/MainPage';

test.describe('Save storage state', () => {
	test('login as user', async ({ page }) => {
		const welcomePage = new MainPage(page);
		await welcomePage.navigate();
		const loginForm = await welcomePage.openLoginForm();
		await loginForm.loginWithCredentials(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
		await page.waitForSelector('app-garage');
		await page.context().storageState({ path: 'user-state.json' });
	});
});
