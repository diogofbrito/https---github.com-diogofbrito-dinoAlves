import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { ScrollShadow } from '@nextui-org/react';
import { NavLink, useLocation } from 'react-router-dom';
export function YearsBar() {
	const { figurinos, styling } = useContext(AppContext);
	const location = useLocation();
	const isFigurinosPage = location.pathname.startsWith('/figurinos');
	const isStylingPage = location.pathname.startsWith('/styling');

	const getUniqueSortedYears = data => {
		const years = Array.from(new Set(data.map(item => item.year)));
		years.sort((a, b) => b - a);
		return years;
	};

	let years = [];

	if (isFigurinosPage) {
		years = getUniqueSortedYears(figurinos);
	} else if (isStylingPage) {
		years = getUniqueSortedYears(styling);
	}

	return (
		<div>
			{(isFigurinosPage || isStylingPage) && (
				<div className='pt-8'>
					<div className='px-40'>
						<ScrollShadow hideScrollBar onVisibilityChange='left' offset={0} orientation='horizontal' className='max-w-[100%] '>
							<div className='flex flex-row gap-14 justify-center text-5xl tracking-[-0.15rem]'>
								{years.map(year => (
									<NavLink key={year} to={`/${isFigurinosPage ? 'figurinos' : 'styling'}/${year}`}>
										{year}
									</NavLink>
								))}
							</div>
						</ScrollShadow>
					</div>
				</div>
			)}
		</div>
	);
}
