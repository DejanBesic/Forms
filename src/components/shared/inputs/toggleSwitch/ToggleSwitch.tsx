import React, { useState } from 'react';

import './ToggleSwitch.scss';

interface ToggleSwitchProps {
	initialValue?: boolean;
	onChange: (value: boolean) => void;
	customStyles?: {
		container: string[];
		switch: string[];
		slider: string[];
	};
}

const ToggleSwitch = ({
	onChange,
	initialValue = true,
	customStyles,
}: ToggleSwitchProps) => {
	const [active, setActive] = useState(initialValue);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked);
		setActive(e.target.checked);
	};

	return (
		<div>
			<label className="switch">
				<input type="checkbox" onChange={handleChange} checked={active} />
				<span className="slider round" />
			</label>
		</div>
	);
};
export default ToggleSwitch;
