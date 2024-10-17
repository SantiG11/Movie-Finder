export const API_TOKEN = import.meta.env.VITE_APP_MOVIES_TOKEN

export const fetchMovies = async (page, genreId, sortValue) => {
    let API_LINK = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sortValue && sortValue !== 'default' ? `${sortValue}` : 'popularity.desc'}${genreId && genreId !== 'default' ? `&with_genres=${genreId}` : ''}&with_original_language=en`

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
        },
    }

    try {
        const response = await fetch(API_LINK, options)
        const json = await response.json()

        const movies = json.results

        return movies
    } catch (e) {
        throw new Error('Movies not finded')
    }
}
