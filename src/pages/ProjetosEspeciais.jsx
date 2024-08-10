import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { OutrosProjetos } from '../components/OutrosProjetos.jsx';
import { Years } from '../components/Years.jsx';

export function ProjetosEspeciais() {
	const { projetosEspeciais } = useContext(AppContext);
	const [selectedYear, setSelectedYear] = useState(null);

	const handleYearSelect = year => {
		setSelectedYear(year);
	};

	const filteredProjetosEspeciais = selectedYear ? projetosEspeciais.filter(project => project.year === selectedYear) : projetosEspeciais;

	return (
		<>
			<Years projects={projetosEspeciais} onYearSelect={handleYearSelect} />
			<OutrosProjetos title='PROJETOS ESPECIAIS' description='Projetos Especiais de Dino Alves' projects={filteredProjetosEspeciais} />
		</>
	);
}
