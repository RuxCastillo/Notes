import search from './assets/images/icon-search.svg';
import { useGlobalContext } from './store/Global context.tsx';
import React, { useState, useEffect } from 'react';
import ListaDeNotas from './ListaDeNotas';
import ListaDeNotasMobile from './ListaDeNotasMobile.tsx';

export default function BuscadorMobile() {
	const { state, dispatch } = useGlobalContext();
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const filtered = state.notesAll.filter((nota) => {
			return (
				nota.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				nota.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
				nota.tags.some((tag) =>
					tag.toLowerCase().includes(searchTerm.toLowerCase())
				)
			);
		});
		dispatch({ type: 'setNotesShowNow', payload: filtered });
	}, [searchTerm, state.notesAll, dispatch]);

	return (
		<>
			<section className="buscadorMobile">
				<h2 className="allNotes__title">Search</h2>
				<label htmlFor="buscador" className="buscador__block">
					<img
						src={search}
						alt="search icon"
						className="buscador__block--icon"
					/>
					<input
						type="text"
						placeholder="Search by title, content, or tags..."
						id="buscador"
						className="text-preset-5"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</label>
				{searchTerm && (
					<span>All notes matching "{searchTerm}" are displayed below</span>
				)}
			</section>
			<ListaDeNotasMobile />
		</>
	);
}
