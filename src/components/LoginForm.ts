import { Locator, Page } from '@playwright/test';
import { GaragePage } from '../pages/GaragePage';

export class LoginForm {
	private readonly _page: Page;
	private readonly _container: Locator;
	private readonly _emailInput: Locator;
	private readonly _errorMsg: Locator;
	private readonly _passwordInput: Locator;
	private readonly _loginBtn: Locator;

	constructor(page: Page) {
		this._page = page;
		this._container = this._page.locator('app-signin-modal');
		this._emailInput = this._container.locator('#signinEmail');
		this._errorMsg = this._container.locator('.invalid-feedback');
		this._passwordInput = this._container.locator('#signinPassword');
		this._loginBtn = this._container.getByRole('button', { name: 'Login' });
	}

	get emailInput() {
		return this._emailInput;
	}

	get errorMsg() {
		return this._errorMsg;
	}

	async loginWithCredentials(email: string, password: string) {
		await this.fill(email, password);
		await this._loginBtn.click();
		return new GaragePage(this._page);
	}

	async fill(email: string, password: string) {
		await this._emailInput.fill(email);
		await this._passwordInput.fill(password);
	}
}
