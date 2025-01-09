import '../sass/styles.css';
import useWindowWidth from './hooks/useWindowWidth.tsx';
import DesktopApp from './DesktopApp.tsx'; // Asegúrate de tener este componente
import MobileComponent from './MobileComponent.tsx';

function App() {
	const windowWidth = useWindowWidth();
	const renderizaMobile = windowWidth > 1280;

	return <>{renderizaMobile ? <DesktopApp /> : <MobileComponent />}</>;
}

export default App;
