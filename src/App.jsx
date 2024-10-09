import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { SortBar } from './components/Sort bar/Sort-bar'
import { MoviesGrid } from './components/Movies grid/MoviesGrid'
import { SearchResults } from './components/SearchResults/SearchResults'

function App() {
    const [searchInput, setSearchInput] = useState('')
    const [searching, setSearching] = useState(false)

    const updateSearchInput = (newInput) => {
        setSearchInput(newInput)
    }

    // useEffect(() => {}, [searchInput])
    return (
        <>
            <Header />
            <main>
                <Hero
                    change={updateSearchInput}
                    activateSearch={setSearching}
                />
                <SortBar />
                {searching ? (
                    <SearchResults result={searchInput} />
                ) : (
                    <MoviesGrid />
                )}
            </main>
        </>
    )
}

export default App
