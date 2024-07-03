import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export function Menu() {
	const [menuOpen, setMenuOpen] = useState(false);


	function toggleMenu() {
		setMenuOpen(!menuOpen);
	}
	function handleNavLinkClick() {
		setMenuOpen(false);
	}

	return (
		<div className='menu__container'>
			{!menuOpen && (
				<button className='menu__open' onClick={toggleMenu}>
					Menu
				</button>
			)}
			{menuOpen && (
				<div className='menu__content'>
					<div className='menu__logo'>DINO ALVES</div>
					<div className='menu__items'>
						<ul>
							<li><NavLink to='/' onClick={handleNavLinkClick}>Home</NavLink></li>
							<li><NavLink to='/Sobre' onClick={handleNavLinkClick}>Sobre</NavLink></li>
							<li><NavLink to='/Colecoes' onClick={handleNavLinkClick}>Colecões</NavLink></li>
							<li><NavLink to='/Figurinos' onClick={handleNavLinkClick}>Figurinos</NavLink></li>
							<li><NavLink to='/Styling' onClick={handleNavLinkClick}>Styling</NavLink></li>
							<li><NavLink to='/HospitalDaRoupa' onClick={handleNavLinkClick}>Hospital da Roupa</NavLink></li>
							<li><NavLink to='/Contato' onClick={handleNavLinkClick}>Contato</NavLink></li>
							
						</ul>
					</div>
					<div className='menu__close'>
						<button onClick={toggleMenu}>Fechar</button>
					</div>
				</div>
			)}
		</div>
	);
}
