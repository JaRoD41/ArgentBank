import { useDispatch } from 'react-redux'
import { userInfosCheck } from '../utils/integrityCheck'
import { editUserMiddleware } from '../middlewares/editUserMiddleware'
import { editUser } from '../features/auth'

interface HeaderLoggedInEditedProps {
	actualUser: {
		lastName: string
		firstName: string
	}
}

export default function HeaderLoggedInEdited({ actualUser }: HeaderLoggedInEditedProps) {
	const dispatch = useDispatch()

	const handleSaveButton = (event: any) => {
		event.preventDefault()
		const newFirstName = (document.getElementById('firstname') as HTMLInputElement).value
		const newLastName = (document.getElementById('lastname') as HTMLInputElement).value
		const zoneNameErrorMsg = document.querySelector('#nameError') as HTMLElement

		// Je contrôle le format du nom et du prenom avant de les envoyer vers mon middleware
		if (!userInfosCheck(newFirstName, newLastName)) {
			zoneNameErrorMsg.innerHTML = 'Format du Nom ou Prenom incorrect'
			return
		} else {
			zoneNameErrorMsg.innerHTML = ''
			// Je renvoie les nouvelles informations de l'utilisateur vers mon middleware editUser
			editUserMiddleware(dispatch, newFirstName, newLastName)
		}
	}

	const handleCancelButton = (event: any) => {
		event.preventDefault()
		dispatch(editUser({ editionMode: false }))
	}
	return (
		<>
			<div className="header">
				<h1>Welcome back</h1>
				<span id="nameError"></span>
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
