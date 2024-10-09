export const getGenresList = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTllMTRmMDY2ODMwNTM4YWY3ZTlhYzEyMDBlZjQxZSIsIm5iZiI6MTcyODEzNTcyMy4zMDc2MTMsInN1YiI6IjY2ZjQ3MjQzNTgyMGQyOGNmYjZhMTIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nVbEomCJ73r7nyKEL7HLCrg6S3twtnFYMQJX13UNKSc',
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
