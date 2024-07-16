import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { MarqueeComp } from '../components/MarqueeComp.jsx';
import { Helmet } from 'react-helmet-async';

export function Figurinos( ) {
	const { figurinos } = useContext(AppContext);

	return (
		<>
			<Helmet>
				<title>DINO ALVES | FIGURINOS </title>
				<meta name='description' content='Todos os projetos de Figurinos' />
			</Helmet>
			<div className='container-default'>
				<div className='flex flex-col gap-16'>
					{figurinos.map(figurino => (
						<Link to={`/figurinos/${figurinos.path}`} key={figurinos.path}>
							<div className='w-full'>
								<div className='flex flex-row justify-between hover:bg-black hover:blur-md'>
									<h1>{figurino.title}</h1>
									<h1>
										<span className='blur-custom'>{figurino.category}</span>
									</h1>
								</div>

								<div className='pt-8'>
									<MarqueeComp highlights={figurino.highlights} />
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
