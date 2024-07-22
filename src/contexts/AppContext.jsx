import React, { createContext, useReducer, useEffect } from 'react';
import { getColecoes, getPress, getFigurinos, getProjetosEspeciais, getStyling } from '../services/api';
import { reducer } from '../reducer';

export const AppContext = createContext();

export function AppProvider({ children }) {
	const initialState = {
		colecoes: [],
		figurinos: [],
		styling: [],
		projetosEspeciais: [],
		press: [],
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		async function fetchData() {
			try {
				const colecoes = await getColecoes();
				const figurinos = await getFigurinos();
				const styling = await getStyling();
				const projetosEspeciais = await getProjetosEspeciais();
				const press = await getPress();
				dispatch({ type: 'SET_COLECOES', payload: colecoes.colecoes });
				dispatch({ type: 'SET_FIGURINOS', payload: figurinos.figurinos });
				dispatch({ type: 'SET_STYLING', payload: styling.styling });
				dispatch({ type: 'SET_PROJETOS_ESPECIAIS', payload: projetosEspeciais.projetosEspeciais });
				dispatch({ type: 'SET_PRESS', payload: press.press });
			} catch (error) {
				console.log('ERRO', error);
			}
		}

		fetchData();
	}, []);

	return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
}
