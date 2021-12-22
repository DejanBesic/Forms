import { useEffect, useState } from 'react';
import styles from './Price.module.scss';
import PriceForm from '../../components/price/PriceForm';
import WithLayout from '../../components/shared/layout/WithLayout';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectCars, setCars } from '../../store/reducers';
import { getAllCars } from '../../api';

const PricePage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const cars = useAppSelector(selectCars);
	const dispatch = useAppDispatch();

	useEffect(() => {
		setIsLoading(true);
		getAllCars()
			.then(response => {
				dispatch(setCars(response));
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			{!isLoading && cars && (
				<div className={styles.background}>
					<div className={styles.mask}>
						<PriceForm />
					</div>
				</div>
			)}
			{isLoading && cars.length > 0 && <div>Loading...</div>}
		</>
	);
};

export default WithLayout(PricePage);
