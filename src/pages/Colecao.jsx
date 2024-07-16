import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { BtnsPrevNext } from '../components/BtnsPrevNext.jsx';
import { AppContext } from '../contexts/AppContext.jsx';
import { Helmet } from 'react-helmet-async';


export function Colecao() {
	const { path } = useParams();
	const { colecoes } = useContext(AppContext);
	const [visible, setVisible] = useState(false);
	const wpSecondRef = useRef(null);

	const colec = colecoes.find(p => p.path.toString() === path);

	useEffect(() => {
		if (colec) {
			setVisible(true);
			const timer = setTimeout(() => {
				setVisible(false);
			}, 4000);

			return () => clearTimeout(timer);
		}
	}, [colec]);

	useEffect(() => {
		if (wpSecondRef.current) {
			wpSecondRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [path]);

	if (!colec) return <div>Desfile não encontrado.</div>;

	return (
		<>
			<Helmet>
				<title>DINO ALVES | {colec.path} </title>
				<meta name='description' content='Todas as Coleções mais recentes' />
			</Helmet>
			<div className='flex flex-col w-full h-screen' ref={wpSecondRef}>
				<video autoPlay loop muted className='absolute left-0 top-0 bottom-0 right-0 w-full h-screen object-cover -z-10'>
					<source src={colec.videoUrl} type='video/mp4' />
					Seu navegador não suporta o vídeo.
				</video>
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
						<img key={index} src={image} alt={colec.alt} loading='lazy' />
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

			<BtnsPrevNext currentColectionPath={path} colecoes={colecoes} />
		</>
	);
}
