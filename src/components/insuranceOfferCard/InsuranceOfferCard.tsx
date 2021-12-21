import { useDispatch } from 'react-redux';
import {
	getCoverageMessage,
	getDurationTravelMessage,
	getMedicalExpensesMessage,
	getPersonalAssistanceMessage,
} from './util';

import styles from './InsuranceOfferCard.module.scss';
import { selectedOffer } from '../../store/reducers';
import { InsuranceOffer, InsuranceOfferType } from '../../store/types';
import { InsuranceOfferBtn } from './insuranceOfferButton';
import InsuranceOfferPrice from './insuranceOfferPrice/InsuranceOfferPrice';
import InsuranceOfferField from './insuranceOfferField/InsuranceOfferField';
import InsuranceOfferTravelAssistance from './insuranceOfferTravelAssistance/InsuranceOfferTravelAssistance';

interface InputProps {
	offer: InsuranceOffer;
	isSelected: () => boolean;
}

export const InsuranceOfferCard = ({ isSelected, offer }: InputProps) => {
	const {
		price,
		coverage,
		duration,
		medicalExpenses,
		personalAssistance,
		travelAssistance,
		type,
	} = offer;
	const dispatch = useDispatch();

	const getTitleFor = (offerType: InsuranceOfferType) =>
		offerType.includes('global') ? 'Global' : 'Universe';

	const onClick = () => {
		dispatch(selectedOffer(type));
	};

	return (
		<div
			className={`${styles.wrapper} ${
				isSelected() ? styles.selected : styles.unselected
			}`}
		>
			<div className={styles.title}>{getTitleFor(type)}</div>
			<div className={styles.breaker} />
			<InsuranceOfferPrice price={price} />
			<div className={styles.breaker} />
			<InsuranceOfferField text={getDurationTravelMessage(duration)} />
			<div className={styles.breaker} />
			<InsuranceOfferField text={getMedicalExpensesMessage(medicalExpenses)} />
			<div className={styles.breaker} />
			<InsuranceOfferField
				text={getPersonalAssistanceMessage(personalAssistance)}
			/>
			<div className={styles.breaker} />
			<InsuranceOfferTravelAssistance value={travelAssistance} />
			<div className={styles.breaker} />
			<InsuranceOfferField text={getCoverageMessage(coverage)} />
			<div className={styles.breaker} />
			<InsuranceOfferBtn onClick={onClick} isSelected={isSelected()} />
		</div>
	);
};

export default InsuranceOfferCard;
