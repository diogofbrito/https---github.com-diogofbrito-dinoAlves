import React, { useEffect, useRef, useState } from 'react';
import './style.css';

export function WipeyCanvas() {
	const canvasRef = useRef(null);
	const [color1] = useState('51,245,246'); // Cor inicial
	const [color2] = useState('250,48,51'); // Cor para alternar
	const [currentColor, setCurrentColor] = useState(color1);
	const [transitioning, setTransitioning] = useState(false);

	const brushSize = 190;
	const transitionDuration = 1000; // Duração da transição em milissegundos

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		resizeCanvas();

		fillCanvas(ctx, currentColor);

		const handleMouseMove = e => {
			wipeCanvas(ctx, e.clientX, e.clientY);
			checkIfWiped(ctx, canvas);
		};

		const handleTouchMove = e => {
			const touch = e.touches[0];
			wipeCanvas(ctx, touch.clientX, touch.clientY);
			checkIfWiped(ctx, canvas);
		};

		canvas.addEventListener('mousemove', handleMouseMove);
		canvas.addEventListener('touchmove', handleTouchMove);
		window.addEventListener('resize', resizeCanvas);

		return () => {
			canvas.removeEventListener('mousemove', handleMouseMove);
			canvas.removeEventListener('touchmove', handleTouchMove);
			window.removeEventListener('resize', resizeCanvas);
		};
	}, [currentColor]);

	const resizeCanvas = () => {
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};

	const fillCanvas = (ctx, color) => {
		ctx.fillStyle = `rgb(${color})`;
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	};

	const wipeCanvas = (ctx, x, y) => {
		ctx.save();
		ctx.beginPath();
		ctx.arc(x, y, brushSize, 0, Math.PI * 2);
		ctx.clip();
		ctx.clearRect(x - brushSize, y - brushSize, brushSize * 2, brushSize * 2);
		ctx.restore();
	};

	const checkIfWiped = (ctx, canvas) => {
		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const pixels = imageData.data;
		let fullyWiped = true;
		for (let i = 0; i < pixels.length; i += 4) {
			if (pixels[i + 3] !== 0) {
				fullyWiped = false;
				break;
			}
		}
		if (fullyWiped && !transitioning) {
			setTransitioning(true);
			setTimeout(() => {
				const newColor = currentColor === color1 ? color2 : color1;
				setCurrentColor(newColor);
				setTransitioning(false);
				fillCanvas(ctx, newColor);
			}, transitionDuration);
		}
	};

	return <canvas ref={canvasRef} className={`wipey-canvas ${transitioning ? 'transitioning' : ''}`}></canvas>;
}
