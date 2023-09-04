import { createSlice } from '@reduxjs/toolkit'

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
		setUserInfos: (state, action) => {
			state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
			state.email = action.payload.email
		},

		checkBox: (state, action) => {
			state.rememberMe = !state.rememberMe
		},
		setAuthenticating: (state, action) => {
			// ajouter verif token date, etc.... créer un middleware
			state.isLoggedIn = action.payload.isLoggedIn
			state.token = action.payload.token
		},
	},
})

export const { setUserInfos, checkBox, setAuthenticating } = auth.actions
export default auth.reducer
