import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { NewsList } from './pages/NewsList'
import { NavBar } from './components/NavBar'
import { NewDetail } from './pages/NewDetail'
import { ContextProvider } from './context/ContextProvider'

export const App = () => {
	return (
		<ContextProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<AboutUs />} />
					<Route path='/news' element={<NewsList />} />
					<Route path='/news/:id' element={<NewDetail />} />
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	)
}
