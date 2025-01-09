import masIcon from './assets/images/icon-plus.svg';
import { useGlobalContext } from './store/Global context.tsx';

export default function NewNoteCircle() {
	const { state, dispatch } = useGlobalContext();

	function handleClickNew() {
		dispatch({ type: 'cambioCurrentView', payload: 'newNote' });
	}

	return (
		<div className="blue-circle" onClick={handleClickNew}>
			<img src={masIcon} alt="" className="blue-circle__plus" />
		</div>
	);
}
