import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../../contexts/AppContext.jsx';
import { PrevNextBtn } from '../../../components/PrevNextBtn/index.jsx';
import './style.css';

export function ColecaoItem() {
	const { path } = useParams();
	const { colecoes } = useContext(AppContext);
	const [desfile, setDesfile] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const navigate = useNavigate();

	const handlePrev = () => {
		if (currentIndex > 0) {
			const prevDesfile = colecoes[currentIndex - 1];
			setDesfile(prevDesfile);
			setCurrentIndex(currentIndex - 1);
			navigate(`/Colecoes/${prevDesfile.path}`);
			window.scrollTo(0, 0);
		}
	};

	const handleNext = () => {
		if (currentIndex < colecoes.length - 1) {
			const nextDesfile = colecoes[currentIndex + 1];
			setDesfile(nextDesfile);
			setCurrentIndex(currentIndex + 1);
			navigate(`/Colecoes/${nextDesfile.path}`);
			window.scrollTo(0, 0);
		}
	};

	const hasPrev = currentIndex > 0;
	const hasNext = currentIndex < colecoes.length - 1;

	useEffect(() => {
		const desfileEncontrado = colecoes.find(colecao => colecao.path === path);
		setDesfile(desfileEncontrado);
		setCurrentIndex(colecoes.findIndex(colecao => colecao.path === path));

		const timeoutId = setTimeout(() => {
			const headingTitle = document.querySelector('.heading__title');
			if (headingTitle) {
				headingTitle.classList.add('show');
				setTimeout(() => {
					headingTitle.classList.remove('show');
				}, 5000);
			}
		}, 100);

		return () => clearTimeout(timeoutId);
	}, [colecoes, path]);

	if (!desfile) return <div>Desfile não encontrado.</div>;

	return (
		<>
			<section className='heading' id='heading'>
				<div className='heading__wrapper'>
					<div className='heading__video'>
						<video autoPlay loop muted>
							<source src={desfile.videoUrl} type='video/mp4' />
							Seu navegador não suporta o vídeo.
						</video>

						<div className='heading__title'>
							<h1>
								{desfile.title} <br />
								<span>{desfile.subTitle}</span>
							</h1>
						</div>
					</div>
				</div>
			</section>

			<section className='content' id='content'>
				<div className='container'>
					<div className='title__wrapper'>
						<div>
							<h2>{desfile.title}</h2>
						</div>
						<div className='estacao'>
							<h2>{desfile.subTitle}</h2>
						</div>
					</div>
					<div className='content__grid'>
						{desfile.images.map((image, index) => (
							<img key={index} src={image} alt={desfile.alt} loading='lazy' />
						))}
					</div>
				</div>
			</section>

			<section className='text' id='text'>
				<div className='container'>
					<div className='text__wrapper'>
						<div>
							<i className='gg-math-plus'></i>
						</div>

						<div className='texto__colecao'>
							{desfile.descricao.map((item, index) => (
								<div key={index}>
									{Object.entries(item).map(([key, value]) => (
										<div key={key}>
											<h2>{key}</h2>
											<p>{value}</p>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
				<PrevNextBtn onPrev={handlePrev} onNext={handleNext} hasPrev={hasPrev} hasNext={hasNext} />
			</section>
		</>
	);
}
