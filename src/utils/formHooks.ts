import { useEffect, useState } from 'react';
import { CompositeFormState, FormState, UseFormProps, Value } from './types';

export const useForm = <T>({
	component,
	errorMessageText,
	initialValue,
	label,
	name,
	validator,
}: UseFormProps<T>): FormState<T> => {
	const [value, setValue] = useState(initialValue);
	const [errorMessage, setErrorMessage] = useState('');
	const [triggerValidation, setTriggerValidation] = useState(false);

	useEffect(() => {
		setErrorMessage(!validator(value) ? errorMessageText : '');
	}, [triggerValidation]);

	const validate = () => setTriggerValidation(!triggerValidation);

	const isValid = () => validator(value);

	return {
		component,
		errorMessage,
		isValid,
		label,
		name,
		setValue,
		validate,
		value,
	};
};

export const useCompositeForm = (
	initialState: UseFormProps<any>[]
): CompositeFormState<any> => {
	const forms = initialState.map(state => useForm(state));

	const isValid = () => !forms.find(form => !form.isValid());

	const setForms = () => {};

	const validate = () => forms.forEach(form => form.validate());

	return [forms, setForms, isValid, validate];
};
