import Header from '../components/Header'
import SignInForm from '../components/SignInForm'

function SignIn() {
	return (
		<>
			<Header />
			<main className="main bg-dark">
				<SignInForm />
			</main>
		</>
	)
}

export default SignIn
