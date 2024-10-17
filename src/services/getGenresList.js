const GENRES_TOKEN = import.meta.env.VITE_APP_GENRES_TOKEN

export const getGenresList = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${GENRES_TOKEN}`,
        },
    }

    try {
        const response = await fetch(
            'https://api.themoviedb.org/3/genre/movie/list?language=en',
            options
        )
        const json = await response.json()
        const genres = json.genres
        return genres
    } catch (e) {
        throw new Error('Movies not finded')
    }
}
