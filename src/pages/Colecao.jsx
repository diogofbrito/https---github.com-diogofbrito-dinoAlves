import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { BtnsPrevNext } from '../components/BtnsPrevNext.jsx';
import { AppContext } from '../contexts/AppContext.jsx';
import { Helmet } from 'react-helmet-async';
import ReactPlayer from 'react-player';

export function Colecao() {
	const { id } = useParams();
	const { colecoes } = useContext(AppContext);
	const [visible, setVisible] = useState(false);
	const wpSecondRef = useRef(null);
	const playerRef = useRef(null);

	const colec = colecoes.find(colec => colec.id.toString().toUpperCase() === id.toUpperCase());

	  const handleClickFullscreen = () => {
			if (playerRef.current) {
				const videoElement = playerRef.current.getInternalPlayer(); // Gets the internal video element
				if (videoElement.requestFullscreen) {
					videoElement.requestFullscreen();
				} else if (videoElement.webkitEnterFullscreen) {
					// For iOS Safari
					videoElement.webkitEnterFullscreen();
				}
				// Enable controls once the video is in fullscreen
				videoElement.controls = true;
			}
		};

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
	}, [id]);

	if (!colec) return <div>Desfile não encontrado.</div>;

	return (
		<>
			<Helmet>
				<title>DINO ALVES | {colec.id} </title>
				<meta name='description' content='Todas as Coleções mais recentes' />
			</Helmet>
			<div className='flex flex-col w-full h-screen' ref={wpSecondRef}>
				<div className='w-screen h-screen absolute overflow-hidden bg-red-500'>
					<div className='relative pt-[56.25%]  '>
						<ReactPlayer
							ref={playerRef}
							url={`https://player.vimeo.com/video/${colec.videoUrl}?background=1&autoplay=1&muted=1&loop=1`}
							playing
							loop
							width='100%'
							height='100%'
							muted
							allowFullScreen
							controls={false}
							onClick={handleClickFullscreen}
							className='absolute top-0 left-0 bottom-0 right-0 object-cover w-full h-full '
						/>
					</div>
				</div>

				<div className={`w-full h-full flex items-center justify-center text-center  transition-opacity pointer-events-none z-10 duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
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
										<h2 className=''>{key}</h2>
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
