import React from 'react';
import { useNavigate } from 'react-router-dom';

export function BtnsPrevNext({ currentColectionPath, colecoes }) {
	const navigate = useNavigate();

	const colectionIndex = colecoes.findIndex(colection => colection.path === currentColectionPath);
	const previousColectionPath = colectionIndex > 0 ? colecoes[colectionIndex - 1].path : null;
	const nextColectionPath = colectionIndex < colecoes.length - 1 ? colecoes[colectionIndex + 1].path : null;

	const handleNavigation = colecaoPath => {
		navigate(`/colecoes/${colecaoPath}`);
	};

	return (
		<div className='flex justify-between gap-1 text-5xl -tracking-[0.15rem] mx-40 mb-8'>
			<button onClick={() => handleNavigation(previousColectionPath)} disabled={!previousColectionPath} className=' hover:bg-black hover:blur-md disabled:opacity-50 disabled:pointer-events-none '>
				ANTERIOR
			</button>
			<button onClick={() => handleNavigation(nextColectionPath)} disabled={!nextColectionPath} className='hover:bg-black hover:blur-md disabled:opacity-50 disabled:pointer-events-none '>
				PRÓXIMO
			</button>
		</div>
	);
}
