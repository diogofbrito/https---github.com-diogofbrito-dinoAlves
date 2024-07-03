import { NavLink, useLocation } from 'react-router-dom';
import './style.css';
export function Years() {
	const location = useLocation();
	const isFigurinosPage = location.pathname.startsWith('/Figurinos');
	const isStylingPage = location.pathname.startsWith('/Styling');

	const years = [];
	for (let i = 2017; i <= 2023; i++) {
		years.push(i);
	}

	return (
		<div>
			{isFigurinosPage && (
				<div className='navbar__years'>
					<div className='container__years'>
						<div className='years__list'>
							{years.reverse().map(path => (
								<NavLink key={path} to={`/Figurinos/${path}`}>
									{path}
								</NavLink>
							))}
						</div>
					</div>
				</div>
			)}

			{isStylingPage && (
				<div className='navbar__years blend-mode'>
					<div className='container__years'>
						<div className='years__list'>
							<NavLink>2022</NavLink>
							<NavLink>2021</NavLink>
							<NavLink>2013</NavLink>
							<NavLink>2010</NavLink>
							<NavLink>2009</NavLink>
							<NavLink>2007</NavLink>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
