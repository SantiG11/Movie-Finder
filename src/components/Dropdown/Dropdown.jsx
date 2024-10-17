import { DropdownItem } from '../Dropdown-item/Dropdown-item'
import './Dropdown.css'
import { Label } from '../Label/Label'

export function Dropdown({ textContent, defaultText, items, onSelection }) {
    const handleSelection = (e) => {
        onSelection(e.target.value)
    }

    const sanitizedId = textContent.replace(/\s+/g, '-').toLowerCase()

    return (
        <div className="selection-container">
            <Label htmlFor={sanitizedId} textContent={textContent} />
            <DropdownItem
                items={items}
                defaultText={defaultText}
                id={sanitizedId}
                selectMethod={handleSelection}
            />
        </div>
    )
}
