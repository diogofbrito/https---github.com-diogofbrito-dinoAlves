import React from 'react';
import { IntroOpening } from '../components/introOpening';
import ReactPlayer from 'react-player';

export function Home() {
	return (
		<>
			<IntroOpening />

			<div className='w-screen h-screen bg-transparent absolute -z-10'>
				<div className='flex w-full h-full justify-center items-center' id='home__active'>
					<ReactPlayer
						url='https://vimeo.com/1011099436'
						playing
						loop
						muted
						width='70vw' 
						height='70vh' 
						className='react-player'
					/>
				</div>
			</div>
		</>
	);
}
