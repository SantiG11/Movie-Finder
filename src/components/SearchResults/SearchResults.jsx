import { useState, useEffect, useContext } from 'react'
import { fetchSearch } from '../../services/FetchSearch'
import { MoviesContext } from '../../context/MoviesContext'
import { MovieCard } from '../MovieCard/MovieCard'

export function SearchResults() {
    const { searchInput, page, setPageLength } = useContext(MoviesContext)
    const [searchedMovies, setSearchedMovies] = useState([])

    const refreshSearch = () => {
        fetchSearch(searchInput, page).then((movies) =>
            setSearchedMovies(movies)
        )
    }

    useEffect(() => {
        refreshSearch()
    }, [searchInput, page])

    return (
        <>
            <div className="movies-grid">
                {searchedMovies.length ? (
                    (setPageLength(searchedMovies.length),
                    searchedMovies.map((movie) => {
                        return <MovieCard movie={movie} key={movie.id} />
                    }))
                ) : (
                    <h2>No movies finded</h2>
                )}
            </div>
        </>
    )
}
