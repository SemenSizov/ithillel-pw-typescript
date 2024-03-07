import { expect, test } from '@playwright/test';
import { CarsController } from '../../src/controllers/CarController';

test('api test', async ({ request }) => {
	const carsController = new CarsController(request);
	const brandsResponse = await carsController.getCarBrands();
	expect(brandsResponse.status).toBe('ok');
});
