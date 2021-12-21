import { useEffect } from 'react';
import { useCompositeForm } from '../../utils/formHooks';
import FormGroup from '../shared/form/FormGroup';
import initialState from './initialState';
import styles from './PriceForm.module.scss';
import { getAllCars } from '../../api';
import { useAppDispatch } from '../../store';
import { setCars } from '../../store/reducers';

const PriceForm = () => {
	const [forms, setForms, isValid, validate] = useCompositeForm(initialState);

	const dispatch = useAppDispatch();
	useEffect(() => {
		getAllCars()
			.then(cars => {
				dispatch(setCars(cars));
			})
			.catch(console.log)
			.finally(() => console.log('finally'));
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
			<button type="submit" onClick={submit} className={styles.submit}>
				Get a price
			</button>
		</form>
	);
};

export default PriceForm;
