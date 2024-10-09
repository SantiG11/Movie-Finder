import { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../context/MoviesContext'

export function SearchBar() {
    const [search, setSearch] = useState('')
    const { searchInput, setSearchInput, setSearching } =
        useContext(MoviesContext)

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

    // useEffect(() => {
    //     console.log(search)
    // }, [search])

    return (
        <>
            <form className="search-bar-container" onSubmit={handleSubmit}>
                <button type="submit" className="search-submit">
                    <img
                        className="search-icon"
                        src="src\assets\search_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg"
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
