import logo from '../assets/argentBankLogo.png'
import HeaderSignOutButton from './HeaderSignOutButton'
import HeaderUserButton from './HeaderUserButton'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function HeaderLoggedIn() {
	const user = { lastName: 'Stark', firstName: 'Tony' }
	const userTwo = { lastName: 'Rogers', firstName: 'Steve' }
	const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
	return (
		<>
			<nav className="main-nav">
				<Link className="main-nav-logo" to={`/`}>
					<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
				<div>
					<HeaderUserButton name={user.firstName} />
					<HeaderSignOutButton />
				</div>
			</nav>
		</>
	)
}
