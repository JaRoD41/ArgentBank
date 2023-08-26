import React from 'react'

export default function UserPageHeader(user: { lastName: string; firstName: string }) {
	return (
		<div className="header">
			<h1>
				Welcome back
				<br />
				Tony Jarvis!
			</h1>
			<button className="edit-button">Edit Name</button>
		</div>
	)
}
