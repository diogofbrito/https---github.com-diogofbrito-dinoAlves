import React from 'react';
import './style.css';
import Marquee from 'react-fast-marquee';

export function MarqueeColec({ highlights }) {
	return (
		<Marquee speed={50}>
			<div className='marquee__container'>
				<div className='marquee'>
					{highlights.map((highlight, index) => (
						<div key={index} className='slide'>
							<img src={highlight} alt='' loading='lazy' />
						</div>
					))}
				</div>
			</div>
		</Marquee>
	);
}
