import home from './assets/images/icon-home.svg';
import search from './assets/images/icon-search.svg';
import archive from './assets/images/icon-archive.svg';
import tag from './assets/images/icon-tag.svg';
import settings from './assets/images/icon-settings.svg';
import { useGlobalContext } from './store/Global context.tsx';

export default function BarraNavegacionInferior() {
	const { state, dispatch } = useGlobalContext();

	function handleClickTags() {
		dispatch({ type: 'cambioCurrentView', payload: 'tags' });
	}

	function handleClickHome() {
		const notesNoArchived = [];
		state.notesAll.forEach((nota) => {
			if (!nota.isArchived) {
				notesNoArchived.push(nota);
			}
		});
		dispatch({ type: 'cambioCurrentView', payload: null });
		dispatch({ type: 'setNotesShowNow', payload: notesNoArchived });
	}

	function handleClickSearch() {
		dispatch({ type: 'cambioCurrentView', payload: 'search' });
	}

	function handleClickSettings() {
		dispatch({ type: 'cambioCurrentView', payload: 'settings' });
	}

	function handleClickArchived() {
		dispatch({ type: 'cambioCurrentView', payload: 'archived' });
		const todasNoArchivadas = [];
		state.notesAll.map((nota) => {
			if (nota.isArchived) {
				todasNoArchivadas.push(nota);
			}
		});
		dispatch({ type: 'setNotesShowNow', payload: todasNoArchivadas });
	}

	return (
		<nav className="barra-inferior">
			<ul className="barra-inferior__ul">
				<div onClick={handleClickHome}>
					<img src={home} alt="" className="barra-inferior__ul--img" />
					<span className="barra-inferior__ul--span text-preset-6">Home</span>
				</div>
				<div onClick={handleClickSearch}>
					<img src={search} alt="" className="barra-inferior__ul--img" />
					<span className="barra-inferior__ul--span text-preset-6">Search</span>
				</div>
				<div onClick={handleClickArchived}>
					<img src={archive} alt="" className="barra-inferior__ul--img" />
					<span className="barra-inferior__ul--span text-preset-6">
						Archived
					</span>
				</div>
				<div onClick={handleClickTags}>
					<img src={tag} alt="" className="barra-inferior__ul--img" />
					<span className="barra-inferior__ul--span text-preset-6">Tags</span>
				</div>
				{/* 				<div onClick={handleClickSettings}>
					<img src={settings} alt="" className="barra-inferior__ul--img" />
					<span className="barra-inferior__ul--span text-preset-6">
						Settings
					</span>
				</div> */}
			</ul>
		</nav>
	);
}
