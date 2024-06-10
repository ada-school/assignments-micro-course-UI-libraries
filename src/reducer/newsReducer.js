import { noticias } from '../data/data'

export function newsReducer(state, action) {
	switch (action.type) {
		case 'GET_DETAIL':
			const newDetail = noticias.find((news) => news.id == action.payload)
			return {
				...state,
				newDetail,
			}

		case 'CLEAR_DETAIL':
			return {
				...state,
				newDetail: {},
			}

		case 'GET_NEWS':
			if (!action.payload.length) {
				return { ...state, newsList: noticias }
			} else {
				const newsFiltered = noticias.filter((news) =>
					action.payload.includes(news.category)
				)

				return {
					...state,
					newsList: newsFiltered,
				}
			}

		default:
			return state
	}
}
