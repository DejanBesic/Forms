import React from 'react';
import { DropDownData } from './types';
import { InputProps } from '../../../../utils/types';

const Dropdown = ({
	name,
	label,
	value,
	setValue,
	errorMessage,
	data,
}: InputProps<string> & DropDownData) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className="dropdown-container">
			<label className="dropdown-label" htmlFor={name}>
				{label}
			</label>
			<select
				className="dropdown-select"
				name={name}
				onChange={handleChange}
				value={value}
			>
				{data?.map(item => (
					<option className="dropdown-option" value={item.value}>
						{item.label}
					</option>
				))}
			</select>
			<span className="dropdown-error">{errorMessage}</span>
		</div>
	);
};
export default Dropdown;
