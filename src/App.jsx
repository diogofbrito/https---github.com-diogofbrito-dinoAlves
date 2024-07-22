import { Outlet } from 'react-router-dom';
import { WipeyCanvas } from './components/WipeyCanvas/index.jsx';
import { AppProvider } from './contexts/AppContext';
import { Menu } from './components/Menu';
import {  NextUIProvider } from '@nextui-org/react';

function App() {


	return (
		<NextUIProvider>
			<AppProvider>
				<Menu />
				<Outlet />
			</AppProvider>
		</NextUIProvider>
	);
}

export default App;
