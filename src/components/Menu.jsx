import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ScrollShadow } from '@nextui-org/react';


export function Menu() {
	const [menuOpen, setMenuOpen] = useState(false);


	function toggleMenu() {
		setMenuOpen(!menuOpen);
	}
	function handleNavLinkClick() {
		setMenuOpen(false);
	}

	return (
		<div className='relative -tracking-[0.15rem] text-5xl z-50'>
			{!menuOpen && (
				<div className='fixed bottom-8 left-2/4 -translate-x-1/2'>
					<button className='uppercase hover:bg-black hover:blur-md' onClick={toggleMenu}>
						Menu
					</button>
				</div>
			)}
			{menuOpen && (
				<div className='flex flex-col items-center text-center fixed top-0 left-0 right-0 bottom-0 overflow-hidden uppercase bg-white bg-opacity-50 backdrop-blur-2xl'>
					<div className='p-8'>DINO ALVES</div>
					<div className='relative w-full flex h-full text-center items-center overflow-y-auto'>
						<ul className='flex-grow '>
							<li className='mb-3'>
								<NavLink to='/' onClick={handleNavLinkClick} className='text-5xl hover:bg-black hover:blur-lg'>
									Home
								</NavLink>
							</li>
							<li className='mb-3'>
								<NavLink to='/sobre' onClick={handleNavLinkClick} className='text-5xl hover:bg-black hover:blur-lg'>
									Sobre
								</NavLink>
							</li>
							<li className='mb-3'>
								<NavLink to='/colecoes' onClick={handleNavLinkClick} className='text-5xl hover:bg-black hover:blur-lg'>
									Coleções
								</NavLink>
							</li>
							<li className='mb-3'>
								<NavLink to='/figurinos' onClick={handleNavLinkClick} className='text-5xl hover:bg-black hover:blur-lg'>
									Figurinos
								</NavLink>
							</li>
							<li className='mb-3'>
								<NavLink to='/styling' onClick={handleNavLinkClick} className='text-5xl hover:bg-black hover:blur-lg'>
									Styling
								</NavLink>
							</li>
							<li className='mb-3'>
								<NavLink to='/styling' onClick={handleNavLinkClick} className='text-5xl hover:bg-black hover:blur-lg'>
									Projetos Especiais
								</NavLink>
							</li>
							<li className='mb-3'>
								<NavLink to='/hospitalRoupa' onClick={handleNavLinkClick} className='text-5xl hover:bg-black hover:blur-lg'>
									Hospital da Roupa
								</NavLink>
							</li>
							<li className='mb-3'>
								<NavLink to='/press' onClick={handleNavLinkClick} className='text-5xl hover:bg-black hover:blur-lg'>
									Press
								</NavLink>
							</li>
							<li>
								<NavLink to='/contactos' onClick={handleNavLinkClick} className='text-5xl hover:bg-black hover:blur-lg'>
									Contactos
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='p-8'>
						<button onClick={toggleMenu} className='blur-0 uppercase hover:bg-black hover:blur-lg '>
							Fechar
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
