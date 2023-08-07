import logo from '../assets/argentBankLogo.png'
import HeaderSignOutButton from './HeaderSignOutButton'
import HeaderUserButton from './HeaderUserButton'
import { Link } from 'react-router-dom'

export default function HeaderLoggedIn(user: { name: string }) {
	return (
		<>
			<nav className="main-nav">
				<Link className="main-nav-logo" to={`/home`}>
					<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
				<div>
					<HeaderUserButton name={user.name} />
					<HeaderSignOutButton />
				</div>
			</nav>
		</>
	)
}
