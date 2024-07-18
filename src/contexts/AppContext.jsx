import React, { createContext, useReducer, useEffect } from 'react';
import { getColec, getFigur,  getStyling } from '../services/api';
import { reducer } from '../reducer';

export const AppContext = createContext();

export function AppProvider({ children }) {
	const initialState = {
		colecoes: [],
		figurinos: [],
		styling: [],
		selectedYear: null
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		async function fetchData() {
			try {
				const colecoes = await getColec();
				const figurinos = await getFigur();
				const styling = await getStyling();
				dispatch({ type: 'SET_COLECOES', payload: colecoes.colecoes });
				dispatch({ type: 'SET_FIGURINOS', payload: figurinos.figurinos });
				dispatch({ type: 'SET_STYLING', payload: styling.styling });
			} catch (error) {
				console.log('ERRO', error);
			}
		}

		fetchData();
	}, []);

	return <AppContext.Provider value={{  ...state, dispatch }}>{children}</AppContext.Provider>;
}
