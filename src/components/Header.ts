import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Header extends BaseComponent {
	private readonly _signInBtn: Locator;
	private readonly _signInAsGuest: Locator;

	constructor(page: Page) {
		super(page, 'header');
		this._signInBtn = this._container.locator('.header_signin');
		this._signInAsGuest = this._container.locator('.-guest');
	}

	get signInBtn() {
		return this._signInBtn;
	}

	get signInAsGuest() {
		return this._signInAsGuest;
	}
}
