import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor({ logoSrc }) {
	const cursorRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = event => {
			gsap.to(cursorRef.current, {
				x: event.clientX,
				y: event.clientY,
				duration: 0.2,
				ease: 'power3.out',
			});
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div className='fixed pointer-events-none z-50   left-14 top-14' ref={cursorRef}>
			<img src={logoSrc} alt='Dino Alves Logo'className='w-13'/>
		</div>
	);
}
