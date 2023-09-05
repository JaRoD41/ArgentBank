import axios from 'axios'
import { loginURL, profileURL } from '../utils/urls'
import { Dispatch } from '@reduxjs/toolkit'
import { setAuthenticating, setUserInfos } from '../features/auth'
// import { checkBox } from '../features/auth'

export const loginMiddleware = (
	dispatch: Dispatch,
	email: string,
	password: string,
	isLoggedIn: boolean,
	rememberMe: boolean,
	onSucceed: Function,
	onAlreadyLoggedIn: Function
) => {
	return async () => {
		// Je vérifie si l'utilisateur est déjà connecté et si la case "se souvenir de moi" est cochée

		if (isLoggedIn && rememberMe) {
			onAlreadyLoggedIn()
			return
		}
		try {
			const loginResponse = await axios.post(loginURL, {
				email,
				password,
			})
			// J'affiche la réponse de l'API
			console.log('réponse API :', loginResponse)

			// Si la réponse de l'API contient un token, je mets à jour le state
			if (loginResponse.data.status === 200) {
				dispatch(setAuthenticating({ token: loginResponse.data.body.token, isLoggedIn: true }))
			}
			console.log('token actuel :', loginResponse.data.body.token)
			console.log('utilisateur actuel :', email)
			console.log('utilisateur remembered ? :', rememberMe)
			const profileResponse = await axios.post(
				profileURL,
				{},
				{ headers: { Authorization: `Bearer ${loginResponse.data.body.token}` } }
			)
			dispatch(
				setUserInfos({
					firstName: profileResponse.data.body.firstName,
					lastName: profileResponse.data.body.lastName,
					email: profileResponse.data.body.email,
				})
			)
			onSucceed()
		} catch (error) {
			console.log('erreur API :', error)
		}
	}
}

export const logoutMiddleware = (dispatch: Dispatch) => {
	// dispatch(checkBox({ rememberMe: false }))
	dispatch(setUserInfos({ rememberMe: false }))
	dispatch(setAuthenticating({ isLoggedIn: false }))
}
