import { configureStore } from '@reduxjs/toolkit'
import setUsername from '../features/auth'
import setPassword from '../features/auth'

export default configureStore({
	reducer: {
		setUsername,
		setPassword,
	},
})
