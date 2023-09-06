import Header from '../components/Header'
import { ChangeEvent } from 'react'
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

	const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
		if ((event.target as HTMLInputElement).checked) {
			console.log('checkbox checked')
			dispatch(setUserInfos({ rememberMe: true }))
		} else {
			console.log('checkbox not checked')
			dispatch(setUserInfos({ rememberMe: false }))
		}
	}

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
							<input type="email" id="username" />
							<span id="emailError"></span>
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" />
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

								if (!usernameCheck(username)) {
									zoneEmailErrorMsg.innerHTML = 'Merci de renseigner une adresse email valide'
									return
								} else {
									zoneEmailErrorMsg.innerHTML = ''
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
