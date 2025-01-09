import tag from './assets/images/icon-tag.svg';
import clock from './assets/images/icon-clock.svg';
import NoteNavigationBar from './NoteNavigationBar.tsx';
import { useGlobalContext } from './store/Global context.tsx';
import { formatDate } from './ListaDeNotas.tsx';
import { useState, useEffect } from 'react';

export default function Note() {
	const { state, dispatch } = useGlobalContext();
	const [title, setTitle] = useState('');
	const [tags, setTags] = useState([]);
	const [content, setContent] = useState('');

	const notaActual = state.notaRenderizadaActual;
	console.log(notaActual);

	const formatDate = (isoString) => {
		const date = new Date(isoString);
		return date.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		});
	};

	useEffect(() => {
		if (notaActual) {
			setTitle(notaActual.title || '');
			setTags(notaActual.tags || []);
			setContent(notaActual.content || '');
		}
	}, [notaActual]);

	function handleTitleChange(e) {
		console.log(notaActual, e.target.innerText);
		setTitle(e.target.innerText);
	}

	function handleTagsChange(e) {
		setTags(e.target.innerText.split(','));
	}

	function handleContentChange(e) {
		setContent(e.target.innerText);
	}

	function handleSubmit() {
		const date = new Date();
		const isoString = date.toISOString();
		let encontrada = false;
		const updatedNotes2 = state.notesAll.map((nota) => {
			if (nota.title === notaActual.title) {
				encontrada = true;
				return { ...nota, title, tags, content, lastEdited: isoString };
			}
			return nota;
		});

		if (!encontrada) {
			updatedNotes2.push({
				title,
				tags,
				content,
				isArchived: false,
				lastEdited: isoString,
			});
		}
		dispatch({ type: 'setNotesInitial', payload: updatedNotes2 });
		dispatch({
			type: 'cambiandoRenderizadoNotaActual',
			payload: { ...notaActual, title, tags, content },
		});
	}

	console.log(notaActual.tags);

	return (
		<section className="Note">
			<NoteNavigationBar />
			<div className="Note__header text-preset-5">
				<h1
					className="Note__title text-preset-1"
					contentEditable="true"
					onInput={handleTitleChange}
					suppressContentEditableWarning={true}
				>
					{notaActual.title}
				</h1>
				<div className="Note__header--block">
					<span className="Note__header--iconAndText">
						<img src={tag} alt="" />
						Tags
					</span>
					<span
						contentEditable="true"
						onInput={handleTagsChange}
						suppressContentEditableWarning={true}
					>
						{notaActual.tags && notaActual.tags.join(', ')}
					</span>
				</div>
				<div className="Note__header--block">
					<span className="Note__header--iconAndText">
						<img src={clock} alt="" />
						Last edited
					</span>
					<time dateTime={notaActual.lastEdited}>
						{formatDate(notaActual.lastEdited)}
					</time>
				</div>
			</div>
			<div
				className="Note__content"
				contentEditable="true"
				onInput={handleContentChange}
				suppressContentEditableWarning={true}
			>
				{notaActual.content}
			</div>
			<div className="Note__footer">
				<button className="btn btn--blue" onClick={handleSubmit}>
					Save Note
				</button>
				<button className="btn btn--gray">Cancel</button>
			</div>
		</section>
	);
}
