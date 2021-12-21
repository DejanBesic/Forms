import { isRequired } from '../../utils/validations';
import OutlinedDropdown from '../shared/inputs/dropdown/outlinedDropdown/OutlinedDropdown';
import NumberInput from '../shared/inputs/textInput/numberInput/NumberInput';

export default [
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
		errorMessageText: 'Price is required',
		component: NumberInput,
		initialValue: '',
		type: 'number',
	},
];
