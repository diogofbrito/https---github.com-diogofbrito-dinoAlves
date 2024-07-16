import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre/index';
import { Colecoes } from './pages/Colecoes';
import { ErrorPage } from './pages/ErrorPage/index';
import { Figurinos } from './pages/Figurinos';
import { Styling } from './pages/Styling';
import { Colecao } from './pages/Colecao';
import { HospitalRoupa } from './pages/HospitalRoupa.jsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/sobre',
				element: <Sobre />,
			},
			{
				path: '/colecoes',
				element: <Colecoes />,
			},
			{
				path: '/colecoes/:path',
				element: <Colecao />,
			},
			{
				path: '/figurinos',
				element: <Figurinos />,
			},
			{
				path: '/styling',
				element: <Styling />,
			},
			{
				path: '/hospitalRoupa',
				element: <HospitalRoupa />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
