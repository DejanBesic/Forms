import { useCompositeForm } from '../../utils/formHooks';
import FormGroup from '../shared/form/FormGroup';
import initialState from './initialState';

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
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: 200,
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<FormGroup forms={forms} />
			<button type="submit" onClick={submit} style={{ width: '100%' }}>
				Submit
			</button>
		</div>
	);
};

export default GetPrice;
