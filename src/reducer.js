export function reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case 'SET_STYLING':
			return { ...state, styling: payload };
		case 'SET_COLECOES':
			return { ...state, colecoes: payload };
		case 'SET_FIGURINOS':
			return { ...state, figurinos: payload };
		case 'SET_ABOUT':
			return { ...state, about: payload };
		case 'SET_MENU':
			return { ...state, menuItems: payload };
		case 'SET_HOSPITAL':
			return { ...state, hospital: payload };
		default:
			return state;
	}
}
