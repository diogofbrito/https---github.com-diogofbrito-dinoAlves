import React, { createContext, useReducer, useEffect } from 'react';
import { getColec, getFigur,  getStyling } from '../services/api';
import { reducer } from '../reducer';

export const AppContext = createContext();

export function AppProvider({ children }) {
	const initialState = {
		colecoes: [],
		figurinos: [],
		styling: [],
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	async function fetchColec() {
		try {
			const colecoes = await getColec();
			dispatch({ type: 'SET_COLECOES', payload: colecoes.colecoes });
		} catch (error) {
			console.log('ERRO', error);
		}
	}

	async function fetchFigur() {
		try {
			const figurinos = await getFigur();
			dispatch({ type: 'SET_FIGURINOS', payload: figurinos.figurinos });
		} catch (error) {
			console.log('ERRO', error);
		}
	}

	async function fetchStyling() {
		try {
			const styling = await getStyling();
			dispatch({ type: 'SET_STYLING', payload: styling.styling });
		} catch (error) {
			console.log('ERRO', error);
		}
	}


	useEffect(() => {
		fetchColec();
		fetchFigur();
		fetchStyling();
	}, []);

	return <AppContext.Provider value={{  ...state, dispatch }}>{children}</AppContext.Provider>;
}
