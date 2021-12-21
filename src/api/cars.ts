import { get, getParsedParams } from '../utils/api';
import { Car, InsuranceOffer, InsuranceOfferType } from '../store/types';

type CarInsuranceParams = {
	age: number;
	price: number;
	planType: InsuranceOfferType | 'all';
};

export const getAllCars = () => get<Car[]>('cars');
export const getInsuranceOffersForCar = (
	carId: string,
	params: CarInsuranceParams,
	token: string
) =>
	get<{ offers: InsuranceOffer[] }>(
		`cars/${carId}/?${getParsedParams(params)}`,
		{ Authorization: `Bearer ${token}` }
	);
