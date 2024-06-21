import { useContext, useState } from 'react'
import { NewsContext } from '../context/ContextProvider'
import { Link } from 'react-router-dom'
import { CardNew } from '../components/CardNew'

export const NewsList = () => {
	const { state, dispatch } = useContext(NewsContext)
	const [filters, setFilters] = useState([])

	const handleFilters = (e) => {
		let newFilterState = []
		if (e.target.checked) {
			newFilterState = [...filters, e.target.value]
		} else {
			newFilterState = filters.filter((value) => value !== e.target.value)
		}
		setFilters(newFilterState)
		dispatch({ type: 'GET_NEWS', payload: newFilterState })
	}
	console.log(state)
	return (
		<>
			<label htmlFor='technology'>
				Tecnología
				<input
					type='checkbox'
					id='technology'
					value='technology'
					onChange={handleFilters}
				/>
			</label>
			<label htmlFor='sports'>
				Deporte
				<input
					type='checkbox'
					id='sports'
					value='sports'
					onChange={handleFilters}
				/>
			</label>
			<label htmlFor='health'>
				Salud
				<input
					type='checkbox'
					id='health'
					value='health'
					onChange={handleFilters}
				/>
			</label>
			<label htmlFor='economy'>
				Economia
				<input
					type='checkbox'
					id='economy'
					value='economy'
					onChange={handleFilters}
				/>
			</label>
			<label htmlFor='entertainment'>
				entretenimiento
				<input
					type='checkbox'
					id='entertainment'
					value='entertainment'
					onChange={handleFilters}
				/>
			</label>
			<section>
				{state.newsList.map((news) => (
					<Link to={`/news/${news.id}`} key={news.id}>
						<CardNew news={news} />
					</Link>
				))}
			</section>
		</>
	)
}
