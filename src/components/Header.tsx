import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { getLoggedIn, rememberChecked } from '../features/auth'

export default function Header() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
	const rememberMe = useSelector((state: any) => state.auth.rememberMe)

	const handleSignout = () => {
		// localStorage.removeItem('token')
		// localStorage.removeItem('rememberMe')
		dispatch(getLoggedIn(false))
		dispatch(rememberChecked(false))
	}

	const handleLogIn = (event: any) => {
		event.preventDefault()
		navigate('/profile/')
	}

	return (
		<>
			<nav className="main-nav">
				<Link className="main-nav-logo" to={`/`}>
					<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
				{/* Si le client est connecté, j'affiche le bouton de déconnexion */}
				{/* {isLoggedIn && rememberMe ? ( */}
				{isLoggedIn ? (
					<div>
						<Link className="main-nav-item" to={`/`} onClick={handleSignout}>
							<i className="fa fa-sign-out"></i>
							Sign Out
						</Link>
					</div>
				) : (
					// Si le client n'est pas connecté, j'affiche le bouton de connexion
					<div>
						<Link className="main-nav-item" to={`/login`} onClick={handleLogIn}>
							<i className="fa fa-user-circle"></i>
							Sign In
						</Link>
					</div>
				)}
			</nav>
		</>
	)
}
