import React from 'react';
import { useNavigate } from 'react-router-dom';

export function BtnsPrevNext({ currentColectionId, colecoes }) {
	const navigate = useNavigate();

	const colectionIndex = colecoes.findIndex(colec => colec.id === currentColectionId);
	const previousColectionId = colectionIndex > 0 ? colecoes[colectionIndex - 1].id : null;
	const nextColectionId = colectionIndex < colecoes.length - 1 ? colecoes[colectionIndex + 1].id : null;

	const handleNavigation = colecaoId => {
		navigate(`/colecoes/${colecaoId}`);
	};

	return (
		<div className='flex justify-between gap-1 text-5xl -tracking-[0.15rem] mx-40 mb-8'>
			<button onClick={() => handleNavigation(previousColectionId)} disabled={!previousColectionId} className=' hover:bg-black hover:blur-md disabled:opacity-50 disabled:pointer-events-none '>
				ANTERIOR
			</button>
			<button onClick={() => handleNavigation(nextColectionId)} disabled={!nextColectionId} className='hover:bg-black hover:blur-md disabled:opacity-50 disabled:pointer-events-none '>
				PRÓXIMO
			</button>
		</div>
	);
}
