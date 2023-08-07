import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'

export default function LogoMain() {
	return (
		<>
			<Link className="main-nav-logo" to={`/home`}>
				<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
		</>
	)
}
