export default function ListaNotasIndividualMobile.tsx(props) {
					return (
						<div
							className="allNotes__block"
							onClick={() => {
								props.functionOnClick
							}}
						>
							<h3 className="allNotes__block--title text-preset-3">
								{props.title}
							</h3>
							<div className="allNotes__tags">
								{props.tags.map((tag) => {
									return <span className="allNotes__tags--tag">{tag}</span>;
								})}
							</div>
							<time dateTime={props.lastEdited} className="allNotes__time">
								{formatDate(props.lastEdited)}
							</time>
						</div>
					);

}