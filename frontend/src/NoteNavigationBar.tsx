import arrowLeft from './assets/images/icon-arrow-left.svg';
import deleteIcon from './assets/images/icon-delete.svg';
import archiveIcon from './assets/images/icon-archive.svg';
import restoreIcon from './assets/images/icon-restore.svg';
import { useGlobalContext } from './store/Global context.tsx';
import { useEffect, useState } from 'react';

export default function NoteNavigationBar(props) {
	const { state, dispatch } = useGlobalContext();
	const [notaActualisArchived, setNotaActualisArchived] = useState(false);
	const notaActual = state.notaRenderizadaActual;

	useEffect(() => {
		if (notaActual) {
			setNotaActualisArchived(notaActual.isArchived);
		}
	}, [notaActual]);

	const identificadorNotaActual = notaActual ? notaActual.title : '';
	const todasNotas = state.notesAll;

	function toggleArchiveNote() {
		const updatedNotes = todasNotas.map((nota) => {
			if (nota.title === identificadorNotaActual) {
				const updatedNota = { ...nota, isArchived: !nota.isArchived };
				setNotaActualisArchived(updatedNota.isArchived);
				return updatedNota;
			}
			return nota;
		});
		dispatch({ type: 'setNotesInitial', payload: updatedNotes });

		const todasNoArchivadas = updatedNotes.filter((nota) => !nota.isArchived);
		dispatch({ type: 'setNotesShowNow', payload: todasNoArchivadas });
	}

	function deleteNote() {
		const notasFiltradas = todasNotas.filter(
			(nota) => nota.title !== identificadorNotaActual
		);
		dispatch({ type: 'setNotesInitial', payload: notasFiltradas });
		dispatch({ type: 'setNotesShowNow', payload: notasFiltradas });
		dispatch({
			type: 'cambiandoRenderizadoNotaActual',
			payload: notasFiltradas[0],
		});
		console.log(state.notesAll);
	}

	function handleGoBack() {
		dispatch({ type: 'cambioCurrentView', payload: null });
	}

	return (
		<nav className="NoteNavigationBar text-preset-5">
			<img src={arrowLeft} alt="" className="NoteNavigationBar__arrowLeft" />
			<span className="NoteNavigationBar__goback" onClick={handleGoBack}>
				Go Back
			</span>
			<img src={deleteIcon} alt="" onClick={deleteNote} />
			{notaActualisArchived === false && (
				<img src={archiveIcon} alt="" onClick={toggleArchiveNote} />
			)}
			{notaActualisArchived && (
				<img src={restoreIcon} alt="" onClick={toggleArchiveNote} />
			)}
			<span>Cancel</span>
			<span onClick={props.handleSubmit}>Save Note</span>
		</nav>
	);
}
