export function DropdownItem({ items, id, selectMethod }) {
    return (
        <select name={id} id={id} onChange={selectMethod}>
            <option value="default">Default</option>
            {items?.map((item) => (
                <option key={item.id} id={item.id} value={item.id}>
                    {item.name}
                </option>
            ))}
        </select>
    )
}
