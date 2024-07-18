import { Outlet, useLocation } from 'react-router-dom';
import { Menu } from './components/Menu.jsx';
import { YearsBar } from './components/YearsBar.jsx';
import { WipeyCanvas } from './components/WipeyCanvas/index.jsx';
import { AppProvider } from './contexts/AppContext';
import { NextUIProvider } from '@nextui-org/react';

function App() {
	const location = useLocation();
	const isFigurinosPage = location.pathname.startsWith('/figurinos');
	const isStylingPage = location.pathname.startsWith('/styling');

	return (
		<NextUIProvider>
			<AppProvider>
				<Menu />
				{isFigurinosPage && <YearsBar type='figurinos' />}
				{isStylingPage && <YearsBar type='styling' />}
				<Outlet />
			</AppProvider>
		</NextUIProvider>
	);
}

export default App;
