// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			letterSpacing: {
				'-0.15rem': '-0.15rem',
			},
			transitionDuration: {
				500: '500ms',
				2000: '2000ms',
			},
			transitionTimingFunction: {
				'in-out': 'ease-in-out',
			},
			height: {
				450: '450px',
			},
			
		},
		filter: {
			'blur-custom': 'blur(0.15rem)',
		},
		cursor: {
			'fancy': 'url(/assets/cursor/zoomIn-cursor.cur), zoom-in',
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.blur-custom': {
					filter: 'blur(0.15rem)',
					'-webkit-filter': 'blur(0.15rem)',
				},
			});
		},
		nextui(),
	],
};
