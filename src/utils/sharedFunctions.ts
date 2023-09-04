import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkBox } from '../features/auth'

export const handleClick = (event: any, isLoggedIn: boolean, rememberMe: boolean, navigate: Function) => {
	if (isLoggedIn && rememberMe) {
		event.preventDefault()
		navigate('/profile/')
	}
}

export const handleCheckBox = (event:any, dispatch: Function) => {
	if ((document.getElementById('remember-me') as HTMLInputElement).checked) {
		console.log('checkbox checked')
		dispatch(checkBox(true))
	} else {
		console.log('checkbox not checked')
		dispatch(checkBox(false))
	}
}
