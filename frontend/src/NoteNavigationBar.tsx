import arrowLeft from './assets/images/icon-arrow-left.svg';
import deleteIcon from './assets/images/icon-delete.svg';
import archiveIcon from './assets/images/icon-archive.svg';

export default function NoteNavigationBar() {
	return (
		<nav className="NoteNavigationBar text-preset-5">
			<img src={arrowLeft} alt="" className="NoteNavigationBar__arrowLeft" />
			<span className="NoteNavigationBar__goback">Go Back</span>
			<img src={deleteIcon} alt="" />
			<img src={archiveIcon} alt="" />
			<span>Cancel</span>
			<span>Save Note</span>
		</nav>
	);
}
