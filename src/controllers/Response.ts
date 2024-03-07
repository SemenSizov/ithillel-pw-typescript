import { APIResponse } from '@playwright/test';

export class Response<T> {
	private _response: APIResponse;
	private _status: number;
	private _json: T;
	private _headers: object;

	constructor(response: APIResponse) {
		this._response = response;
	}

	async init() {
		this._json = await this._response.json();
		this._status = this._response.status();
		this._headers = this._response.headers();
		return this;
	}

	get status() {
		return this._status;
	}

	get json() {
		return this._json;
	}

	get headers() {
		return this._headers;
	}
}
