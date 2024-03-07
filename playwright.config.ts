import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
	testDir: './tests',
	fullyParallel: false,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',
	use: {
		baseURL: process.env.BASE_URL,
		trace: 'on-first-retry',
		httpCredentials: {
			username: process.env.HTTP_CREDS_LOGIN!,
			password: process.env.HTTP_CREDS_PASSWORD!,
		},
	},

	projects: [
		{
			name: 'E2E',
			testDir: './tests/e2e',
			use: { ...devices['Desktop Chrome'], headless: false },
		},
		{
			name: 'login',
			testDir: './setup',
			testMatch: 'login.setup.ts',
		},
		{
			name: 'API',
			testDir: './tests/api',
			use: {
				storageState: 'user-state.json',
				headless: true,
				screenshot: 'off',
				video: 'off',
			},
			dependencies: ['login'],
		},
	],
});
