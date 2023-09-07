import Header from '../components/Header'
import { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginMiddleware } from '../middlewares/loginMiddleware'
import { useNavigate } from 'react-router-dom'
import { setUserInfos } from '../features/auth'
import { usernameCheck } from '../utils/integrityCheck'

function SignIn() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
	const rememberMe = useSelector((state: any) => state.auth.rememberMe)
	const userFirstName = useSelector((state: any) => state.auth.firstName)
	const userLastName = useSelector((state: any) => state.auth.lastName)
	const error = useSelector((state: any) => state.auth.error)

	const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
		if ((event.target as HTMLInputElement).checked) {
			console.log('checkbox checked')
			dispatch(setUserInfos({ rememberMe: true }))
		} else {
			console.log('checkbox not checked')
			dispatch(setUserInfos({ rememberMe: false }))
		}
	}

	// J'utilise le hook useEffect pour envoyer le message d'erreur si l'utilisateur ou le mot de passe est invalide
	useEffect(() => {
		const zoneConnectErrorMsg = document.querySelector('#connectError') as HTMLElement
		if (error === 400) {
			zoneConnectErrorMsg.innerHTML = 'Utilisateur ou mot de passe invalide'
		} else {
			zoneConnectErrorMsg.innerHTML = ''
		}
	}, [error])

	return (
		<>
			<Header actualUser={{ lastName: userLastName, firstName: userFirstName }} />
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form>
						<div className="input-wrapper">
							<label htmlFor="username">Username</label>
							<input type="email" id="username" autoComplete="off" />
							<span id="emailError"></span>
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" />
							<span id="connectError"></span>
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" onChange={handleCheckBox} />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						<button
							className="sign-in-button"
							onClick={(event) => {
								event.preventDefault()
								const username = (document.getElementById('username') as HTMLInputElement).value
								const password = (document.getElementById('password') as HTMLInputElement).value
								const zoneEmailErrorMsg = document.querySelector('#emailError') as HTMLElement
								const zoneConnectErrorMsg = document.querySelector('#connectError') as HTMLElement

								if (!usernameCheck(username)) {
									zoneEmailErrorMsg.innerHTML = 'Merci de renseigner une adresse email valide'
									return
								} else {
									zoneEmailErrorMsg.innerHTML = ''
									zoneConnectErrorMsg.innerHTML = ''
									loginMiddleware(
										dispatch,
										username,
										password,
										isLoggedIn,
										rememberMe,
										() => navigate('/profile/'),
										() => navigate('/profile/')
									)()
								}
							}}
						>
							Sign In
						</button>
					</form>
				</section>
			</main>
			<footer className="footer">
				<p className="footer-text">Copyright 2023 Argent Bank</p>
			</footer>
		</>
	)
}

export default SignIn
