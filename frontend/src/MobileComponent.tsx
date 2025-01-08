import BarraSuperior from './BarraSuperior';
import ListaDeNotas from './ListaDeNotas';
import BarraNavegacionInferior from './BarraNavegacionInferior.tsx';
import SidebarNavigation from './SidebarNavigation.tsx';
import Buscador from './Buscador.tsx';
import Note from './Note.tsx';
import NewNote from './NewNote.tsx';
import ArchiveDeleteNote from './ArchiveDeleteNote.tsx';

export default function MobileComponent() {
	return (
		<section className="grid-container">
			<Buscador />
			<SidebarNavigation />
			<BarraSuperior />
			<BarraNavegacionInferior />
			<Note />
		</section>
	);
}
