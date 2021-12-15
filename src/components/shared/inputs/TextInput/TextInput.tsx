import React from 'react';
import { ComponentProps } from '../../../../utils/types';

const TextInput = ({
	name,
	label,
	value,
	setValue,
	errorMessage,
	onBlur,
}: ComponentProps<string>) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div style={{ marginBottom: 10, display: 'flex', flexDirection: 'column' }}>
			<label htmlFor={name}>{label}</label>
			<input
				onBlur={onBlur}
				name={name}
				value={value}
				onChange={handleChange}
			/>
			<span style={{ color: 'red', fontSize: 14 }}>{errorMessage}</span>
		</div>
	);
};
export default TextInput;
