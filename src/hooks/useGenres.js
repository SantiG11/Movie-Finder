import { getGenresList } from '../services/getGenresList'

export function useGenres(selectedGenre) {
    getGenresList().then((genres) => {
        const genre = genres.find((genre) => genre.name === selectedGenre)

        return genre
    })
}
