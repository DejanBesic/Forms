import React from 'react';
import { ComponentProps } from '../../../../utils/types';

const CheckBox = ({
	label,
	name,
	value,
	setValue,
	errorMessage,
	onBlur,
}: ComponentProps<boolean>) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked);
	};

	return (
		<div style={{ marginBottom: 10, display: 'flex', flexDirection: 'column' }}>
			<div style={{ marginBottom: 10, display: 'flex', flexDirection: 'row' }}>
				<input
					type="checkbox"
					onBlur={onBlur}
					name={name}
					onChange={handleChange}
					checked={value}
				/>
				<label htmlFor={name}>{label}</label>
			</div>
			<span style={{ fontSize: 14, color: 'red' }}>{errorMessage}</span>
		</div>
	);
};
export default CheckBox;
