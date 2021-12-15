import CheckBox from './components/shared/inputs/CheckBox/CheckBox';
import TextInput from './components/shared/inputs/TextInput/TextInput';
import { useCompositeForm } from './utils/formHooks';
import { isRequired } from './utils/validations';

const initialState = [
	{
		name: 'firstName',
		label: 'First name:',
		validator: isRequired,
		errorMessageText: 'First name is required',
		component: TextInput,
		initialValue: '',
	},
	{
		name: 'lastName',
		label: 'Last name:',
		validator: isRequired,
		errorMessageText: 'Last name is required',
		component: TextInput,
		initialValue: '',
	},
	{
		name: 'rememberMe',
		label: 'Remember me',
		validator: () => true,
		errorMessageText: '',
		component: CheckBox,
		initialValue: false,
	},
];

const App: Function = () => {
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
			{forms.map((form, index) => {
				const Input = form.component;
				return (
					<Input
						label={form.label}
						name={`${index}`}
						setValue={e => {
							form.setValue(e);
							form.validate();
						}}
						onBlur={form.validate}
						value={form.value}
						errorMessage={form.errorMessage}
					/>
				);
			})}
			<button type="submit" onClick={submit} style={{ width: '100%' }}>
				Submit
			</button>
		</div>
	);
};

export default App;
