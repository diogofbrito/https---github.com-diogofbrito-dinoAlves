import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import { MarqueeColec } from '../../../components/Marquee/index';
import { Link } from 'react-router-dom';

export function ColecoesLista() {
	const { colecoes, fetchColec } = useContext(AppContext);

	useEffect(() => {
		fetchColec();
	}, []);

	return (
		<section id='colecoes' className='colecoes'>
			<div className='container'>
				<div className='content__wrapper'>
					{colecoes.map(colecao => (
						<div className='flex__item' key={colecao.id}>
							<Link to={`/Colecoes/${colecao.path}`} className='title'>
								<h1>{colecao.title}</h1>
								<h1>
									<span>{colecao.subTitle}</span>
								</h1>
							</Link>
							<div className='photos'>
								<MarqueeColec highlights={colecao.highlights} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
