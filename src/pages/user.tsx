import Header from '../components/Header'
import HeaderLoggedInBase from '../components/HeaderLoggedInBase'
import HeaderLoggedInEdited from '../components/HeaderLoggedInEdited'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function User() {
	const userFirstName = useSelector((state: any) => state.auth.firstName)
	const userLastName = useSelector((state: any) => state.auth.lastName)
	const editionMode = useSelector((state: any) => state.auth.editionMode)
	// const user = { lastName: userLastName, firstName: userFirstName }
	// console.log('Mode edition activé : ', editionMode)

	const navigate = useNavigate()

	// Si le client n'est pas connecté, je n'affiche pas la page
	useEffect(() => {
		if (!userLastName) {
			navigate('/login')
		}
	}, [])

	return (
		userLastName && (
			<>
				<Header actualUser={{ lastName: userLastName, firstName: userFirstName }} />
				<main className="main bg-dark">
					{/* Si le bouton Edit est cliqué, j'affiche le composant HeaderLoggedInEdited, sinon le HeaderLoggedInBase */}
					{editionMode ? (
						<HeaderLoggedInEdited actualUser={{ lastName: userLastName, firstName: userFirstName }} />
					) : (
						<HeaderLoggedInBase actualUser={{ lastName: userLastName, firstName: userFirstName }} />
					)}

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
					<p className="footer-text">Copyright 2023 Argent Bank</p>
				</footer>
			</>
		)
	)
}

export default User
