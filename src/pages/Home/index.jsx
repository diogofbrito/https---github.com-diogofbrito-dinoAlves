import React from 'react';
import './style.css';
import { IntroPage } from '../../components/introPage';
export function Home() {
	return (
		<div className='home'>
			<IntroPage />

			<div className='home__about'>
				<div className='video__home' id='home__active'>
					<video autoPlay loop muted>
						<source src='https://vod.api.video/vod/vi2AALfHAOIEE6fHxT7FOqAG/mp4/source.mp4' type='video/mp4' />
					</video>
				</div>
			</div>
		</div>
	);
}
