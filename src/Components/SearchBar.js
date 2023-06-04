import { useState } from 'react'

function SearchBar({ handleSearch }) {
    const [searchTerm, setSerchTerm] = useState('')

    return (
        <form onSubmit={(e) => handleSearch(e, searchTerm)}>
            <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='Enter a search term'/>
            <input tye='submit'/>

        </form>
           
    )
}
export default SearchBar