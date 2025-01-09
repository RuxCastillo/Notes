import logo from './assets/images/logo.svg';
import houseIcon from './assets/images/icon-home.svg';
import archivedIcon from './assets/images/icon-archive.svg';
import tagIcon from './assets/images/icon-tag.svg';
import { useGlobalContext } from './store/Global context.tsx';
import { useEffect, useState } from 'react';

export default function SidebarNavigation() {
	const { state, dispatch } = useGlobalContext();
	const [allTags, setAllTags] = useState([]);

	useEffect(() => {
		if (state.notesAll) {
			const tags = obteniendoTodosLosTags(state.notesAll);
			setAllTags(tags);
			console.log(tags);
		}
	}, [state.notesAll]);

	function obteniendoTodosLosTags(obj) {
		const soloTags = [];
		obj.forEach((nota) => {
			for (let i = 0; i < nota.tags.length; i++) {
				if (soloTags.includes(nota.tags[i])) {
					continue;
				} else {
					soloTags.push(nota.tags[i]);
				}
			}
		});
		return soloTags;
	}

	function filtrandoPorTags(tag) {
		const notasFiltradas = [];
		state.notesAll.map((nota) => {
			if (nota.tags.includes(tag)) {
				notasFiltradas.push(nota);
			}
		});
		dispatch({ type: 'setNotesShowNow', payload: notasFiltradas });
	}

	function allNotesToNoteShowNow() {
		const todasNoArchivadas = [];
		state.notesAll.map((nota) => {
			if (!nota.isArchived) {
				todasNoArchivadas.push(nota);
			}
		});
		dispatch({ type: 'setNotesShowNow', payload: todasNoArchivadas });
	}

	function ArchivedNotesToNoteShowNow() {
		const todasArchivadas = [];
		state.notesAll.map((nota) => {
			if (nota.isArchived) {
				todasArchivadas.push(nota);
			}
		});
		dispatch({ type: 'setNotesShowNow', payload: todasArchivadas });
	}

	return (
		<aside className="sidebar text-preset-4">
			<div className="sidebar__logo">
				<img src={logo} alt="logo" className="sidebar__logo--img" />
			</div>
			<div className="sidebar__all-archived">
				<span className="sidebar__block" onClick={allNotesToNoteShowNow}>
					<img src={houseIcon} className="sidebar__block--img" />
					All Notes
				</span>
				<span className="sidebar__block" onClick={ArchivedNotesToNoteShowNow}>
					<img src={archivedIcon} alt="" className="sidebar__block--img" />
					Archived Notes
				</span>
			</div>
			<div className="sidebar__tags">
				<span className="sidebar__tags--tags">Tags</span>
				{allTags.map((tag, idx) => {
					return (
						<span
							className="sidebar__block"
							key={idx}
							onClick={() => {
								filtrandoPorTags(tag);
							}}
						>
							<img src={tagIcon} alt="" className="sidebar__block--img" />
							{tag}
						</span>
					);
				})}
			</div>
		</aside>
	);
}
