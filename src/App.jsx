import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { SortBar } from './components/Sort bar/Sort-bar'
import { MoviesGrid } from './components/Movies grid/MoviesGrid'

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <SortBar />
                <MoviesGrid />
            </main>
        </>
    )
}

export default App
