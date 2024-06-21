import { Link } from 'react-router-dom'

export const NavBar = () => {
	return (
		<nav>
			<img
				src='https://media.ada-school.org/5fcd3ac12b22eab4d301d819/5fcd49a07ffe7b324996b784/ada-logo-cfdb7c7b-1791-408f-b5b4-240b22bd1653.png?version=2'
				alt='ada-logo'
			/>
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
