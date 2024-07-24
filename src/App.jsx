import { Outlet } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { Menu } from './components/Menu';
import { NextUIProvider } from '@nextui-org/react';
import { ScrollProvider } from './contexts/ScrollContext.jsx';

function App() {
	return (
		<NextUIProvider>
			<AppProvider>
				<ScrollProvider>
					<Menu />
					<Outlet />
				</ScrollProvider>
			</AppProvider>
		</NextUIProvider>
	);
}

export default App;
