import { Link } from 'react-router-dom'

export const NavBar = () => {
	return (
		<nav>
			<button>{true ? '☀️' : '🌕'}</button>
			<ul>
				<li>
					<Link to={'/'}>Inicio</Link>
				</li>
				<li>
					<Link to={'/news'}>Noticias</Link>
				</li>
			</ul>
		</nav>
	)
}
