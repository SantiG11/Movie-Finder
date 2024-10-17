export function DropdownItem({ items, defaultText, id, selectMethod }) {
    return (
        <select name={id} id={id} onChange={selectMethod}>
            {defaultText && <option value="default">{defaultText}</option>}
            {items?.map((item) => (
                <option key={item.id} id={item.id} value={item.id}>
                    {item.name}
                </option>
            ))}
        </select>
    )
}
