import React, { useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa';
import useDebounce from '@/hooks/useDebounce';

const Search = () => {
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const debouncedSearch = useDebounce(search)

	useEffect(() => {
		const fetchData = async () => {
			
			if (search === '') {
				setSearchResults([])
			} else {
				const res = await fetch(`/api/search?q=${debouncedSearch}`)
				const results = await res.json()
				
				setSearchResults(results)
			}
		}

		if (debouncedSearch) {
			fetchData()
		}
	}, [debouncedSearch])

	return (
		<div className="relative bg-gray-600 p-4">
			<div className="container mx-auto flex items-center justify-center md:justify-end">
				<div className="relative text-gray-600 w-72">
					<form>
						<input
							type="search"
							className='bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder='Search Posts...'
						/>

						<FaSearch className='absolute top-0 right-0 text-black mt-3 mr-4' />
					</form>
				</div>
			</div>
		</div>
	)
}

export default Search