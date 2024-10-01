import { useEffect, useState } from 'react'
import { DropdownItem } from '../Dropdown-item/Dropdown-item'

export function Button(props) {
    const [showUl, setShowUl] = useState(false)

    const handleClick = () => {
        setShowUl(!showUl)
    }

    const handleMouseLeave = () => {
        setShowUl(false)
    }

    return (
        <div onMouseLeave={handleMouseLeave} className="sort-bar-selection">
            <button onClick={handleClick}>{props.textContent}</button>

            {showUl && <DropdownItem items={props.items} />}
        </div>
    )
}
