import { APIRequestContext } from '@playwright/test';
import { Response } from './Response';

export class BaseController {
	private readonly _request: APIRequestContext;

	constructor(request: APIRequestContext) {
		this._request = request;
	}

	protected async get<T>(url: string) {
		const res = await this._request.get(url);
		return new Response<T>(res).init();
	}

	protected async post(url: string, data: object) {
		const res = await this._request.post(url, { data });
		return new Response(res).init();
	}

	protected async delete(url: string) {
		const res = await this._request.delete(url);
		return new Response(res).init();
	}
}
