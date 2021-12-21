import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import WithLayout from '../../components/shared/layout/WithLayout';
import ToggleSwitch from '../../components/shared/inputs/toggleSwitch/ToggleSwitch';
import { InsuranceOfferCard } from '../../components/insuranceOfferCard/InsuranceOfferCard';
import {
	filterChanged,
	selectSelectedOffer,
	selectToken,
	selectVisibleOffers,
} from '../../store/reducers';

import './InsuranceOffers.scss';

const InsuranceOffers = () => {
	const dispatch = useAppDispatch();
	const selectedOffer = useAppSelector(selectSelectedOffer);
	const insuranceOffers = useAppSelector(selectVisibleOffers);
	const [isRightSelected, setIsRightSelected] = useState(true);
	const token = useAppSelector(selectToken);

	if (!token) {
		return <Navigate to="/" />;
	}

	const getFilterValueFor = (value: boolean) => (value ? 'yearly' : 'monthly');

	const handleChange = (value: boolean) => {
		dispatch(filterChanged(getFilterValueFor(value)));
		setIsRightSelected(value);
	};

	return (
		<div className="insurance-offers-page-wrapper">
			<div className="insurance-offers-page-title">Select a plan</div>
			<div className="insurance-offers-page-filters">
				<div
					className={`insurance-plan ${isRightSelected ? '' : 'selected-plan'}`}
				>
					PAY MONTHLY
				</div>
				<ToggleSwitch onChange={handleChange} />
				<div
					className={`insurance-plan ${isRightSelected ? 'selected-plan' : ''}`}
				>
					PAY YEARLY
				</div>
			</div>
			<div className="insurance-offers-page-offers">
				{insuranceOffers.map(offer => (
					<InsuranceOfferCard
						offer={offer}
						isSelected={() => offer.type === selectedOffer?.type}
					/>
				))}
			</div>
			<div className="insurance-offers-page-link">
				<a href="https://www.qover.com">Show me the full comparison table</a>
				<div className="insurance-offer-page-link-icon" />
			</div>
		</div>
	);
};

export default WithLayout(InsuranceOffers);
