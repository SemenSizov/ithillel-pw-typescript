import { Locator, Page } from '@playwright/test';

export abstract class BaseComponent {
	protected readonly _page: Page;
	protected readonly _container: Locator;

	constructor(page: Page, containerSelector: string) {
		this._page = page;
		this._container = this._page.locator(containerSelector);
	}
}
