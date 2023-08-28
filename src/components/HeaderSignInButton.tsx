import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function HeaderSignInButton() {
	const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
	const rememberMe = useSelector((state: any) => state.auth.rememberMe)
	const navigate = useNavigate()

	const handleLogIn = (event: any) => {
		if (isLoggedIn && rememberMe) {
			event.preventDefault()
			navigate('/profile/')
		}
	}
	return (
		<div>
			<Link className="main-nav-item" to={`/login`} onClick={handleLogIn}>
				<i className="fa fa-user-circle"></i>
				Sign In
			</Link>
		</div>
	)
}
