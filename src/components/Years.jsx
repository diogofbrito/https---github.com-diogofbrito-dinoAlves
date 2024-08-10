import React from 'react';

export function Years({ projects, onYearSelect }) {
	const years = [...new Set(projects.map(project => project.year))];

	return (
		<div className='p-8 px-40 flex flex-row gap-14 justify-center text-5xl tracking-[-0.15rem]'>
			{years.map(year => (
				<button key={year} className='hover:bg-black hover:blur-md' onClick={() => onYearSelect(year)}>
					{year}
				</button>
			))}
		</div>
	);
}
