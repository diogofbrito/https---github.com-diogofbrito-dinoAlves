import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre.jsx';
import { Colecoes } from './pages/Colecoes';
import { ErrorPage } from './pages/ErrorPage/index';
import { Figurinos } from './pages/Figurinos.jsx';
import { Styling } from './pages/Styling.jsx';
import { Colecao } from './pages/Colecao.jsx';
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
				path: '/colecoes/:id',
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
