 import React, { useEffect, useRef, useState } from 'react';
import './style.css'; // Adicione seus estilos aqui se necessário

export function WipeyCanvas() {
	const canvasRef = useRef(null);
	const [interact, setInteract] = useState(true);
	const [wipeyFrame, setWipeyFrame] = useState(0);
	const [canvasData, setCanvasData] = useState({
		color1: '51,245,246',
		color2: '250,48,51',
		alphaArrayMaxCumulativeOpacity: 0,
	});

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		let imageDataArray, cumulativeOpacity, pixelArrayLength;
		let alphaArrayLength;

		const setupCanvas = () => {
			try {
				document.body.style.color = `rgb(${canvasData.color1})`;
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				// Substitua a função de gradiente pela função de cor sólida
				fillCanvasWithSolidColor();

				// Atualiza o alphaArrayMaxCumulativeOpacity
				imageDataArray = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
				pixelArrayLength = imageDataArray.length;
				alphaArrayLength = pixelArrayLength / 4;
				setCanvasData(prevData => ({
					...prevData,
					alphaArrayMaxCumulativeOpacity: alphaArrayLength * 255,
				}));
				cumulativeOpacity = canvasData.alphaArrayMaxCumulativeOpacity;
			} catch (error) {
				console.error('Erro ao configurar o canvas:', error);
			}
		};

		 const fillCanvasWithSolidColor = () => {
				try {
					ctx.fillStyle = `rgb(${canvasData.color1})`;
					ctx.fillRect(0, 0, canvas.width, canvas.height);
				} catch (error) {
					console.error('Erro ao preencher o canvas com cor sólida:', error);
				}
			};


		const wipeCanvas = (x, y) => {
			if (interact) {
				try {
					document.body.style.color = `rgb(${canvasData.color1})`;
					document.body.style.backgroundColor = `rgb(${canvasData.color2})`;

					const widthOfRect = window.innerWidth * 0.15;
					const halfOfRect = widthOfRect / 2;
					const grd = ctx.createRadialGradient(x, y, 0, x, y, halfOfRect);
					grd.addColorStop(0, `rgba(${canvasData.color2},1)`);
					grd.addColorStop(1, `rgba(${canvasData.color1},0)`);

					ctx.fillStyle = grd;
					ctx.globalCompositeOperation = 'destination-out';
					ctx.beginPath();
					ctx.arc(x, y, halfOfRect, 0, 2 * Math.PI);
					ctx.fill();

					// Verifica e atualiza a opacidade acumulada
					if (wipeyFrame % 10 === 0) {
						imageDataArray = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
						pixelArrayLength = imageDataArray.length;
						alphaArrayLength = pixelArrayLength / 4;
						cumulativeOpacity = 0;

						for (let i = 3; i < pixelArrayLength; i += 4) {
							cumulativeOpacity += imageDataArray[i];
						}

						if (cumulativeOpacity < canvasData.alphaArrayMaxCumulativeOpacity * 0.002) {
							cumulativeOpacity = canvasData.alphaArrayMaxCumulativeOpacity;

							// Troca de cores
							const color1Swap = canvasData.color1;
							setCanvasData(prevData => ({
								...prevData,
								color1: canvasData.color2,
								color2: color1Swap,
							}));

							// Substitui o canvas
							const newCanvas = document.createElement('canvas');
							newCanvas.width = canvas.width;
							newCanvas.height = canvas.height;
							document.body.replaceChild(newCanvas, canvas);
							canvasRef.current = newCanvas;

							setupCanvas();
							setInteract(true);
						}
					}
					setWipeyFrame(prev => prev + 1);
				} catch (error) {
					console.error('Erro ao aplicar o efeito de apagar:', error);
				}
			}
		};

		const handleMouseMove = e => {
			if (!window.USER_IS_TOUCHING) {
				wipeCanvas(e.clientX, e.clientY);
			}
		};

		const handleTouchMove = e => {
			if (window.USER_IS_TOUCHING) {
				const touch = e.touches[0];
				wipeCanvas(touch.clientX, touch.clientY);
			}
		};

		const handleTouchStart = () => {
			document.body.classList.add('touchscreen');
			window.USER_IS_TOUCHING = true;
			window.removeEventListener('touchstart', handleTouchStart);
		};

		const handleResize = () => {
			setupCanvas();
		};

		window.addEventListener('touchstart', handleTouchStart);
		window.addEventListener('resize', handleResize);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('touchmove', handleTouchMove);

		setupCanvas();

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('touchmove', handleTouchMove);
			window.removeEventListener('resize', handleResize);
		};
	}, [interact, wipeyFrame, canvasData]);

	return (
		<div className='relative w-full h-full'>
			<canvas ref={canvasRef} className='absolute top-0 left-0' />
		</div>
	);
}
 