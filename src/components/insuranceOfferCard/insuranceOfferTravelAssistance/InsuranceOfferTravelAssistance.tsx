import './InsuranceOfferTravelAssistance.scss';

interface InputProps {
	value: number;
}

const InsuranceOfferTravelAssistance = ({ value }: InputProps) => (
	<div className="insurance-offer-travel-assitance-field">
		<div>
			<span className="bold-text">Travel assistance abroad </span>
			<span>up to </span>
			<span className="bold-text">{value}</span>
		</div>
		<span>per insured per travel</span>
	</div>
);

export default InsuranceOfferTravelAssistance;
