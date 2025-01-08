import search from './assets/images/icon-search.svg';
import settings from './assets/images/icon-settings.svg';

export default function Buscador() {
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
					/>
				</label>
				<img src={settings} alt="settings icon" />
			</section>
		</>
	);
}
