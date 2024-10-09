import { useContext, useEffect, useState } from 'react'
import { Dropdown } from '../Dropdown/Dropdown'
import './Sort-bar-style.css'
import { useGenres } from '../../hooks/useGenres'
import { getGenresList } from '../../services/getGenresList'
import { MoviesContext } from '../../context/MoviesContext'

const sorts = ['Popularity', 'Name (A-Z)', 'Year']

export function SortBar() {
    const [genres, setGenres] = useState([])
    const { setGenreId } = useContext(MoviesContext)

    const fetchGenres = async () => {
        try {
            const genresList = await getGenresList()
            setGenres(genresList)
        } catch (error) {
            throw new Error('error fetching genres')
        }
    }

    fetchGenres()

    const handleGenre = (genre) => {
        setGenreId(genre)
    }

    return (
        <>
            <div className="sort-bar">
                <h3>Trending Movies</h3>
                <Dropdown
                    textContent="Genres"
                    items={genres}
                    onSelection={handleGenre}
                />
                {/* <Dropdown textContent="Sort by" items={sorts} /> */}
            </div>
        </>
    )
}
