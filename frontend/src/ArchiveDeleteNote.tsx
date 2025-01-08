import archiveIcon from './assets/images/icon-archive.svg';
import deleteIcon from './assets/images/icon-delete.svg';

export default function ArchiveDeleteNote() {
	return (
		<>
			<section className="archiveDeleteNote">
				<div className="archiveDeleteNote__block">
					<img src={archiveIcon} alt="" />
					<span>Archive Note</span>
				</div>
				<div className="archiveDeleteNote__block">
					<img src={deleteIcon} alt="" />
					<span>Delete Note</span>
				</div>
			</section>
		</>
	);
}
