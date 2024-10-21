import { useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext'
import './PagesBarStyle.css'

export function PagesBar() {
    const { page, setPage, pageLength } = useContext(MoviesContext)

    const handlePrevious = () => {
        if (page <= 1) {
            return
        }
        setPage(page - 1)

        window.scrollTo({
            top: 0,
        })
    }

    const handleNext = () => {
        console.log('hola')
        if (pageLength < 20 || !pageLength) {
            return
        }
        setPage(page + 1)

        window.scrollTo({
            top: 0,
        })
    }

    return (
        <div className="pages-bar">
            <button onClick={handlePrevious}>Previous page</button>
            <p className="page-number">{page}</p>
            <button onClick={handleNext}>Next page</button>
        </div>
    )
}
