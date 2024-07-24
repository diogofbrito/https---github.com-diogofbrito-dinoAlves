import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';
import Masonry from 'react-masonry-css';

export function Press() {
	const { press } = useContext(AppContext);
	const [expandedImage, setExpandedImage] = useState(null);
	const [isVisible, setIsVisible] = useState(false);

	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
	};

	const handleImageClick = image => {
		setExpandedImage(image);
		setTimeout(() => {
			setIsVisible(true);
		}, 0); 
	};

	const closeModal = () => {
		setIsVisible(false);
		setTimeout(() => {
			setExpandedImage(null);
		}, 300); 
	};

	return (
		<div className='container-default'>
			<Masonry breakpointCols={breakpointColumnsObj} className='flex gap-8' columnClassName='pb-8'>
				{press.map(p => (
					<div key={p.id} className='w-full pb-8' onClick={() => handleImageClick(p)}>
						<img src={p.highlight} alt={p.title} className='w-full cursor-fancy' loading='lazy' />
						<div className='flex justify-between text-2xl tracking-[-0.09rem] uppercase pt-2'>
							<p>{p.title}</p>
							<p>{p.year}</p>
						</div>
					</div>
				))}
			</Masonry>

			{expandedImage && (
				<div
					className={`fixed inset-0 bg-white bg-opacity-50 backdrop-blur-lg flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
						isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
					}`}
					onClick={closeModal}
				>
					<div className='relative h-3/4'>
						<img src={expandedImage.highlightHQ} alt={expandedImage.title} className='max-w-full max-h-full' />
					</div>
				</div>
			)}
		</div>
	);
}
