import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { OutrosProjetos } from '../components/OutrosProjetos.jsx';
import { Years } from '../components/Years.jsx';

export function Styling() {
	const { styling } = useContext(AppContext);
	const [selectedYear, setSelectedYear] = useState(null);

	const handleYearSelect = year => {
		setSelectedYear(year);
	};

	const filteredStyling = selectedYear ? styling.filter(project => project.year === selectedYear) : styling;


	return (
		<>
			<Years projects={styling} onYearSelect={handleYearSelect} />
			<OutrosProjetos title='STYLING' description='Projetos de Styling de Dino Alves' projects={filteredStyling} />
		</>
	);
}
