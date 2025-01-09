import BarraSuperior from './BarraSuperior';
import ListaDeNotas from './ListaDeNotas';
import BarraNavegacionInferior from './BarraNavegacionInferior.tsx';
import SidebarNavigation from './SidebarNavigation.tsx';
import Buscador from './Buscador.tsx';
import Note from './Note.tsx';
import NewNote from './NewNote.tsx';
import ArchiveDeleteNote from './ArchiveDeleteNote.tsx';
import { useGlobalContext } from './store/Global context.tsx';
import { useEffect } from 'react';
import BuscadorMobile from './BuscadorMobile.tsx';

export default function MobileComponent() {
	const { state, dispatch } = useGlobalContext();

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log('./');
				const response = await fetch('/dataNotes.json');
				if (!response.ok) {
					throw new Error('fetching error notes');
				}
				const result = await response.json();
				dispatch({ type: 'setNotesInitial', payload: result.notes });
				const todasNoArchivadas = [];
				result.notes.map((nota) => {
					if (!nota.isArchived) {
						todasNoArchivadas.push(nota);
					}
				});
				dispatch({ type: 'setNotesShowNow', payload: todasNoArchivadas });

				dispatch({
					type: 'cambiandoRenderizadoNotaActual',
					payload: result.notes[0],
				});
				console.log('result', result);
			} catch (err) {
				console.log('err fetch notes json', err);
			} finally {
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		console.log(state.feature);
	}, [state]);

	let content;
	switch (state.currentView) {
		case 'tags':
			content = <SidebarNavigation />;
			break;
		case 'search':
			content = <BuscadorMobile />;
			break;
		default:
			content = <ListaDeNotas />;
			break;
	}

	return (
		<section className="grid-container">
			<BarraSuperior />
			<BarraNavegacionInferior />
			{content}
		</section>
	);
}
