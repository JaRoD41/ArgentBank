import axios from 'axios'
import { loginURL, profileURL } from '../utils/urls'
import { Dispatch } from '@reduxjs/toolkit'
import { setAuthenticating, setUserInfos } from '../features/auth'
// import { useDispatch, useSelector } from 'react-redux'

export const loginMiddleware = (
	dispatch: Dispatch,
	// firstName: string,
	// lastName: string,
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
				dispatch(setAuthenticating({ token: loginResponse.data.body.token, email: email }))
				// dispatch(setUserInfos({ firstName: response.data.body.firstName, lastName: response.data.body.lastName }))
				onSucceed()
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
				setUserInfos({ firstName: profileResponse.data.body.firstName, lastName: profileResponse.data.body.lastName, email: profileResponse.data.body.email })
			)
		} catch (error) {
			console.log('erreur API :', error)
		}
	}
}
