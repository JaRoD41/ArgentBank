import HeaderLoggedIn from '../components/HeaderLoggedIn'

function User() {
	const userOne = { lastName: 'Stark', firstName: 'Tony' }
	const userTwo = { lastName: 'Rogers', firstName: 'Steve' }
	return (
		<>
			<HeaderLoggedIn name={userOne.lastName} />
			<main className="main bg-dark">
				<div className="header">
					<h1>
						Welcome back
						<br />
						{userOne.firstName} {userOne.lastName}
					</h1>
					<button className="edit-button">Edit Name</button>
				</div>
				
			</main>
		</>
	)
}

export default User
