import { createContext, useEffect, useState } from 'react';
import Cards from './components/Cards';
import Search from './components/Search';
import { getGifs } from './services/dataApi';

export const searchContext = createContext();

const App = () => {
	const [search, setSearch] = useState('anime');
	const [gifs, setGifs] = useState([]);
	useEffect(() => {
		getGifs(search).then(data => setGifs(data));
	}, [search]);

	return (
		<div className='wrapper'>
			<searchContext.Provider value={{ setSearch }}>
				<Search />
			</searchContext.Provider>

			<section className='wrapper container'>
				<Cards gifs={gifs} />
			</section>
		</div>
	);
};

export default App;
