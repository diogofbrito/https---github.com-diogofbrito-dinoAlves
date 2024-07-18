import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function CustomCursor  ({ logoSrc })  {
	const cursorRef = useRef(null);
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		const handleMouseMove = event => {
			if (isHovering) {
				gsap.to(cursorRef.current, {
					x: event.clientX,
					y: event.clientY,
					duration: 0.8,
					ease: 'power3.out',
					delay: 0.1,
				});
			}
		};

		const handleHoverChange = e => {
			setIsHovering(e.detail);
		};

		window.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('cursor-hover', handleHoverChange);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('cursor-hover', handleHoverChange);
		};
	}, [isHovering]);

	return (
		<div
			className={`fixed pointer-events-none transform mix-blend-multiply translate-x-2/4 translate-y-1/2 transition-opacity duration-500 ease-in-out ${isHovering ? 'opacity-100' : 'opacity-0'}`}
			ref={cursorRef}
		>
			<img src={logoSrc} alt='Logo' className='w-1/2' />
		</div>
	);
};

