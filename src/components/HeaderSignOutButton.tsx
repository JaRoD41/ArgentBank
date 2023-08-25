import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getLoggedIn, rememberChecked } from '../features/auth'

export default function HeaderSignOutButton() {
	const dispatch = useDispatch()
	const signOut = () => {
		dispatch(getLoggedIn(false))
		dispatch(rememberChecked(false))
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
