import { useState, useEffect, useContext } from 'react'
import { fetchSearch } from '../../services/FetchSearch'
import { MoviesContext } from '../../context/MoviesContext'

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
                        return (
                            <div className="movie" key={movie.id}>
                                <img
                                    className="movie-poster"
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt=""
                                />
                                <p>{movie.original_title}</p>
                                <p>{movie.release_date}</p>
                                <p>{movie.popularity}</p>
                            </div>
                        )
                    }))
                ) : (
                    <p>No movies finded</p>
                )}
            </div>
        </>
    )
}
