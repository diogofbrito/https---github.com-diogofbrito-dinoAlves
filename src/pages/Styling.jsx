import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { MarqueeComp } from '../components/MarqueeComp.jsx';
import { Helmet } from 'react-helmet-async';

export function Styling() {
	const { styling } = useContext(AppContext);
	return (
		<>
			<Helmet>
				<title>DINO ALVES | STYLING</title>
				<meta name='description' content='Projetos de Styling de Dino Alves' />
			</Helmet>
			<div className='container-default'>
				<div className='flex flex-col gap-16'>
					{styling.map(style => (
						<div>
							<div className='w-full'>
								<h1>{style.title}</h1>
								<div className='pt-8'>
									<MarqueeComp highlights={style.highlights} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
