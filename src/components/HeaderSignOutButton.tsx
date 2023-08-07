import { Link } from 'react-router-dom'

export default function HeaderSignOutButton() {
	return (
		<>
			<Link className="main-nav-item" to={`/login`}>
				<i className="fa fa-sign-out"></i>
				Sign Out
			</Link>
		</>
	)
}
