import axios from 'axios'
import { loginURL } from '../utils/urls'
import { Dispatch } from '@reduxjs/toolkit'
import store from '../app/store'
export const loginMiddleware = (dispatch: Dispatch, email: string, password: string) => {
    const actualState = store.getState()

	return async () => {
		const response = await axios.post(loginURL, {
			email,
			password,
		})
		console.log('réponse API :', response)
        if (response.data.token) {
            dispatch({ type: 'auth/setUsername', payload: email })
            dispatch({ type: 'auth/setPassword', payload: password })
            dispatch({ type: 'auth/getLoggedIn', payload: true })
        }
        console.log('token actuel :', response.data.body.token);
        
        console.log('state après login :', actualState);
        
	}
}
