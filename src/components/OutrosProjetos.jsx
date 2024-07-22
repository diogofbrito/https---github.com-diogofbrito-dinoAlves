import React from 'react';
import { MarqueeComp } from './MarqueeComp.jsx';
import { Helmet } from 'react-helmet-async';

export function OutrosProjetos({ title, description, projects, showCategory = false }) {
	return (
		<>
			<Helmet>
				<title>DINO ALVES | {title}</title>
				<meta name='description' content={description} />
			</Helmet>
			<div className='container-default'>
				<div className='flex flex-col gap-16'>
					{projects.map(project => (
						<div className='w-full' key={project.id}>
							<div className='flex flex-row justify-between'>
								<h1>{project.title}</h1>
								{showCategory && (
									<h1>
										<span className='blur-custom'>{project.category}</span>
									</h1>
								)}
							</div>
							<div className='pt-8'>
								<MarqueeComp highlights={project.highlights} />
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
