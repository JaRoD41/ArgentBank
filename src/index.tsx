import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './style/main.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)