export const CardNew = ({ news }) => {
	return (
		<>
			<h3>{news.title}</h3>
			<img src={news.imageURL} alt={news.title} />
			<p>{news.previewText}</p>
		</>
	)
}
