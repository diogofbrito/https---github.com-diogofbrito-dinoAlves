import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { BtnsPrevNext } from '../components/BtnsPrevNext.jsx';
import { AppContext } from '../contexts/AppContext.jsx';
import { Helmet } from 'react-helmet-async';
import { ExpandImage } from '../components/ExpandImage.jsx';

export function Figurino() {
	const { id } = useParams();
	const { figurinos } = useContext(AppContext);
	const [visible, setVisible] = useState(false);
	const wpSecondRef = useRef(null);

	const figurino = figurinos.find(figurino => figurino.id.toString().toUpperCase() === id.toUpperCase());

	useEffect(() => {
		if (figurino) {
			setVisible(true);
			const timer = setTimeout(() => {
				setVisible(false);
			}, 4000);

			return () => clearTimeout(timer);
		}
	}, [figurino]);

	useEffect(() => {
		if (wpSecondRef.current) {
			wpSecondRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [id]);

	if (!figurino) return <div>Figurino não encontrado.</div>;

	return (
		<>
			<Helmet>
				<title>DINO ALVES | {figurino.id} </title>
				<meta name='description' content='Todas as Coleções mais recentes' />
			</Helmet>
			<div className='flex flex-col w-full h-screen' ref={wpSecondRef}>
				<div className='absolute left-0 top-0 bottom-0 right-0 w-screen h-screen object-cover -z-10 bg-slate-500'>
					<iframe
						className='w-screen h-screen p-0 m-0 bg-slate-500 overflow-hidden z-50'
						src={`https://player.vimeo.com/video/${colec.videoUrl}?autoplay=0&loop=1&muted=1&controls=1`}
						width='100%'
						height='100%'
						loading='lazy'
						frameborder='0'
						allow='fullscreen; picture-in-picture;  '
						allowfullscreen=''
					></iframe>
				</div>

				<div className={`w-full h-full flex items-center justify-center text-center  transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
					<h1 className='text-white'>
						{colec.title} <br />
						<span className='blur-custom'>{colec.subTitle}</span>
					</h1>
				</div>
			</div>

			<div className='container-default'>
				<div className='flex justify-between '>
					<h2>{colec.title}</h2>
					<span className='blur-custom'>
						<h2>{colec.subTitle}</h2>
					</span>
				</div>

				<div className='pt-8 grid grid-cols-4 gap-8'>
					{colec.images.map((image, index) => (
						<ExpandImage key={index} src={image} alt={colec.alt} />
					))}
				</div>

				<div className='text__wrapper'>
					<div>
						{colec.descricao.map((item, index) => (
							<div key={index}>
								{Object.entries(item).map(([key, value]) => (
									<div key={key} className='pt-8'>
										<h2 className='blur-custom'>{key}</h2>
										<p>{value}</p>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>

			<BtnsPrevNext currentColectionId={id} colecoes={colecoes} />
		</>
	);
}
