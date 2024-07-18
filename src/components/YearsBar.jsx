import React, { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import { NavLink, useLocation, useParams } from 'react-router-dom';

export function YearsBar({ type }) {
	const { figurinos, styling, dispatch, selectedYear } = useContext(AppContext);
	const location = useLocation();
	const { year } = useParams();
	const isCurrentPage = location.pathname.startsWith(`/${type}`);

	const getUniqueSortedYears = data => {
		const years = Array.from(new Set(data.map(item => item.year)));
		years.sort((a, b) => b - a);
		return years;
	};

	let years = [];
	let latestYear = null;

	if (isCurrentPage) {
		years = getUniqueSortedYears(type === 'figurinos' ? figurinos : styling);
		latestYear = years[0]; 

		if (!selectedYear) {
			dispatch({ type: 'SET_SELECTED_YEAR', payload: latestYear });
		}
	}

	const handleYearClick = year => {
		dispatch({ type: 'SET_SELECTED_YEAR', payload: year });
	};

	return (
		<div>
			{isCurrentPage && (
				<div className='pt-8'>
					<div className='px-40'>
							<div className='flex flex-row gap-14 justify-center text-5xl tracking-[-0.15rem]'>
								{years.map(year => (
									<NavLink
										key={year}
										to={`/${type}/${year}`}
										onClick={() => handleYearClick(year)}
										className={({ isActive }) => (isActive || year === selectedYear ? ' hover:bg-black hover:blur-md' : 'hover:bg-black hover:blur-md blur-custom')}
									>
										{year}
									</NavLink>
								))}
							</div>
					</div>
				</div>
			)}
		</div>
	);
}
