export function MovieCard({ movie }) {
    return (
        <div className="movie">
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
}
