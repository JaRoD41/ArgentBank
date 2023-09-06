import { useDispatch } from 'react-redux'
import { editUser } from '../features/auth'

interface HeaderLoggedInBaseProps {
	actualUser: {
		lastName: string
		firstName: string
	}
}

export default function HeaderLoggedInBase({ actualUser }: HeaderLoggedInBaseProps) {
	const dispatch = useDispatch()

	const handleEditButton = (event: any) => {
		event.preventDefault()
		dispatch(editUser({ editionMode: true }))
	}
	return (
		<>
			<div className="header">
				<h1>
					Welcome back
					<br />
					{actualUser.firstName} {actualUser.lastName} !
				</h1>
				<button className="edit-button" onClick={handleEditButton}>
					Edit Name
				</button>
			</div>
		</>
	)
}
