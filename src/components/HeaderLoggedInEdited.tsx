import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editUserMiddleware } from '../middlewares/editUserMiddleware'
import { editUser } from '../features/auth'

interface HeaderLoggedInEditedProps {
	actualUser: {
		lastName: string
		firstName: string
	}
}

export default function HeaderLoggedInEdited({ actualUser }: HeaderLoggedInEditedProps) {
	const userFirstName = useSelector((state: any) => state.auth.firstName)
	const userLastName = useSelector((state: any) => state.auth.lastName)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSaveButton = (event: any) => {
		event.preventDefault()
		const newFirstName = (document.getElementById('firstname') as HTMLInputElement).value
		const newLastName = (document.getElementById('lastname') as HTMLInputElement).value

		editUserMiddleware(dispatch, newFirstName, newLastName)
		console.log('Save button clicked')
	}

	const handleCancelButton = (event: any) => {
		event.preventDefault()
		dispatch(editUser({ editionMode: false }))
	}
	return (
		<>
			<div className="header">
				<h1>Welcome back</h1>
				<form className="edit-form">
					<section className="edit-inputs">
						<div className="input-wrapper">
							<label htmlFor="firstname"></label>
							<input type="text" id="firstname" placeholder={actualUser.firstName} />
						</div>
						<div className="input-wrapper">
							<label htmlFor="lastname"></label>
							<input type="text" id="lastname" placeholder={actualUser.lastName} />
						</div>
					</section>
					<section className="edit-buttons">
						<button className="edit-user-button" onClick={handleSaveButton}>
							Save
						</button>
						<button className="edit-user-button" onClick={handleCancelButton}>
							Cancel
						</button>
					</section>
				</form>
			</div>
		</>
	)
}
