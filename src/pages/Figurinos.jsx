import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext.jsx';
import { MarqueeComp } from '../components/MarqueeComp.jsx';
import { Helmet } from 'react-helmet-async';

export function Figurinos() {
	const { figurinos, selectedYear, dispatch } = useContext(AppContext);
	const { year } = useParams();

	useEffect(() => {
		if (year) {
			dispatch({ type: 'SET_SELECTED_YEAR', payload: year });
		} else {
			const mostRecentYear = Math.max(...figurinos.map(item => parseInt(item.year, 10)));
			dispatch({ type: 'SET_SELECTED_YEAR', payload: mostRecentYear.toString() });
		}
	}, [year, figurinos, dispatch]);

	const yearToDisplay = selectedYear || Math.max(...figurinos.map(item => parseInt(item.year, 10)));
	const filteredFigurinos = figurinos.filter(figurino => figurino.year === yearToDisplay);

	return (
		<>
			<Helmet>
				<title>DINO ALVES | FIGURINOS</title>
				<meta name='description' content='Projetos de Figurinos de Dino Alves' />
			</Helmet>
			<div className='container-default'>
				<div className='flex flex-col gap-16'>
					{filteredFigurinos.map(figurino => (
						<div>
							<div className='w-full'>
								<div className='flex flex-row justify-between '>
									<h1>{figurino.title}</h1>
									<h1>
										<span className='blur-custom'>{figurino.category}</span>
									</h1>
								</div>
								<div className='pt-8'>
									<MarqueeComp highlights={figurino.highlights} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
