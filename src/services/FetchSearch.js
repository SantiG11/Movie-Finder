export const fetchSearch = async (result, page) => {
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
