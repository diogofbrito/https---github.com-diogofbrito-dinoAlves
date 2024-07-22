import React, { useContext} from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import { OutrosProjetos } from '../components/OutrosProjetos.jsx';

export function ProjetosEspeciais() {
	const { projetosEspeciais } = useContext(AppContext);


	return <OutrosProjetos title='PROJETOS ESPECIAIS' description='Projetos Especiais de Dino Alves' projects={projetosEspeciais} />;
}
