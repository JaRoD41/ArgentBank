import { useDispatch, useSelector } from 'react-redux'
import { setUsername, setPassword, getLoggedIn } from '../features/auth'
import { loginMiddleware } from '../middlewares/loginMiddleware'

export default function MainSignIn() {
	const dispatch = useDispatch()

	return (
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
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button
						className="sign-in-button"
						onClick={(event) => {
							event.preventDefault()
							const username = (document.getElementById('username') as HTMLInputElement).value
							const password = (document.getElementById('password') as HTMLInputElement).value

							loginMiddleware(dispatch, username, password)()
						}}
					>
						Sign In
					</button>
				</form>
			</section>
		</main>
	)
}
