import { createContext, useContext, useEffect, useState } from 'react'

export const MoviesContext = createContext()

export function MoviesProvider({ children }) {
    const [page, setPage] = useState(1)
    const [pageLength, setPageLength] = useState()

    const [genreId, setGenreId] = useState()

    const [sortValue, setSortValue] = useState()

    const [searching, setSearching] = useState(false)
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        setPage(1)
    }, [searching, genreId])

    return (
        <MoviesContext.Provider
            value={{
                page,
                setPage,
                pageLength,
                setPageLength,
                genreId,
                setGenreId,
                searching,
                setSearching,
                searchInput,
                setSearchInput,
                sortValue,
                setSortValue,
            }}
        >
            {children}
        </MoviesContext.Provider>
    )
}
