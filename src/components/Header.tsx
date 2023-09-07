import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { resetState } from '../features/auth'

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

	const handleLogIn = (event: any) => {
		event.preventDefault()
		navigate('/login/')
	}

	return (
		<>
			<nav className="main-nav">
				{/* Si le client est connecté, le lien de retour à l'accueil est inactif */}
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
					<div className="login-zone">
						<Link className="main-nav-item" to={`/profile/`}>
							<i className="fa fa-user-circle"></i>
							<span>{actualUser.firstName}</span>
						</Link>
						<Link className="main-nav-item" to={`/`} onClick={() => dispatch(resetState())}>
							<i className="fa fa-sign-out"></i>
							<span>Sign Out</span>
						</Link>
					</div>
				) : (
					// Si le client n'est pas connecté, j'affiche le bouton de connexion
					<div className="login-zone">
						<Link className="main-nav-item" to={`/login`} onClick={handleLogIn}>
							<i className="fa fa-user-circle"></i>
							<span>Sign In</span>
						</Link>
					</div>
				)}
			</nav>
		</>
	)
}
