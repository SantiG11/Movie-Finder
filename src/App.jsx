import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { SortBar } from './components/Sort bar/Sort-bar'

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <SortBar />
            </main>
        </>
    )
}

export default App
