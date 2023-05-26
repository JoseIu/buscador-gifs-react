import { useContext } from 'react';
import { searchContext } from '../App';
import SearchIcon from './icons/SearchIcon';

const Search = () => {
	const { setSearch } = useContext(searchContext);
	return (
		<form
			className='form'
			onSubmit={ev => {
				ev.preventDefault();
				setSearch(ev.target.search.value);
				// console.log(ev.target.search.value);
			}}
		>
			<div className='form-container'>
				<SearchIcon className='form-icon' />
				<input
					className='form-input'
					type='text'
					name='search'
					placeholder='Buscar....'
				/>
			</div>
		</form>
	);
};

export default Search;
