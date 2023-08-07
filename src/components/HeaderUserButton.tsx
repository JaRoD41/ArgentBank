import { Link } from 'react-router-dom'

export default function HeaderUserButton(user: { name: string }) {
	return (
		<>
			<Link className="main-nav-item" to={`/profile/${user.name}`}>
				<i className="fa fa-user-circle"></i>
				{user.name}
			</Link>
		</>
	)
}
