import axios from 'axios'
import { loginURL } from '../utils/urls'
import { Dispatch } from '@reduxjs/toolkit'
export const loginMiddleware = (dispatch: Dispatch, email: string, password: string) => {
	return async () => {
		console.log('Login middleware called')
		const response = await axios.post(loginURL, {
			email,
			password,
		})
		console.log('réponse API :', response)
	}
}
