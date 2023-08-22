import { Routes, Route } from 'react-router-dom'
import './style/main.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import User from './pages/User'
import SignIn from './pages/Sign-in'
import Error from './pages/Error'

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<SignIn />} />
				<Route path="/profile/" element={<User />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</>
	)
}
