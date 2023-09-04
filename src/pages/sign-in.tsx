import Header from '../components/Header'
import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginMiddleware } from '../middlewares/loginMiddleware'
import { useNavigate } from 'react-router-dom'
import { checkBox } from '../features/auth'

function SignIn() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
	const rememberMe = useSelector((state: any) => state.auth.rememberMe)
	const userFirstName = useSelector((state: any) => state.auth.firstName)
	const userLastName = useSelector((state: any) => state.auth.lastName)
	const user = { lastName: userLastName, firstName: userFirstName }

	const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(checkBox(event.target.checked))
	}
	console.log('rememberMe ? :', rememberMe)

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
							<input type="text" id="username" />
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
				<p className="footer-text">Copyright 2023 Argent Bank</p>
			</footer>
		</>
	)
}

export default SignIn
