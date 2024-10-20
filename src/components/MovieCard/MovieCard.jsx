import './MovieCardStyle.css'

export function MovieCard({ movie }) {
    return (
        <div className="movie">
            {movie.poster_path ? (
                <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.original_title}
                />
            ) : (
                <div className="null-poster">
                    <h3>Poster Unavailable</h3>
                </div>
            )}
            <div className="movie-title">
                <p>{movie.original_title}</p>
            </div>
            <p>Release Year: {new Date(movie.release_date).getFullYear()}</p>
            <p>
                Rating: {movie.vote_average ? movie.vote_average.toFixed(2) : 0}
            </p>
        </div>
    )
}
