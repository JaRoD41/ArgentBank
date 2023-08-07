import Header from "../components/Header";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";

function SignIn () {
    return (
			<>
				<Header />
				<main className="main bg-dark">
                    <SignInForm />
                </main>
				<Footer />
			</>
		)
    }

    export default SignIn