import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { InsuranceOffersPage, LoginPage, PricePage } from './pages';
import { persistor, store } from './store';

const App = () => (
	<Provider store={store}>
		<PersistGate persistor={persistor} loading={null}>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/price" element={<PricePage />} />
				<Route path="/insurance" element={<InsuranceOffersPage />} />
			</Routes>
		</PersistGate>
	</Provider>
);

export default App;
