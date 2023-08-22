import axios from 'axios'
import { loginURL } from '../utils/urls'
import { Dispatch } from '@reduxjs/toolkit'
import { setAuthenticating, getLoggedIn } from '../features/auth'
// import { useDispatch, useSelector } from 'react-redux'

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

		await axios
			.post(loginURL, {
				email,
				password,
			})
			.then((response) => {
				// J'affiche la réponse de l'API
				console.log('réponse API :', response)

				// Si la réponse de l'API contient un token, je mets à jour le state
				if (response.data.status === 200) {
					dispatch(setAuthenticating({ token: response.data.body.token, email: email }))
					onSucceed()
				}
				console.log('token actuel :', response.data.body.token)
			})
			.catch((error) => {
				// dispatch(getLoggedIn(false))
				console.log('erreur API :', error)
			})
	}
}
