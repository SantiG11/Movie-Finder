import './FooterStyle.css'
import popcornIcon from '/public/popcorn.png'

export function Footer() {
    return (
        <footer>
            <img
                src="popcorn.png"
                alt="Popcorn icon"
                className="popcorn-icon"
            />
            <a
                href="https://www.flaticon.com/free-icons/popcorn"
                title="popcorn icons"
            >
                Popcorn icons created by Freepik - Flaticon
            </a>
        </footer>
    )
}
