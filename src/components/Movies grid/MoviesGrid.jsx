import { useContext, useEffect, useState } from 'react'
import { fetchMovies } from '../../services/FetchMovies'
import { MoviesContext, MoviesProvider } from '../../context/MoviesContext'

export function MoviesGrid() {
    const [movies, setMovies] = useState([])
    const { page, setPage, genreId } = useContext(MoviesContext)

    const refreshMovies = () => {
        fetchMovies(page, genreId).then((movies) => setMovies(movies))
    }

    const handlePrevious = () => {
        if (page <= 1) {
            return
        }
        setPage(page - 1)
    }

    const handleNext = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        refreshMovies()
    }, [page, genreId])

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
            <div className="pages-bar">
                <button onClick={handlePrevious}>Previous page</button>
                <p>{page && page}</p>
                <button onClick={handleNext}>Next page</button>
            </div>
        </>
    )
}
