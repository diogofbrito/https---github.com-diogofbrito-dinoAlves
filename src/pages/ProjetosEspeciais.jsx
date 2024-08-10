import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { OutrosProjetos } from '../components/OutrosProjetos.jsx';
import { Years } from '../components/Years.jsx';

export function ProjetosEspeciais() {
	const { projetosEspeciais } = useContext(AppContext);
	const [selectedYear, setSelectedYear] = useState(null);

	useEffect(() => {
		if (projetosEspeciais && projetosEspeciais.length > 0) {
			const years = projetosEspeciais.map(project => Number(project.year));
			const mostRecentYear = Math.max(...years);
			setSelectedYear(mostRecentYear);
		}
	}, [projetosEspeciais]);

	const handleYearSelect = year => {
		setSelectedYear(year);
	};

	const filteredProjetosEspeciais = selectedYear ? projetosEspeciais.filter(project => Number(project.year) === Number(selectedYear)) : projetosEspeciais;

	if (!projetosEspeciais) {
		return <p>A carregar...</p>;
	}
	return (
		<>
			<Years projects={projetosEspeciais} onYearSelect={handleYearSelect} selectedYear={selectedYear} />
			<OutrosProjetos title='PROJETOS ESPECIAIS' description='Projetos Especiais de Dino Alves' projects={filteredProjetosEspeciais} />
		</>
	);
}
