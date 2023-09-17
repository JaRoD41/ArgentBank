import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	token: '',
	rememberMe: false,
	isLoggedIn: false,
	editionMode: false,
	error: null,
}

export const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// Je crée un reducer qui va stocker les informations de l'utilisateur
		setUserInfos: (state, action) => {
			state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
			state.email = action.payload.email
			state.rememberMe = action.payload.rememberMe
		},

		// Je crée un reducer qui va stocker le token de l'utilisateur connecté
		setAuthenticating: (state, action) => {
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
			state.editionMode = false
			state.error = null
			// Je supprime l'email du local storage
			localStorage.removeItem('savedEmail')
		},

		// Je crée un reducer pour basculer le composant HeaderLoggedInBase sur le composant HeaderLoggedInEdited si l'utilisateur souhaite modifier son nom et prénom
		editUser: (state, action) => {
			state.editionMode = action.payload.editionMode
		},

		// Je crée un reducer pour gérer les erreurs de connexion
		loginError: (state, action) => {
			state.error = action.payload
		},
	},
})

export const { setUserInfos, setAuthenticating, resetState, editUser, loginError } = auth.actions
export default auth.reducer
