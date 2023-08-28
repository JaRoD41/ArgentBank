import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import { handleClick, handleCheckBox } from '../utils/sharedFunctions'
import { useDispatch, useSelector } from 'react-redux'
import { loginMiddleware } from '../middlewares/loginMiddleware'
import { useNavigate } from 'react-router-dom'
import { rememberChecked } from '../features/auth'

function SignIn() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
	const rememberMe = useSelector((state: any) => state.auth.rememberMe)

	return (
		<>
			<nav className="main-nav">
				<Link className="main-nav-logo" to={`/`}>
					<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
				<div>
					<Link
						className="main-nav-item"
						to={`/login`}
						onClick={(event) => handleClick(event, isLoggedIn, rememberMe, navigate)}
					>
						<i className="fa fa-user-circle"></i>
						Sign In
					</Link>
				</div>
			</nav>
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form>
						<div className="input-wrapper">
							<label htmlFor="username">Username</label>
							<input type="text" id="username" />
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" />
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" onChange={(event) => handleCheckBox(event, rememberChecked)} />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						<button
							className="sign-in-button"
							onClick={(event) => {
								event.preventDefault()
								const username = (document.getElementById('username') as HTMLInputElement).value
								const password = (document.getElementById('password') as HTMLInputElement).value

								loginMiddleware(
									dispatch,
									username,
									password,
									isLoggedIn,
									rememberMe,
									() => navigate('/profile/'),
									() => navigate('/profile/')
								)()
							}}
						>
							Sign In
						</button>
					</form>
				</section>
			</main>
			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</>
	)
}

export default SignIn
