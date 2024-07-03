import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import './style.css';

export function HospitaldaRoupa() {
	const { hospital, fetchHospital } = useContext(AppContext);
	const { conceito, informacao } = hospital;

	useEffect(() => {
		fetchHospital();
	}, []);

	return (
		<section className='hospital'>
			<div className='container'>
				<div className='content__wrapper hosp_background'>
					<p>{conceito} </p>
				</div>
			</div>
		</section>
	);
}
