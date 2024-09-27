import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [example, setExample] = useState()

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTllMTRmMDY2ODMwNTM4YWY3ZTlhYzEyMDBlZjQxZSIsIm5iZiI6MTcyNzM5ODE1My45NTYzLCJzdWIiOiI2NmY0NzI0MzU4MjBkMjhjZmI2YTEyMTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Tkk6TDsMn7PZX_BSwHGiZ6k9rqeuuamx497P1TKRleM',
            },
        }

        fetch(
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            options
        )
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => console.error(err))
    }, [])

    return <></>
}

export default App
