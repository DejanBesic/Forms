import React from 'react';

export type ValidatorFunction<T> = (value: T) => boolean;

export interface InputProps<T> {
	label?: string;
	name?: string;
	value?: T;
	setValue: (value: T) => void;
	errorMessage?: string;
	onBlur: () => void;
}

export interface UseFormProps<T, P extends InputProps<T>> {
	validator: ValidatorFunction<T>;
	errorMessageText: string;
	name: string;
	label: string;
	component: React.FC<P>;
	initialValue: T;
}

export type FormState<T, P extends InputProps<T>> = {
	value?: T;
	setValue: (value: T) => void;
	validate: () => void;
	errorMessage: string;
	isValid: () => boolean;
	name: string;
	label: string;
	component: React.FC<P>;
};

export type CompositeFormState<T, P extends InputProps<T>> = [
	FormState<T, P>[],
	(forms: FormState<T, P>[]) => void,
	() => boolean,
	() => void
];
