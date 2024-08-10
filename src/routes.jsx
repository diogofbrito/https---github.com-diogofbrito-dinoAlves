import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre.jsx';
import { Colecoes } from './pages/Colecoes.jsx';
import { Contactos } from './pages/Contactos.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { Figurinos } from './pages/Figurinos.jsx';
import { Styling } from './pages/Styling.jsx';
import { Colecao } from './pages/Colecao.jsx';
import { HospitalRoupa } from './pages/HospitalRoupa.jsx';
import { ProjetosEspeciais } from './pages/ProjetosEspeciais';
import { Press } from './pages/Press';


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
				path: '/especiais',
				element: <ProjetosEspeciais />,
			},
			{
				path: '/hospitalRoupa',
				element: <HospitalRoupa />,
			},
			{
				path: '/press',
				element: <Press />,
			},
			{
				path: '/contactos',
				element: <Contactos />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
