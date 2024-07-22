import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { OutrosProjetos } from '../components/OutrosProjetos.jsx';

export function Figurinos() {
	const { figurinos } = useContext(AppContext);


	return (
		<div>
			<OutrosProjetos title='FIGURINOS' description='Projetos de Figurinos de Dino Alves' projects={figurinos} showCategory={true} />
		</div>
	);
}
