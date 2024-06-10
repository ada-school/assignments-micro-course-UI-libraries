import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NewsContext } from '../context/ContextProvider'

export const NewDetail = () => {
	const { state, dispatch } = useContext(NewsContext)
	const { id } = useParams()
	const { title, news, category, date, imageURL } = state.newDetail
	useEffect(() => {
		dispatch({ type: 'GET_DETAIL', payload: id })
		return () => {
			dispatch({ type: 'CLEAR_DETAIL' })
		}
	}, [])
	return (
		<>
			<h2>{title}</h2>
			<p>{category}</p>
			<img src={imageURL} alt={id} />
			<p>{date}</p>
			<p>{news}</p>
		</>
	)
}
