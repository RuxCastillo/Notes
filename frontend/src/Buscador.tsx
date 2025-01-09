import React, { useState, useEffect } from 'react';
import search from './assets/images/icon-search.svg';
import settings from './assets/images/icon-settings.svg';
import { useGlobalContext } from './store/Global context.tsx';

export default function Buscador() {
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
			<section className="buscador">
				<h1 className="buscador__title">All Notes</h1>
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
				<img
					src={settings}
					alt="settings icon"
					className="buscador__settings-icon"
				/>
			</section>
		</>
	);
}
