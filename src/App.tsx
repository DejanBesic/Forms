import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { validateToken } from './api';
import { InsuranceOffersPage, LoginPage, PricePage } from './pages';
import { useAppDispatch, useAppSelector } from './store';
import { selectToken, setToken } from './store/reducers';

const App = () => {
	const token = useAppSelector(selectToken);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!token) return;
		validateToken(token).catch(({ statusCode }: { statusCode: number }) => {
			if (statusCode === 401) {
				dispatch(setToken(''));
			}
		});
	}, []);

	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/price" element={<PricePage />} />
			<Route path="/insurance" element={<InsuranceOffersPage />} />
		</Routes>
	);
};

export default App;
