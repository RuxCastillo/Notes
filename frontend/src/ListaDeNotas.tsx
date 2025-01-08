import NewNoteCircle from './NewNoteCircle.tsx';

export default function ListaDeNotas() {
	return (
		<>
			<section className="allNotes text-preset-6">
				<button className="btn btn--blue btn__create">+ Create New Note</button>
				<div className="allNotes__title">
					<h2 className="allNotes__title--h2 text-preset-1">All Notes</h2>
				</div>
				<div className="allNotes__block">
					<h3 className="allNotes__block--title text-preset-3">
						React Performance optimization agregandole
					</h3>
					<div className="allNotes__tags">
						<span className="allNotes__tags--tag">dev</span>
						<span className="allNotes__tags--tag">react</span>
					</div>
					<time dateTime="2024-10-29" className="allNotes__time">
						29 Oct 2024
					</time>
				</div>
				<div className="allNotes__block">
					<h3 className="allNotes__block--title text-preset-3">
						React Performance optimization
					</h3>
					<div className="allNotes__tags">
						<span className="allNotes__tags--tag">dev</span>
						<span className="allNotes__tags--tag">react</span>
					</div>
					<time dateTime="2024-10-29" className="allNotes__time">
						29 Oct 2024
					</time>
				</div>
				<div className="allNotes__block">
					<h3 className="allNotes__block--title text-preset-3">
						React Performance optimization
					</h3>
					<div className="allNotes__tags">
						<span className="allNotes__tags--tag">dev</span>
						<span className="allNotes__tags--tag">react</span>
					</div>
					<time dateTime="2024-10-29" className="allNotes__time">
						29 Oct 2024
					</time>
				</div>
				<div className="allNotes__block">
					<h3 className="allNotes__block--title text-preset-3">
						React Performance optimization
					</h3>
					<div className="allNotes__tags">
						<span className="allNotes__tags--tag">dev</span>
						<span className="allNotes__tags--tag">react</span>
					</div>
					<time dateTime="2024-10-29" className="allNotes__time">
						29 Oct 2024
					</time>
				</div>
				<div className="allNotes__block">
					<h3 className="allNotes__block--title text-preset-3">
						React Performance optimization
					</h3>
					<div className="allNotes__tags">
						<span className="allNotes__tags--tag">dev</span>
						<span className="allNotes__tags--tag">react</span>
					</div>
					<time dateTime="2024-10-29" className="allNotes__time">
						29 Oct 2024
					</time>
				</div>
				<div className="allNotes__block">
					<h3 className="allNotes__block--title text-preset-3">
						React Performance optimization
					</h3>
					<div className="allNotes__tags">
						<span className="allNotes__tags--tag">dev</span>
						<span className="allNotes__tags--tag">react</span>
					</div>
					<time dateTime="2024-10-29" className="allNotes__time">
						29 Oct 2024
					</time>
				</div>
				<div className="allNotes__block">
					<h3 className="allNotes__block--title text-preset-3">
						React Performance optimization
					</h3>
					<div className="allNotes__tags">
						<span className="allNotes__tags--tag">dev</span>
						<span className="allNotes__tags--tag">react</span>
					</div>
					<time dateTime="2024-10-29" className="allNotes__time">
						29 Oct 2024
					</time>
				</div>
				<div className="allNotes__block">
					<h3 className="allNotes__block--title text-preset-3">
						React Performance optimization
					</h3>
					<div className="allNotes__tags">
						<span className="allNotes__tags--tag">dev</span>
						<span className="allNotes__tags--tag">react</span>
					</div>
					<time dateTime="2024-10-29" className="allNotes__time">
						29 Oct 2024
					</time>
				</div>
				<NewNoteCircle />
			</section>
		</>
	);
}
