import { useState, useEffect } from 'react'

export function SearchResults({ result }) {
    const [searchedMovies, setSearchedMovies] = useState([])

    const test = true

    const fetchSearch = async () => {
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
                `https://api.themoviedb.org/3/search/movie?query=${result}&include_adult=false&language=en-US&page=1`,
                options
            )
            const json = await response.json()
            const movies = json.results

            setSearchedMovies(movies)
        } catch (e) {
            throw new Error('Movies not finded')
        }
    }

    useEffect(() => {
        fetchSearch()
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
