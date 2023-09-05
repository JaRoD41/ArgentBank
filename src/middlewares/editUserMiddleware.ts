import { Dispatch } from '@reduxjs/toolkit'
import { setUserInfos, editUser } from '../features/auth'

// Je crée un middleware qui va gérer les changements de nom et prenom et stopper le mode edition
export const editUserMiddleware = (dispatch: Dispatch, firstName: string, lastName: string) => {
	dispatch(
		setUserInfos({
			firstName: firstName,
			lastName: lastName,
		})
	)
    dispatch(editUser({ editionMode: false }))
}
