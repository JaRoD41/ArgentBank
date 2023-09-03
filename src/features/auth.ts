import { createSlice } from '@reduxjs/toolkit'
import { verifiedEmail, verifiedPassword } from '../mock/mockedUsers'

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	token: '',
	rememberMe: false,
	isLoggedIn: false,
	error: null,
}

export const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// setUsername: (state, action) => {
		// 	if (action.payload === verifiedEmail) {
		// 		state.email = 'test user réussi'
		// 		state.isLoggedIn = true
		// 	} else {
		// 		state.email = 'test user échoué'
		// 		state.isLoggedIn = false
		// 	}
		// 	// state.email = action.payload
		// },
		setUserInfos: (state, action) => {
			state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
			state.email = action.payload.email
		},
		// setPassword: (state, action) => {
		// 	if (action.payload === verifiedPassword) {
		// 		state.password = 'test password réussi'
		// 		state.isLoggedIn = true
		// 	} else {
		// 		state.password = 'test password échoué'
		// 		state.isLoggedIn = false
		// 	}
		// 	// state.password = action.payload
		// },

		// getLoggedIn: (state, action) => {
		// 	state.isLoggedIn = action.payload
		// },
		rememberChecked: (state, action) => {
			if (action.payload === true) {
				state.rememberMe = true
			} else {
				state.rememberMe = false
			}
			// state.rememberMe = action.payload
		},
		setAuthenticating: (state, action) => {
			// ajouter verif token date, etc.... créer un middleware
			state.isLoggedIn = true
			state.token = action.payload.token
			// state.email = action.payload.email
		},
	},
})

export const { setUserInfos, rememberChecked, setAuthenticating } = auth.actions
export default auth.reducer
