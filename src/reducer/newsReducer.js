import { news } from '../data/data'

export function newsReducer(state, action) {
	switch (action.type) {
		case 'GET_DETAIL':
			const newDetail = news.find((news) => news.id == action.payload)
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
				return { ...state, newsList: news }
			} else {
				const newsFiltered = news.filter((news) =>
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
