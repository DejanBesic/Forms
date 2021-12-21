import PriceForm from '../../components/price/PriceForm';
import WithLayout from '../../components/shared/layout/WithLayout';
import styles from './Price.module.scss';

const PricePage = () => (
	<div className={styles.background}>
		<div className={styles.mask}>
			<PriceForm />
		</div>
	</div>
);

export default WithLayout(PricePage);
