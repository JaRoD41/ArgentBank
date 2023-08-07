import { Link } from "react-router-dom"

export default function HeaderSignInButton() {
	return (
		<div>
			<Link className="main-nav-item" to={`/signIn`}>
				<i className="fa fa-user-circle"></i>
				Sign In
			</Link>
		</div>
	)
}
