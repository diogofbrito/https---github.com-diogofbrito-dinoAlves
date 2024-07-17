import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function Contactos() {
	return (
		<>
			<Helmet>
				<title>DINO ALVES | CONTACTOS </title>
			</Helmet>

			<div className='w-screen h-screen flex flex-col items-center justify-center '>
				<div className='w-4/6  text-center'>
					<div className='text-9xl uppercase tracking-[-0.25rem] blur-sm leading-10'>Dino Alves Atelier</div>
					<a href='mailto:info@dinoalves.eu' target='_blank' className='text-8xl tracking-[-0.15rem] hover:bg-black hover:blur-xl'>
						info@dinoalves.eu
					</a>

					<div className='w-full flex items-center justify-center tracking-[-0.02rem]'>
						<div className='flex flex-row justify-between w-2/3 '>
							<div> ® 2024 Dino Alves | Todos os direitos reservados</div>
							<div>
								Website designed and developed by{' '}
								<a href='mailto:info@dinoalves.eu' target='_blank' className='hover:bg-black hover:blur-md'>
									Diogo Brito
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
