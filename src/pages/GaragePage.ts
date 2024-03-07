import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class GaragePage extends BasePage {
	constructor(page: Page) {
		super(page, '/panel/garage');
	}

	listCars() {
		console.log('cars');
	}
}
