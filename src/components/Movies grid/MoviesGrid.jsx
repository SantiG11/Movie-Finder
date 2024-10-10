import { useContext, useEffect, useState } from 'react'
import { fetchMovies } from '../../services/FetchMovies'
import { MoviesContext } from '../../context/MoviesContext'

export function MoviesGrid() {
    const [movies, setMovies] = useState([])
    const { page, genreId, sortValue } = useContext(MoviesContext)

    const refreshMovies = () => {
        fetchMovies(page, genreId, sortValue).then((movies) =>
            setMovies(movies)
        )
    }

    useEffect(() => {
        refreshMovies()
    }, [page, genreId, sortValue])

    return (
        <>
            <div className="movies-grid">
                {movies?.map((movie) => {
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
                })}
            </div>
        </>
    )
}
