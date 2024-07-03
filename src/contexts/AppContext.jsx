import React, { createContext, useReducer } from 'react';
import { getColec, getFigur, getAbout, getStyling, getMenuItems, getHospital } from '../services/api';
import { reducer } from '../reducer';

export const AppContext = createContext();

export function AppProvider({ children }) {
	const initialState = {
		colecoes: [],
		figurinos: [],
		about: [],
		styling: [],
		menuItems: [],
		hospital: {}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	async function fetchAbout() {
		try {
			const about = await getAbout();
			dispatch({ type: 'SET_ABOUT', payload: about.about });
		} catch (error) {
			console.log('ERRO', error);
		}
	}

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

	async function fetchHospital() {
		try {
			const hospital = await getHospital();
			dispatch({ type: 'SET_HOSPITAL', payload: hospital.hospital });
		} catch (error) {
			console.log('ERRO', error);
		}
	}

	async function fetchMenuItems() {
		try {
			const menuItems = await getMenuItems();
			dispatch({ type: 'SET_MENU', payload: menuItems.menuItems });
		} catch (error) {
			console.log('ERRO', error);
		}
	}

	return <AppContext.Provider value={{ fetchHospital, fetchMenuItems, fetchStyling, fetchColec, fetchFigur, fetchAbout, ...state }}>{children}</AppContext.Provider>;
}
