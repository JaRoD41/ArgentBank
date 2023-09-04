import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { checkBox } from '../features/auth'

export default function HeaderSignOutButton() {
	const dispatch = useDispatch()
	const signOut = () => {
		// dispatch(isLoggedIn(false))
		dispatch(checkBox(false))
	}

	return (
		<>
			<Link className="main-nav-item" to={`/`} onClick={signOut}>
				<i className="fa fa-sign-out"></i>
				Sign Out
			</Link>
		</>
	)
}
