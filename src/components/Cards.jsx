import Card from './Card';

const Cards = ({ gifs }) =>
	gifs.map(gif => {
		const { id, images } = gif;
		const { downsized_medium } = images;
		const { url } = downsized_medium;

		return <Card key={id} id={id} url={url} />;
	});

export default Cards;
