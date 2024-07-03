import React, { useState } from 'react';

export function TextoExpansivel({ textoInicial, textoExpandido }) {
	const [mostrarMais, setMostrarMais] = useState(false);

	const handleMostrarMais = () => {
		setMostrarMais(!mostrarMais);
	};

	return (
		<>
			{textoInicial}
			{mostrarMais && <span>{textoExpandido}</span>}
			<button onClick={handleMostrarMais}>{mostrarMais ? 'Ler menos' : 'Ler mais'}</button>
		</>
	);
}
