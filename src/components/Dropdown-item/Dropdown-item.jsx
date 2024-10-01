export function DropdownItem(props) {
    return (
        <div className="dropdown">
            <ul>
                {props.items && props.items.length > 0 ? (
                    props.items.map((genre) => {
                        return <li>{genre}</li>
                    })
                ) : (
                    <li>Empty</li>
                )}
            </ul>
        </div>
    )
}
