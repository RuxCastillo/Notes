import home from './assets/images/icon-home.svg';
import search from './assets/images/icon-search.svg';
import archive from './assets/images/icon-archive.svg';
import tag from './assets/images/icon-tag.svg';
import settings from './assets/images/icon-settings.svg';

export default function BarraNavegacionInferior() {
	return (
		<nav className="barra-inferior">
			<ul className="barra-inferior__ul">
				<div>
					<img src={home} alt="" className="barra-inferior__ul--img" />
					<span className="barra-inferior__ul--span text-preset-6">Home</span>
				</div>
				<div>
					<img src={search} alt="" className="barra-inferior__ul--img" />
					<span className="barra-inferior__ul--span text-preset-6">Search</span>
				</div>
				<div>
					<img src={archive} alt="" className="barra-inferior__ul--img" />
					<span className="barra-inferior__ul--span text-preset-6">
						Archived
					</span>
				</div>
				<div>
					<img src={tag} alt="" className="barra-inferior__ul--img" />
					<span className="barra-inferior__ul--span text-preset-6">Tags</span>
				</div>
				<div>
					<img src={settings} alt="" className="barra-inferior__ul--img" />
					<span className="barra-inferior__ul--span text-preset-6">
						Settings
					</span>
				</div>
			</ul>
		</nav>
	);
}
