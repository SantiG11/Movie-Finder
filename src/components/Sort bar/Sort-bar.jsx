import { Button } from '../Button/Button'
import './Sort-bar-style.css'

const genres = ['Action', 'Comedy', 'Drama']
const sorts = ['Popularity', 'Name (A-Z)', 'Year']

export function SortBar() {
    return (
        <>
            <div className="sort-bar">
                <h3>Trending Movies</h3>
                <Button textContent="Genres" items={genres} />
                <Button textContent="Sort by" items={sorts} />
            </div>
        </>
    )
}
