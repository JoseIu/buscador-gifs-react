const Card = ({ id, title, url }) => (
	<article key={id} className='card'>
		<div className='card-img'>
			<img className='card-image' src={url} alt={title} loading='lazy' />
		</div>
	</article>
);

export default Card;
