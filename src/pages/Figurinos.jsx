import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { OutrosProjetos } from '../components/OutrosProjetos.jsx';
import { Years } from '../components/Years.jsx';

export function Figurinos() {
	const { figurinos } = useContext(AppContext);
	const [selectedYear, setSelectedYear] = useState(null);


	const handleYearSelect = year => {
		setSelectedYear(year);
	};

	const filteredFigurinos = selectedYear ? figurinos.filter(project => project.year === selectedYear) : figurinos;



	return (
		<>
			<Years projects={figurinos} onYearSelect={handleYearSelect} selectedYear={selectedYear} />
			<OutrosProjetos title='FIGURINOS' description='Projetos de Figurinos de Dino Alves' projects={filteredFigurinos} showCategory={true} />
		</>
	);
}
