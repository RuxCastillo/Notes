import logo from './assets/images/logo.svg';

export default function BarraSuperior() {
	return (
		<header className="barra-superior">
			<img src={logo} alt="" className="barra-supeior__logo" />
		</header>
	);
}
