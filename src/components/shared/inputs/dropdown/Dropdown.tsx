import React from 'react';
import { DropDownData } from './types';
import { InputProps } from '../../../../utils/types';

const Dropdown = ({
	classNames,
	customStyles,
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

	const {
		container,
		error,
		label: labelStyles,
		option,
		select,
	} = customStyles || {};

	return (
		<div className={`${classNames?.join(' ')} ${container?.join(' ')}`}>
			<label htmlFor={name} className={labelStyles?.join(' ')}>
				{label}
			</label>
			<select
				className={select?.join(' ')}
				name={name}
				onChange={handleChange}
				value={value}
			>
				{data?.map(item => (
					<option className={option?.join(' ')} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
			{errorMessage && <span className={error?.join(' ')}>{errorMessage}</span>}
		</div>
	);
};
export default Dropdown;
