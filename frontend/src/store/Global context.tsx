import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
	notesAll: [],
	notesShowNow: [],
	notaRenderizadaActual: {},
	currentView: null,
	sidebarPosition: null,
	allNotesPosition: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'setNotesInitial':
			console.log('setNotesInitial corriendo');
			return { ...state, notesAll: action.payload };
		case 'setNotesShowNow':
			console.log('setNotesShowNow');
			return { ...state, notesShowNow: action.payload };
		case 'cambiandoRenderizadoNotaActual':
			console.log('cambiandoRenderizadoNotaActual');
			return { ...state, notaRenderizadaActual: action.payload };
		case 'cambioCurrentView':
			console.log('cambiando current view', action.payload);
			return { ...state, currentView: action.payload };
		default:
			throw new Error(`Unknown action type: ${action.type}`);
	}
};

const GlobalContext = createContext();

export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{props.children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
