import { Outlet } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { NextUIProvider } from '@nextui-org/react';
import { ScrollProvider } from './contexts/ScrollContext.jsx';
import { WipeyCanvas } from './components/WipeyCanvas/WipeyCanvas';
import { Menu } from './components/Menu';

function App() {
	return (
		<NextUIProvider>
			<AppProvider>
				<ScrollProvider>
					<Menu />
{/* 					<WipeyCanvas />
 */}					<Outlet />
				</ScrollProvider>
			</AppProvider>
		</NextUIProvider>
	);
}

export default App;
