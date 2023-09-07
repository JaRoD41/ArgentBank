import { configureStore } from '@reduxjs/toolkit'
import auth from '../features/auth'

// Je mets en place mon store grace à configureStore
export default configureStore({
	reducer: {
		auth: auth,
	},
})
