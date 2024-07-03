import { Outlet } from 'react-router-dom';
import { Menu } from './components/Menu/index.jsx';
import { Years } from './components/YearsBar/index.jsx';
import { WipeyCanvas } from './components/WipeyCanvas/index.jsx';
import { AppProvider } from './contexts/AppContext';
import './index.css';
function App() {
	return (
		<AppProvider>
			<Menu />
			<Years />
			<Outlet />
		</AppProvider>
	);
}

export default App;
