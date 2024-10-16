import { useContext, useEffect, useState } from 'react'
import { Dropdown } from '../Dropdown/Dropdown'
import './Sort-bar-style.css'
import { getGenresList } from '../../services/getGenresList'
import { MoviesContext } from '../../context/MoviesContext'
import { sortList } from '../../services/sortList'

export function SortBar() {
    const [genres, setGenres] = useState([])
    const [sortingList, setSortingList] = useState([])
    const { setGenreId, setSortValue } = useContext(MoviesContext)

    const fetchGenres = async () => {
        try {
            const genresList = await getGenresList()
            setGenres(genresList)
        } catch (error) {
            throw new Error('error fetching genres')
        }
    }

    const handleGenre = (genre) => {
        setGenreId(genre)
    }

    const handleSort = (sortValue) => {
        setSortValue(sortValue)
    }

    useEffect(() => {
        fetchGenres()
        setSortingList(sortList)
    }, [])

    return (
        <>
            <div className="sort-bar">
                <Dropdown
                    textContent="Genres"
                    items={genres}
                    onSelection={handleGenre}
                />
                <Dropdown
                    textContent="Sort by"
                    items={sortingList}
                    onSelection={handleSort}
                />
            </div>
        </>
    )
}
