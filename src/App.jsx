import { useContext } from 'react'
import './App.css'
import {
    Header,
    Hero,
    MoviesGrid,
    PagesBar,
    SearchResults,
    SortBar,
} from './components'

import { MoviesContext } from './context/MoviesContext'

function App() {
    const { searching } = useContext(MoviesContext)

    return (
        <>
            <Header />
            <main>
                <Hero />
                {searching === false && <SortBar />}
                {searching ? <SearchResults /> : <MoviesGrid />}
                <PagesBar />
            </main>
        </>
    )
}

export default App
