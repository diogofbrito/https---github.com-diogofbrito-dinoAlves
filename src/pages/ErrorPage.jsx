import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
		<div className='px-40 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0  '>
			<h2>
				Página não encontrada.
				<br />
				Página inicial em {countdown} segundos ...
			</h2>
		</div>
	);
}
