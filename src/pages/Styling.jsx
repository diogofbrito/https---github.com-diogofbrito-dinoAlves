import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { OutrosProjetos } from '../components/OutrosProjetos.jsx';

export function Styling() {
	const { styling } = useContext(AppContext);


	return (
		<>
			<OutrosProjetos title='STYLING' description='Projetos de Styling de Dino Alves' projects={styling} />
		</>
	);
}
