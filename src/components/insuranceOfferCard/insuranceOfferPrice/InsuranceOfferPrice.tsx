import './InsuranceOfferPrice.scss';

interface InputProps {
	price: number;
}

const InsuranceOfferPrice = ({ price }: InputProps) => (
	<div className="insurance-offer-price-wrapper">
		<div className="insurance-offer-price-money-wrapper">
			<span className="insurance-offer-price-price">{price}</span>
			<span className="insurance-offer-price-currency">€</span>
		</div>
		<span className="insurance-offer-price-subtitle">YEARLY INCL. TAXES</span>
	</div>
);

export default InsuranceOfferPrice;
