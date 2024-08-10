import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { OutrosProjetos } from '../components/OutrosProjetos.jsx';
import { Years } from '../components/Years.jsx';

export function Figurinos() {
	const { figurinos } = useContext(AppContext);
	const [selectedYear, setSelectedYear] = useState(null);

	useEffect(() => {
		if (figurinos && figurinos.length > 0) {
			const years = figurinos.map(project => Number(project.year));
			const mostRecentYear = Math.max(...years);
			setSelectedYear(mostRecentYear);
		}
	}, [figurinos]);

	const handleYearSelect = year => {
		setSelectedYear(year);
	};

	const filteredFigurinos = selectedYear ? figurinos.filter(project => Number(project.year) === Number(selectedYear)) : figurinos;

	if (!figurinos) {
		return <p>A carregar...</p>;
	}

	return (
		<>
			<Years projects={figurinos} onYearSelect={handleYearSelect} selectedYear={selectedYear} />
			<OutrosProjetos title='FIGURINOS' description='Projetos de Figurinos de Dino Alves' projects={filteredFigurinos} showCategory={true} />
		</>
	);
}
