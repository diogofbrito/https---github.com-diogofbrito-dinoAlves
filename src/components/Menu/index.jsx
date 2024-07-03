import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { NavLink } from 'react-router-dom';
import './style.css';

export function Menu() {
	const { menuItems, fetchMenuItems } = useContext(AppContext);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		fetchMenuItems();
	}, []);

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
							{menuItems.map(item => (
								<li key={item.id}>
									<NavLink to={item.url} onClick={handleNavLinkClick}>
										{item.label}
									</NavLink>
								</li>
							))}
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
