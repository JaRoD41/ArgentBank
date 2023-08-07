import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import SignIn from './pages/Sign-in'
import Error from './pages/Error'

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signIn" element={<SignIn />} />
				<Route path="/user/:user" element={<User />} />
                <Route path="*" element={<Error />} />
			</Routes>
		</div>
	)
}
