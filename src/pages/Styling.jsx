import React, { useContext} from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { MarqueeComp } from '../components/MarqueeComp.jsx';

export function Styling() {
	const { styling } = useContext(AppContext);
	return (
			<div className='container-default'>
				<div className='content__wrapper'>
					{styling.map(style => (
						<div className='flex__item' key={style.id}>
							<div className='title'>
								<h1>{style.title}</h1>
							</div>
							<div className='photos'>
								<MarqueeComp highlights={style.highlights} />
							</div>
						</div>
					))}
				</div>
			</div>
	);
}
