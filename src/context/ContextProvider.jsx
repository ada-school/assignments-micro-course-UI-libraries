import { createContext, useReducer } from 'react'
import { news } from '../data/data'
import { newsReducer } from '../reducer/newsReducer'

export const NewsContext = createContext()
const initialState = {
	newsList: news,
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
