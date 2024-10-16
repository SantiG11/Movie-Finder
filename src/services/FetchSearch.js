import { API_TOKEN } from './FetchMovies'

export const fetchSearch = async (result, page) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: API_TOKEN,
        },
    }

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${result}&include_adult=false&language=en-US&page=${page}`,
            options
        )
        const json = await response.json()
        const movies = json.results

        return movies
    } catch (e) {
        throw new Error('Movies not finded')
    }
}
