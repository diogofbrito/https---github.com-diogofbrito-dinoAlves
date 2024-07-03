import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext.jsx';
import { MarqueeColec } from '../../components/Marquee/index.jsx';

export function Styling() {
	const { styling, fetchStyling } = useContext(AppContext);

	useEffect(() => {
		fetchStyling();
	}, []);

	return (
		<section className='content'>
			<div className='container'>
				<div className='content__wrapper'>
					{styling.map(style => (
						<div className='flex__item' key={style.id}>
							<div className='title'>
								<h1>{style.title}</h1>
							</div>
							<div className='photos'>
								<MarqueeColec highlights={style.highlights} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
