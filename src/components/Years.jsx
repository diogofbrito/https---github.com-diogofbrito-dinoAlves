import React, { useState, useEffect } from 'react';

export function Years({ years, onYearChange }) {
	const [activeYear, setActiveYear] = useState(Math.max(...years));

	useEffect(() => {
		setActiveYear(Math.max(...years)); 
	}, [years]); 

	const handleYearClick = year => {
		setActiveYear(year);
		onYearChange(year);
	};

	return (
		<div className='p-8 px-40 flex flex-row gap-14 justify-center text-5xl tracking-[-0.15rem]'>
			{years.map(year => (
				<button key={year} onClick={() => handleYearClick(year)} className={`hover:bg-black hover:blur-md ${year === activeYear ? 'blur-0' : 'blur-custom'}`}>
					{year}
				</button>
			))}
		</div>
	);
}
