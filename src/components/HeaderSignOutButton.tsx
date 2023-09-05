import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserInfos } from '../features/auth'
// import { checkBox } from '../features/auth'

export default function HeaderSignOutButton() {
	const dispatch = useDispatch()
	const signOut = () => {
		// dispatch(isLoggedIn(false))
		dispatch(setUserInfos({ rememberMe: false }))
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
