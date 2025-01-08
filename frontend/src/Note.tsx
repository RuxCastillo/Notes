import tag from './assets/images/icon-tag.svg';
import clock from './assets/images/icon-clock.svg';
import NoteNavigationBar from './NoteNavigationBar.tsx';

export default function Note() {
	return (
		<section className="Note">
			<NoteNavigationBar />
			<div className="Note__header text-preset-5">
				<h1 className="Note__title text-preset-1" contentEditable="true">
					React Performance Optimization
				</h1>
				<div className="Note__header--block">
					<span className="Note__header--iconAndText">
						<img src={tag} alt="" />
						Tags
					</span>
					<span contentEditable="true">Dev, React</span>
				</div>
				<div className="Note__header--block">
					<span className="Note__header--iconAndText">
						<img src={clock} alt="" />
						Last edited
					</span>
					<time dateTime="">29 Oct 2024</time>
				</div>
			</div>
			<div className="Note__content" contentEditable="true">
				Key performance optimization techniques: 1. Code Splitting - Use
				React.lazy() for route-based splitting - Implement dynamic imports for
				heavy components 2. Memoization - useMemo for expensive calculations -
				useCallback for function props - React.memo for component optimization
				3. Virtual List Implementation - Use react-window for long lists -
				Implement infinite scrolling TODO: Benchmark current application and
				identify bottlenecks
			</div>
			<div className="Note__footer">
				<button className="btn btn--blue">Save Note</button>
				<button className="btn btn--gray">Cancel</button>
			</div>
		</section>
	);
}
