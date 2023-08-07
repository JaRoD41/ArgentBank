import HeaderLoggedIn from '../components/HeaderLoggedIn'

function User() {
	const userOne = { lastName: 'Stark', firstName: 'Tony' }
	const userTwo = { lastName: 'Rogers', firstName: 'Steve' }
	return (
		<>
			<HeaderLoggedIn name={userOne.lastName} />
			<div className="user">
				<h1>Argent Bank</h1>
				<h2>User Page</h2>
			</div>
		</>
	)
}

export default User
