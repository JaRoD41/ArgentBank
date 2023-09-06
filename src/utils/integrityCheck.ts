export function userInfosCheck(firstName: string, lastName: string): boolean {
	// Je crée un regex pour contrôler le nom et le prenom
	const userRegex = /^[a-zA-Z ]+$/
	if (!userRegex.test(firstName) || !userRegex.test(lastName)) {
		return false
	} else {
		return true
	}
}

export function usernameCheck(username: string): boolean {
	// Je crée un regex pour contrôler l'email entré
	const userRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

	if (!userRegex.test(username)) {
		return false
	} else {
		return true
	}
}
