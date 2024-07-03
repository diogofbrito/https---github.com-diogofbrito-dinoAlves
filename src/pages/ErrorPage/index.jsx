import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export function ErrorPage() {
	const navigate = useNavigate();
	const [countdown, setCountdown] = useState(5);

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown(prevCountdown => prevCountdown - 1);
		}, 1000);

		if (countdown === 0) {
			clearInterval(timer);
			navigate('/');
		}

		return () => clearInterval(timer);
	}, [countdown, navigate]);

	return (
		<div className='error'>
			<div className='container'>
				<h2>
					Página não encontrada.
					<br />
					Página inicial em {countdown} segundos ...
				</h2>
			</div>
		</div>
	);
}
