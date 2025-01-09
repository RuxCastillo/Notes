import NewNoteCircle from './NewNoteCircle.tsx';
import { useGlobalContext } from './store/Global context.tsx';

export default function ListaDeNotas() {
	const { state, dispatch } = useGlobalContext();

	const listaDeNotas = state.notesShowNow;

	const formatDate = (isoString) => {
		const date = new Date(isoString);
		return date.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		});
	};

	function renderizandoNotaPrincipal(num) {
		dispatch({
			type: 'cambiandoRenderizadoNotaActual',
			payload: listaDeNotas[num],
		});
	}

	function handleClickNewNote() {
		const newNote = {
			title: 'Enter a title...',
			tags: ['Add tags separated by commas (e.g. Work, Planning'],
			content: 'Start typing your note here...',
		};
		dispatch({ type: 'cambiandoRenderizadoNotaActual', payload: newNote });
	}

	return (
		<>
			<section className="allNotes text-preset-6">
				<button
					className="btn btn--blue btn__create"
					onClick={handleClickNewNote}
				>
					+ Create New Note
				</button>
				<div className="allNotes__title">
					<h2 className="allNotes__title--h2 text-preset-1">All Notes</h2>
				</div>
				{listaDeNotas.map((nota, idx) => {
					return (
						<div
							className="allNotes__block"
							onClick={() => {
								renderizandoNotaPrincipal(idx);
							}}
							key={idx}
						>
							<h3 className="allNotes__block--title text-preset-3">
								{nota.title}
							</h3>
							<div className="allNotes__tags">
								{nota.tags.map((tag) => {
									return <span className="allNotes__tags--tag">{tag}</span>;
								})}
							</div>
							<time dateTime={nota.lastEdited} className="allNotes__time">
								{formatDate(nota.lastEdited)}
							</time>
						</div>
					);
				})}
				<NewNoteCircle />
			</section>
		</>
	);
}
