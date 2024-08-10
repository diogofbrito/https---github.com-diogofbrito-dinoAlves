import React from 'react';
import Marquee from 'react-fast-marquee';

export function MarqueeComp({ highlights }) {
	return (
		<Marquee speed={50} pauseOnHover>
			<div className='w-full'>
				<div className='flex  transition-transform duration-500 ease-in-out'>
					{highlights.map((highlight, index) => (
						<div key={index} className='slide pr-0'>
							<img src={highlight} alt='' loading='lazy' className='h-450 object-cover' />
						</div>
					))}
				</div>
			</div>
		</Marquee>
	);
}
