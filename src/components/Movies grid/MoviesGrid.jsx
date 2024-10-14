import { useContext, useEffect, useState } from 'react'
import { fetchMovies } from '../../services'
import { MoviesContext } from '../../context/MoviesContext'
import './MoviesGridStyle.css'
import { MovieCard } from '../MovieCard/MovieCard'

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
                    return <MovieCard movie={movie} key={movie.id} />
                })}
            </div>
        </>
    )
}
