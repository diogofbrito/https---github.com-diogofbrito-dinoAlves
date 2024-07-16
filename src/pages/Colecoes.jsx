import React, { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import { MarqueeComp } from '../components/MarqueeComp';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


export function Colecoes() {
	const { colecoes } = useContext(AppContext);


	return (
		<>
			<Helmet>
				<title>DINO ALVES | COLECOES </title>
				<meta name='description' content='Figurinos' />
			</Helmet>
			<div className='container-default '>
				<div className='flex flex-col gap-16'>
					{colecoes.map(colecao => (
						<Link to={`/colecoes/${colecao.path}`} key={colecao.path}>
							<div className='w-full'>
								<div className='flex flex-row justify-between hover:bg-black hover:blur-md'>
									<h1>{colecao.title}</h1>
									<h1>
										<span className='blur-custom'>{colecao.subTitle}</span>
									</h1>
								</div>

								<div className='pt-8'>
									<MarqueeComp highlights={colecao.highlights} />
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
