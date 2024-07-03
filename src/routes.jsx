import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home/index';
import { Sobre } from './pages/Sobre/index';
import { ColecoesLista } from './pages/Colecoes/ColecoesLista/index';
import { ErrorPage } from './pages/ErrorPage/index';
import { Figur } from './pages/Figurinos/index';
import { Styling } from './pages/Styling';
import { ColecaoItem } from './pages/Colecoes/ColecaoItem/index';
import { HospitaldaRoupa } from './pages/HospitalRoupa/index';

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
				path: '/Sobre',
				element: <Sobre />,
			},
			{
				path: '/Colecoes',
				element: <ColecoesLista />,
			},
			{
				path: '/Colecoes/:path',
				element: <ColecaoItem />,
			},
			{
				path: '/Figurinos',
				element: <Figur />,
			},
			{
				path: '/Styling',
				element: <Styling />,
			},
			{
				path: '/HospitalDaRoupa',
				element: <HospitaldaRoupa />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
