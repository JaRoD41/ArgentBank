import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { rememberChecked, setUserInfos } from '../features/auth'

interface HeaderProps {
	actualUser: {
		lastName: string
		firstName: string
	}
}

export default function Header({ actualUser }: HeaderProps) {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
	const rememberMe = useSelector((state: any) => state.auth.rememberMe)

	const handleSignout = () => {
		// localStorage.removeItem('token')
		// localStorage.removeItem('rememberMe')
		dispatch(isLoggedIn(false))
		dispatch(rememberChecked(false))
		dispatch(setUserInfos({}))
	}

	const handleLogIn = (event: any) => {
		event.preventDefault()
		// navigate('/profile/')
		navigate('/login/')
	}

	return (
		<>
			<nav className="main-nav">
				{/* Si le client est connecté et mémorisé, le lien de retour à l'accueil est inactif */}
				{isLoggedIn ? (
					<Link className="main-nav-logo" to={`/profile`}>
						<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
						<h1 className="sr-only">Argent Bank</h1>
					</Link>
				) : (
					<Link className="main-nav-logo" to={`/`}>
						<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
						<h1 className="sr-only">Argent Bank</h1>
					</Link>
				)}

				{/* Si le client est connecté, j'affiche le bouton de déconnexion */}
				{isLoggedIn ? (
					<div>
						<Link className="main-nav-item" to={`/profile/${actualUser.firstName}`}>
							<i className="fa fa-user-circle"></i>
							{actualUser.firstName}
						</Link>
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
