import axios from 'axios'
import { loginURL, profileURL } from '../utils/urls'
import { Dispatch } from '@reduxjs/toolkit'
import { setAuthenticating, setUserInfos, loginError } from '../features/auth'

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
		// Je vérifie si l'utilisateur est déjà connecté

		if (isLoggedIn) {
			onAlreadyLoggedIn()
			return
		}
		try {
			const loginResponse = await axios.post(loginURL, {
				email,
				password,
			})

			// Si la réponse de l'API est OK et donc contient un token, je mets à jour le state
			if (loginResponse.data.status === 200) {
				dispatch(setAuthenticating({ token: loginResponse.data.body.token, isLoggedIn: true }))
				dispatch(loginError(null))
			}

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
			// Je sauvegarde l'email dans le local storage si la case RememberMe est cochée
			if (rememberMe) {
				localStorage.setItem('token', loginResponse.data.body.token)
			}
			onSucceed()
		} catch (error) {
			// Si l'API retourne une erreur de type AxiosError, je mets à jour le state et affiche l'erreur en console
			if (axios.isAxiosError(error) && error.response) {
				console.log('erreur API :', error)
				dispatch(loginError(error.response.data.status))
			} else {
				console.log('erreur inconnue :', error)
			}
		}
	}
}
