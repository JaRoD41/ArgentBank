import { Dispatch } from '@reduxjs/toolkit'

export const editUserMiddleware = (dispatch: Dispatch, firstName: string, lastName: string) => {
	console.log('utilisateur modifié :', firstName, lastName)
}
