import { createContext, useReducer } from 'react'
import { noticias } from '../data/data'
import { newsReducer } from '../reducer/newsReducer'

export const NewsContext = createContext()
const initialState = {
	newsList: noticias,
	newDetail: {},
}
export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(newsReducer, initialState)
	return (
		<NewsContext.Provider value={{ state, dispatch }}>
			{children}
		</NewsContext.Provider>
	)
}
