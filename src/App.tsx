import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Login from './components/login/Login';
import GetPrice from './components/price/GetPrice';
import { persistor, store } from './store';

const App = () => (
	<Provider store={store}>
		<PersistGate persistor={persistor} loading={null}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/price" element={<GetPrice />} />
			</Routes>
		</PersistGate>
	</Provider>
);

export default App;
