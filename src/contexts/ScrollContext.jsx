import React, { createContext, useContext, useEffect, useRef } from 'react';

const ScrollContext = createContext();

export function useScroll() {
	return useContext(ScrollContext);
}

export function ScrollProvider({ children }) {
	const scrollRef = useRef(null);

	useEffect(() => {
		let locomotiveScroll;

		(async () => {
			if (typeof window !== 'undefined') {
				const LocomotiveScroll = (await import('locomotive-scroll')).default;

				locomotiveScroll = new LocomotiveScroll({
					el: scrollRef.current,
					smooth: true,
				});

				return () => {
					if (locomotiveScroll) {
						locomotiveScroll.destroy();
					}
				};
			}
		})();

		return () => {
			if (locomotiveScroll) {
				locomotiveScroll.destroy();
			}
		};
	}, []);

	return (
		<ScrollContext.Provider value={{ scrollRef }}>
			<div ref={scrollRef} data-scroll-container>
				{children}
			</div>
		</ScrollContext.Provider>
	);
}
