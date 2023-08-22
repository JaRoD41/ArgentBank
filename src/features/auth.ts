import { createSlice } from '@reduxjs/toolkit'
import { verifiedEmail, verifiedPassword } from '../mock/mockedUsers'
// import { loginMiddleware } from '../middlewares/loginMiddleware'

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
		setUsername: (state, action) => {
      if (action.payload === verifiedEmail) {
        state.email = 'test user réussi'
        state.isLoggedIn = true
      } else {
        state.email = 'test user échoué'
        state.isLoggedIn = false
      }
			// state.email = action.payload
		},
		setPassword: (state, action) => {
      if (action.payload === verifiedPassword) {
        state.password = 'test password réussi'
        state.isLoggedIn = true
      } else {
        state.password = 'test password échoué'
        state.isLoggedIn = false
      }
			// state.password = action.payload
		},
    getLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    }
	},
})

export const { setUsername, setPassword, getLoggedIn } = auth.actions
export default auth.reducer
