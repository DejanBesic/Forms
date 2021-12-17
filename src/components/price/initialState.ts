import { isRequired } from '../../utils/validations';
import Dropdown from '../shared/inputs/dropdown/Dropdown';
import TextInput from '../shared/inputs/textInput/TextInput';

export default [
	{
		name: 'age',
		label: 'Age of the driver',
		validator: isRequired,
		errorMessageText: 'This field is required',
		component: TextInput,
		initialValue: '',
		type: 'number',
	},
	{
		name: 'car',
		label: 'Car',
		validator: isRequired,
		errorMessageText: 'This field is required',
		component: Dropdown,
		initialValue: '',
		data: [
			{
				label: 'Audi',
				value: 'audi',
			},
			{
				label: 'Volkswagen',
				value: 'volkswagen',
			},
			{
				label: 'Opel',
				value: 'opel',
			},
		],
	},
	{
		name: 'price',
		label: 'Purchase price',
		validator: isRequired,
		errorMessageText: 'This field is required',
		component: TextInput,
		initialValue: '',
		type: 'number',
	},
];
