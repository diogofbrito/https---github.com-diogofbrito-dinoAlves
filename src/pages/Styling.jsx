import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { OutrosProjetos } from '../components/OutrosProjetos.jsx';
import { Years } from '../components/Years.jsx';

export function Styling() {
	const { styling } = useContext(AppContext);
	const [selectedYear, setSelectedYear] = useState(null);

	useEffect(() => {
		if (styling && styling.length > 0) {
			const years = styling.map(project => Number(project.year));
			const mostRecentYear = Math.max(...years);
			setSelectedYear(mostRecentYear);
		}
	}, [styling]);

	const handleYearSelect = year => {
		setSelectedYear(year);
	};

	const filteredStyling = selectedYear ? styling.filter(project => Number(project.year) === Number(selectedYear)) : styling;


	if (!styling) {
		return <p>A carregar...</p>;
	}
	return (
		<>
			<Years projects={styling} onYearSelect={handleYearSelect} selectedYear={selectedYear} />
			<OutrosProjetos title='STYLING' description='Projetos de Styling de Dino Alves' projects={filteredStyling} />
		</>
	);
}
