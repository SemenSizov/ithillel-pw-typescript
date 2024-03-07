import { Locator, Page } from '@playwright/test';
import { Header } from '../components/Header';

export abstract class BasePage {
	protected readonly _page: Page;
	protected readonly _url: string;
	protected readonly _waitPageSelector: string;
	protected readonly _waitPageLocator: Locator;
	protected readonly _anyVar: string;
	protected readonly _header: Header;

	constructor(page: Page, url: string, waitPageSlector = 'html') {
		this._page = page;
		this._url = url;
		this._waitPageLocator = this._page.locator(waitPageSlector);
		this._header = new Header(this._page);
	}

	get header() {
		return this._header;
	}

	async navigate() {
		await this._page.goto(this._url);
		await this._waitPageLocator.waitFor({ state: 'visible' });
	}
}
