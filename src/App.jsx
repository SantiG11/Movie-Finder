import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { SortBar } from './components/Sort bar/Sort-bar'
import { MoviesGrid } from './components/Movies grid/MoviesGrid'
import { SearchResults } from './components/SearchResults/SearchResults'
import { MoviesContext } from './context/MoviesContext'
import { PagesBar } from './components/PagesBar/PagesBar'

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
