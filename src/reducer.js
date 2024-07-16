export function reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case 'SET_STYLING':
			return { ...state, styling: payload };
		case 'SET_COLECOES':
			return { ...state, colecoes: payload };
		case 'SET_FIGURINOS':
			return { ...state, figurinos: payload };
		default:
			return state;
	}
}
