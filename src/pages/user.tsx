import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function User() {
	const userFirstName = useSelector((state: any) => state.auth.firstName)
	const userLastName = useSelector((state: any) => state.auth.lastName)
	const user = { lastName: userLastName, firstName: userFirstName }
	console.log('utilisateur actuel : ', userLastName)

	const navigate = useNavigate()

	useEffect(() => {
		if (!userLastName) {
			navigate('/login')
		}
	}, [])
	

	return (
		// Si le client n'est pas connecté, je n'affiche pas la page
		userLastName && (
			<>
				<Header actualUser={user} />
				<main className="main bg-dark">
					<div className="header">
						<h1>
							Welcome back
							<br />
							{user.firstName} {user.lastName} !
						</h1>
						<button className="edit-button">Edit Name</button>
					</div>
					<h2 className="sr-only">Accounts</h2>
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Checking (x8349)</h3>
							<p className="account-amount">$2,082.79</p>
							<p className="account-amount-description">Available Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Savings (x6712)</h3>
							<p className="account-amount">$10,928.42</p>
							<p className="account-amount-description">Available Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
							<p className="account-amount">$184.30</p>
							<p className="account-amount-description">Current Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
				</main>
				<footer className="footer">
					<p className="footer-text">Copyright 2020 Argent Bank</p>
				</footer>
			</>
		)
	)
}

export default User
