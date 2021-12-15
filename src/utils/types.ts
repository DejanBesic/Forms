import React from 'react';

export type Value = string | boolean | undefined;
export type ValidatorFunction<T> = (value: T) => boolean;

export interface ComponentProps<T> {
	label?: string;
	name?: string;
	value?: T;
	setValue: (value: T) => void;
	errorMessage?: string;
	onBlur: () => void;
}

export interface UseFormProps<T> {
	validator: ValidatorFunction<T>;
	errorMessageText: string;
	name: string;
	label: string;
	component: React.FC<ComponentProps<T>>;
	initialValue: T;
}

export type FormState<T> = {
	value?: T;
	setValue: (value: T) => void;
	validate: () => void;
	errorMessage: string;
	isValid: () => boolean;
	name: string;
	label: string;
	component: React.FC<ComponentProps<T>>;
};

export type CompositeFormState<T> = [
	FormState<T>[],
	(forms: FormState<T>[]) => void,
	() => boolean,
	() => void
];
