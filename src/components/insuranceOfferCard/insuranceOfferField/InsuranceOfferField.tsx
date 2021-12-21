import React from 'react';
import { InputProps } from './types';

import './InsuranceOfferField.scss';

const InsuranceOfferField = ({ text }: InputProps) => {
	const getBoldText = (message: string) => (
		<span className="bold-text">{`${message} `}</span>
	);
	const getNormalText = (message: string) => (
		<span className="normal-text">{`${message} `}</span>
	);

	const getText = React.useMemo(
		() =>
			text.map(({ isBold, value }) =>
				isBold ? getBoldText(value) : getNormalText(value)
			),
		[text]
	);

	return <div className="insurance-offer-text-field">{getText}</div>;
};

export default InsuranceOfferField;
