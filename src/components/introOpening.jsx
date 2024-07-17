import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function IntroOpening() {
	const comp = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const t1 = gsap.timeline();
			t1.from(['#intro__slider'], {
				xPercent: '-100',
				duration: 1.3,
				delay: 0.3,
			})
				.from(['#title_1'], {
					opacity: 0,
					y: '+=30',
					stagger: 0.5,
				})
				.to(['#title_1'], {
					opacity: 0,
					y: '-=30',
					delay: 0.7,
					stagger: 1.0,
				})
				.to(['#intro__slider'], {
					xPercent: '-100',
					duration: 1.3,
				});
		}, comp);

		return () => ctx.revert();
	}, []);

	return (
		<>
			<div className='introPage' ref={comp}>
				<div id='intro__slider' className='fixed flex justify-center items-center bg-white top-0 left-0 bottom-0 right-0 z-50'>
					<img id='title_1' src='/imgs/Logo/DA_logo.png' alt='Dino Alves logo' />
				</div>
			</div>
		</>
	);
}
