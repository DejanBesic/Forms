import { useCompositeForm } from '../../utils/formHooks';
import FormGroup from '../shared/form/FormGroup';
import initialState from './initialState';
import styles from './GetPrice.module.scss';

const GetPrice = () => {
	const [forms, setForms, isValid, validate] = useCompositeForm(initialState);

	const submit = () => {
		validate();
		if (isValid()) {
			alert('YAAAAAS');
		} else {
			alert('NAAAAAH');
		}
	};

	return (
		<div className={styles.background}>
			<div className={styles.mask}>
				<form className={styles.form}>
					<FormGroup forms={forms} />
					<button type="submit" onClick={submit} className={styles.submit}>
						Get a price
					</button>
				</form>
			</div>
		</div>
	);
};

export default GetPrice;
