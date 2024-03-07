import { APIRequestContext } from '@playwright/test';
import { BaseController } from './BaseController';

export class CarsController extends BaseController {
	private readonly API_CAR_BRANDS = '/api/cars/brands';
	constructor(request: APIRequestContext) {
		super(request);
	}

	async getCarBrands() {
		const res = await this.get<CarControllerResp<CarBrand>>(this.API_CAR_BRANDS);
		return res.json;
	}
}

const resp: CarControllerResp<CarModel> = {
	status: 'asd',
	data: [{ id: 1, carBrandId: 3, title: 'asdaf' }],
};

type CarControllerResp<T> = {
	status: string;
	data: T[];
};

type CarModelResp = {
	status: string;
	data: CarModel[];
};

type CarBrandResp = {
	status: string;
	data: CarBrand[];
};

type CarModel = {
	id: number;
	carBrandId: number;
	title: string;
};

type CarBrand = {
	id: number;
	title: string;
	logoFilename: string;
};
