export function SearchBar() {
    return (
        <>
            <div className="search-bar-container">
                <img
                    className="search-icon"
                    src="src\assets\search_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg"
                />
                <input
                    type="text"
                    id="search-bar"
                    placeholder="Search movie..."
                />
            </div>
        </>
    )
}
