import { useState, useEffect } from 'react'
import { fetchSearch } from '../../services/FetchSearch'

export function SearchResults({ result }) {
    const [searchedMovies, setSearchedMovies] = useState([])

    const refreshSearch = () => {
        fetchSearch(result).then((movies) => setSearchedMovies(movies))
    }

    useEffect(() => {
        refreshSearch()
    }, [result])

    return (
        <>
            <div className="movies-grid">
                {searchedMovies.length ? (
                    (console.log(searchedMovies.length),
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
