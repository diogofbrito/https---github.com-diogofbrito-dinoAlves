import React from 'react';
import { IntroOpening } from '../components/introOpening';
export function Home() {
	return (
		<>
			<IntroOpening />

			<div className=' w-screen h-screen bg-transparent absolute -z-10'>
				<div className='flex w-full h-full justify-center items-center' id='home__active'>
					<video autoPlay loop muted className='w-8/12'>
						<source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' type='video/mp4' />
					</video>
				</div>
			</div>
		</>
	);
}
