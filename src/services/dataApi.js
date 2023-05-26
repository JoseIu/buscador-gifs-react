// const KEY = 'ZJvcXf8B7tIT7cJtSOj5QIBZoGtaq0XI';
// const q = 'vegeta';

export const getGifs = q => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${
		import.meta.env.VITE_API_KEY
	}=${q}&limit=10&offset=0&rating=g&lang=en`;

	return fetch(url)
		.then(resultado => resultado.json())
		.then(datos => datos.data);
};
