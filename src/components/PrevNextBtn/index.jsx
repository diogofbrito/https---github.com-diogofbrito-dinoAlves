import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export function PrevNextBtn({ onPrev, onNext, hasPrev, hasNext }) {
	const navigate = useNavigate();

	const handlePrev = () => {
		if (hasPrev) {
			if (onPrev) onPrev();
			else navigate('FW2425');
		}
	};

	const handleNext = () => {
		if (hasNext) {
			if (onNext) onNext();
			else navigate('SS24');
		}
	};

	return (
		<div className='heading__arrows'>
			<button onClick={handlePrev} disabled={!hasPrev}>
				ANTERIOR
			</button>
			<button onClick={handleNext} disabled={!hasNext}>
				PRÓXIMO
			</button>
		</div>
	);
}
