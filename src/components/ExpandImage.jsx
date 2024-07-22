import React, { useState } from 'react';

export function ExpandImage({ src, alt, onClose }) {
	const [isVisible, setIsVisible] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const handleImageClick = () => {
		setIsVisible(true); 
		setIsTransitioning(true); 
	};

	const closeModal = () => {
		setIsTransitioning(false); 
		setTimeout(() => {
			setIsVisible(false); // Remove o modal após o fade-out
			onClose(); // Chama o callback para atualizar o estado no componente pai
		}, 1000); // Tempo de fade-out (1 segundo)
	};

	return (
		<>
			<img src={src} alt={alt} className='w-full cursor-pointer' onClick={handleImageClick} />
			{isVisible && (
				<div
					className={`fixed inset-0 bg-black bg-opacity-75 backdrop-blur-lg flex items-center justify-center z-50 transition-opacity duration-1000 ease-in-out ${
						isTransitioning ? 'opacity-100' : 'opacity-0'
					}`}
					onClick={closeModal}
				>
					<div className='relative'>
						<img src={src} alt={alt} className='max-w-full max-h-full' />
						
					</div>
				</div>
			)}
		</>
	);
}
