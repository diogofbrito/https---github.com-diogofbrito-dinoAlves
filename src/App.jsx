import { Outlet } from 'react-router-dom';
import { Menu } from './components/Menu.jsx';
import { YearsBar } from './components/YearsBar.jsx';
import { WipeyCanvas } from './components/WipeyCanvas/index.jsx';
import { AppProvider } from './contexts/AppContext';
import { NextUIProvider } from '@nextui-org/react';

function App() {
	return (
		<NextUIProvider>
			<AppProvider>
				<Menu />
				<YearsBar />
				<Outlet />
			</AppProvider>
		</NextUIProvider>
	);
}

export default App;
