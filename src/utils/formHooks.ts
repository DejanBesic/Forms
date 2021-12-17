import { useState } from 'react';
import { useDidMountEffect } from './customHooks';
import {
	CompositeFormState,
	FormState,
	InputProps,
	UseFormProps,
} from './types';

export const useForm = <T, P extends InputProps<T>>({
	component,
	errorMessageText,
	initialValue,
	label,
	name,
	validator,
	...rest
}: UseFormProps<T, P>): FormState<T, P> => {
	const [value, setValue] = useState(initialValue);
	const [errorMessage, setErrorMessage] = useState('');
	const [triggerValidation, setTriggerValidation] = useState(false);

	useDidMountEffect(() => {
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
		...rest,
	};
};

export const useCompositeForm = (
	initialState: UseFormProps<any, any>[]
): CompositeFormState<any, any> => {
	const forms = initialState.map(state => useForm(state));

	const isValid = () => !forms.find(form => !form.isValid());

	const setForms = () => {};

	const validate = () => forms.forEach(form => form.validate());

	return [forms, setForms, isValid, validate];
};
