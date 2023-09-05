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
			state.rememberMe = action.payload.rememberMe
		},

		// checkBox: (state, action) => {
		// 	state.rememberMe = !state.rememberMe
		// },
		setAuthenticating: (state, action) => {
			// ajouter verif token date, etc.... créer un middleware
			state.isLoggedIn = action.payload.isLoggedIn
			state.token = action.payload.token
		},
		// Je crée un reducer qui va remettre à zéro le State si l'utilisateur se déconnecte
		resetState: (state) => {
			state.firstName = ''
			state.lastName = ''
			state.email = ''
			state.password = ''
			state.token = ''
			state.rememberMe = false
			state.isLoggedIn = false
			state.error = null
		},
	},
})

export const { setUserInfos, setAuthenticating, resetState } = auth.actions
export default auth.reducer
