import { SearchBar } from '../Search bar/Search-bar'

export function Hero({ change, activateSearch }) {
    return (
        <>
            <section className="hero">
                <SearchBar change={change} activateSearch={activateSearch} />
            </section>
        </>
    )
}
