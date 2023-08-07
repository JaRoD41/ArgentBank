import { Link } from 'react-router-dom'

export default function HeaderSignOutButton() {
	return (
		<>
			<Link className="main-nav-item" to={`/signIn`}>
				<i className="fa fa-sign-out"></i>
				Sign Out
			</Link>
		</>
	)
}
