import HeaderSignInButton from './HeaderSignInButton'
import LogoMain from './LogoMain'

export default function Header() {
	return (
		<>
			<nav className="main-nav">
				<LogoMain />
				<HeaderSignInButton />
			</nav>
		</>
	)
}
