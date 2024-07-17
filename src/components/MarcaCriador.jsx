import React  from 'react';
import { Link } from 'react-router-dom';

export function MarcaCriador() {
	return (
		<div className='pt-8 bg-slate-500 flex flex-row gap-14 justify-center text-5xl tracking-[-0.15rem]'>
			<Link to='/sobre'>MARCA</Link>
			<Link to='/sobre'>CRIADOR</Link>
		</div>
	);
}
