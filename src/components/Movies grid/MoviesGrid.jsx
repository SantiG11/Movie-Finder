import { useEffect, useState } from 'react'
// import movies from '../../movies.json'
// import { getMovies } from '../../test'

export function MoviesGrid() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    const getMovies = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTllMTRmMDY2ODMwNTM4YWY3ZTlhYzEyMDBlZjQxZSIsIm5iZiI6MTcyNzM5ODE1My45NTYzLCJzdWIiOiI2NmY0NzI0MzU4MjBkMjhjZmI2YTEyMTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Tkk6TDsMn7PZX_BSwHGiZ6k9rqeuuamx497P1TKRleM',
            },
        }

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
                options
            )
            const json = await response.json()
            const movies = json.results

            setMovies(movies)
        } catch (e) {
            throw new Error('Movies not finded')
        }
    }

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1)
        } else {
            return
        }
    }

    const handleNext = () => {
        if (page) {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        getMovies()
    }, [page])

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
