import { useEffect, useState } from 'react';
import { useCompositeForm } from '../../utils/formHooks';
import FormGroup from '../shared/form/FormGroup';
import initialState from './initialState';
import styles from './PriceForm.module.scss';
import { getAllCars } from '../../api';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectCars, setCars } from '../../store/reducers';
import { isRequired } from '../../utils/validations';
import NumberInput from '../shared/inputs/textInput/numberInput/NumberInput';
import OutlinedDropdown from '../shared/inputs/dropdown/outlinedDropdown/OutlinedDropdown';

const asd = [
	{
		name: 'age',
		label: 'Age of the driver',
		validator: isRequired,
		errorMessageText: 'Age is required',
		component: NumberInput,
		initialValue: '',
		type: 'number',
	},
	{
		name: 'car',
		label: 'Car',
		validator: isRequired,
		errorMessageText: 'Car is required',
		component: OutlinedDropdown,
		initialValue: '',
		data: [{ value: '', label: '' }],
	},
	{
		name: 'price',
		label: 'Purchase price',
		validator: isRequired,
		errorMessageText: 'Price is required',
		component: NumberInput,
		initialValue: '',
		type: 'number',
	},
];

const PriceForm = () => {
	const [state, setState] = useState(asd);

	const [forms, setForms, isValid, validate] = useCompositeForm(initialState);
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useAppDispatch();

	useEffect(() => {
		setIsLoading(true);
		getAllCars()
			.then(cars => {
				dispatch(setCars(cars));
				setState([
					{
						name: 'age',
						label: 'Age of the driver',
						validator: isRequired,
						errorMessageText: 'Age is required',
						component: NumberInput,
						initialValue: '',
						type: 'number',
					},
					{
						name: 'car',
						label: 'Car',
						validator: isRequired,
						errorMessageText: 'Car is required',
						component: OutlinedDropdown,
						initialValue: '',
						data: cars.map(car => ({ label: car.name, value: car._id })),
					},
					{
						name: 'price',
						label: 'Purchase price',
						validator: isRequired,
						errorMessageText: 'Price is required',
						component: NumberInput,
						initialValue: '',
						type: 'number',
					},
				]);
			})
			.catch(console.log)
			.finally(() => setIsLoading(false));
	}, []);

	const submit = () => {
		validate();
		if (isValid()) {
			alert('YAAAAAS');
		} else {
			alert('NAAAAAH');
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
