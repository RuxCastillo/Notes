import tag from './assets/images/icon-tag.svg';
import clock from './assets/images/icon-clock.svg';

export default function Note() {
	return (
		<section className="Note">
			<div className="Note__header text-preset-5">
				<h1 className="Note__title text-preset-1" contentEditable="true">
					Enter a title...
				</h1>
				<div className="Note__header--block">
					<span className="Note__header--iconAndText">
						<img src={tag} alt="" />
						Tags
					</span>
					<span className="NewNote__gray-letter" contentEditable="true">
						Add tags separated by commas (e.g. Work, Planning)
					</span>
				</div>
				<div className="Note__header--block">
					<span className="Note__header--iconAndText">
						<img src={clock} alt="" />
						Last edited
					</span>
					<time dateTime="" className="NewNote__gray-letter">
						Not yet saved
					</time>
				</div>
			</div>
			<div className="Note__content" contentEditable="true">
				Start typing your note here...
			</div>
			<div className="Note__footer">
				<button className="btn btn--blue">Save Note</button>
				<button className="btn btn--gray">Cancel</button>
			</div>
		</section>
	);
}
