import './InsuranceOfferBtn.scss';

interface InputProps {
	isSelected: boolean;
	onClick: () => void;
}

const InsuranceOfferBtn = ({ isSelected, onClick }: InputProps) => {
	const getMessage = (isOfferSelected: boolean) =>
		isOfferSelected ? 'Plan selected' : 'Choose this plan';
	const getSelectedIcon = (isOfferSelected: boolean) =>
		isOfferSelected ? (
			<div className="insurance-offer-btn-seletec-icon" />
		) : null;

	return (
		<button
			type="button"
			onClick={() => onClick()}
			className={isSelected ? 'selected' : 'unselected'}
		>
			{getSelectedIcon(isSelected)}
			{getMessage(isSelected)}
		</button>
	);
};

export default InsuranceOfferBtn;
