import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFormByName, useCompositeForm } from '../../utils/formHooks';
import FormGroup from '../shared/form/FormGroup';
import initialState from './initialState';
import styles from './PriceForm.module.scss';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectCars, selectToken, setOffers } from '../../store/reducers';
import { getInsuranceOffersForCar } from '../../api';
import { getFormName } from '../../utils/validations';

const PriceForm = () => {
	const [forms, isValid, validate] = useCompositeForm(initialState);
	const [isLoading, setIsLoading] = useState(false);

	const cars = useAppSelector(selectCars);
	const token = useAppSelector(selectToken);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const form = getFormByName(forms, 'car');
		form?.setAdditionalProps({
			data: [
				{ value: '', label: '' },
				...cars.map(car => ({ value: car._id, label: car.name })),
			],
		});
	}, [cars]);

	const getCarInsuranceOffers = () => {
		const age = getFormByName(forms, 'age')?.value;
		const carId = getFormByName(forms, 'car')?.value;
		const price = getFormByName(forms, 'price')?.value;
		setIsLoading(true);
		getInsuranceOffersForCar({
			carId,
			params: { age, price, plan: 'all' },
			token: token!,
		})
			.then(data => {
				dispatch(setOffers(data.offers));
				return navigate('/insurance');
			})
			.catch(error => {
				console.log(error);
				if (!error.message) return;
				console.log(error);
				const errors = error.message.map((message: string) => ({
					name: getFormName(message),
					message,
				}));
				console.log(errors);
				errors.forEach(
					({ name, message }: { name: string; message: string }) => {
						const form = getFormByName(forms, name);
						form?.setErrorMessage(message);
					}
				);
			})
			.finally(() => setIsLoading(false));
	};

	const submit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		validate();
		if (isValid()) {
			getCarInsuranceOffers();
		}
	};

	return (
		<form className={styles.form}>
			<FormGroup forms={forms} />
			<button
				type="submit"
				disabled={isLoading}
				onClick={submit}
				className={styles.submit}
			>
				Get a price
			</button>
		</form>
	);
};

export default PriceForm;
