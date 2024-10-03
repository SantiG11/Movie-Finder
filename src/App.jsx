import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { SortBar } from './components/Sort bar/Sort-bar'
import { MoviesGrid } from './components/Movies grid/MoviesGrid'
import { SearchResults } from './components/SearchResults/SearchResults'

function App() {
    const [testState, setTestState] = useState('')
    const [searching, setSearching] = useState(false)

    const changeState = (newState) => {
        setTestState(newState)
    }

    useEffect(() => {}, [testState])
    return (
        <>
            <Header />
            <main>
                <Hero change={changeState} activateSearch={setSearching} />
                <SortBar />
                {searching ? (
                    <SearchResults result={testState} />
                ) : (
                    <MoviesGrid />
                )}
            </main>
        </>
    )
}

export default App
