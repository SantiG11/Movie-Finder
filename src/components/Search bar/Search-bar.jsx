import { useContext, useState } from 'react'
import { MoviesContext } from '../../context/MoviesContext'
import './SearchBarStyle.css'

export function SearchBar() {
    const [search, setSearch] = useState('')
    const { setSearchInput, setSearching } = useContext(MoviesContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearching(true)
        setSearchInput(search)
    }

    const handleChange = (event) => {
        let newSearch = event.target.value
        if (newSearch === '') {
            setSearching(false)
            setSearch(newSearch)
            return
        }
        setSearch(newSearch)
    }

    return (
        <>
            <form className="search-bar-container" onSubmit={handleSubmit}>
                <button type="submit" className="search-submit">
                    <img
                        className="search-icon"
                        src="public/search_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg"
                        alt="Search icon"
                    />
                </button>
                <input
                    type="text"
                    id="search-bar"
                    placeholder="Search movie..."
                    value={search}
                    onChange={handleChange}
                />
            </form>
        </>
    )
}
