import { Dispatch } from '@reduxjs/toolkit'
import { setUserInfos, editUser } from '../features/auth'
import axios from 'axios'
import { profileURL } from '../utils/urls'

// Je crée un middleware qui va gérer les changements de nom et prenom et stopper le mode edition
export const editUserMiddleware = async (dispatch: Dispatch, firstName: string, lastName: string) => {
	const actualToken = localStorage.getItem('token')

	dispatch(
		setUserInfos({
			firstName: firstName,
			lastName: lastName,
		})
	)

	try {
		const editUserResponse = await axios.put(
			profileURL,
			{
				firstName: firstName,
				lastName: lastName,
			},
			{ headers: { Authorization: `Bearer ${actualToken}` } }
		)
		console.log('réponse API modif user:', editUserResponse)
		dispatch(editUser({ editionMode: false }))
	} catch (error) {
		console.log(error)
	}
}
