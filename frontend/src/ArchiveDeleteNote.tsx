import archiveIcon from './assets/images/icon-archive.svg';
import deleteIcon from './assets/images/icon-delete.svg';
import restoreIcon from './assets/images/icon-restore.svg';
import { useGlobalContext } from './store/Global context.tsx';
import { useEffect, useState } from 'react';

export default function ArchiveDeleteNote() {
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

	return (
		<>
			<section className="archiveDeleteNote">
				{notaActualisArchived === false && (
					<div className="archiveDeleteNote__block" onClick={toggleArchiveNote}>
						<img src={archiveIcon} alt="" />
						<span>Archive Note</span>
					</div>
				)}
				{notaActualisArchived && (
					<div className="archiveDeleteNote__block" onClick={toggleArchiveNote}>
						<img src={restoreIcon} alt="" />
						<span>Restore Note</span>
					</div>
				)}
				<div className="archiveDeleteNote__block" onClick={deleteNote}>
					<img src={deleteIcon} alt="" />
					<span>Delete Note</span>
				</div>
			</section>
		</>
	);
}
