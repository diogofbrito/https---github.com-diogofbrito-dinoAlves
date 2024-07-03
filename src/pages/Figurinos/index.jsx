import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { MarqueeColec } from '../../components/Marquee/index';
import './style.css';

export function Figur() {
	const { figurinos, fetchFigur } = useContext(AppContext);

	useEffect(() => {
		fetchFigur();
	}, []);

	return (
		<section className='figurinos'>
			<div className='container'>
				<div className='content__wrapper'>
					{figurinos.map(figurino => (
						<div className='flex__item' key={figurino.id}>
							<div className='title'>
								<h1>{figurino.title}</h1>
								<h1>
									<span className='category'>{figurino.category}</span>
								</h1>
							</div>
							<div className='photos'>
								<MarqueeColec highlights={figurino.highlights} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
