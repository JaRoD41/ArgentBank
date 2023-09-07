import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'

export default function Error() {
	const navigate = useNavigate()
	const handleLogIn = (event: any) => {
		event.preventDefault()
		navigate('/login/')
	}
	return (
		<>
			<div className="errorPage-container">
				<header>
					<nav className="main-nav">
						<Link className="main-nav-logo" to={`/`}>
							<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
							<h1 className="sr-only">Argent Bank</h1>
						</Link>

						<div>
							<Link className="main-nav-item" to={`/login`} onClick={handleLogIn}>
								<i className="fa fa-user-circle"></i>
								Sign In
							</Link>
						</div>
					</nav>
				</header>

				<section className="errorPage">
					<span className="errorPage__title">Oups...</span>
					<span className="errorPage__text">La page que vous demandez n'existe pas.</span>
				</section>

				<footer className="footer">
					<p className="footer-text">Copyright 2023 Argent Bank</p>
				</footer>
			</div>
		</>
	)
}
