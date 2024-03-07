import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import { GaragePage } from '../GaragePage';
import { LoginForm } from '../../components/LoginForm';

export class MainPage extends BasePage {
	private readonly _loginForm: LoginForm;
	constructor(page: Page) {
		super(page, '/');
		this._loginForm = new LoginForm(page);
	}

	async loginAsGuest() {
		await this._header.signInAsGuest.click();
		return new GaragePage(this._page);
	}

	async openLoginForm() {
		await this.header.signInBtn.click();
		return this._loginForm;
	}
}
