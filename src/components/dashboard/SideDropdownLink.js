
export default function SideDropdownLink({onClick, title, icon}) {
    if(onClick) {
        return (
            <div className="dropdown-link" onClick={(event) => {
                event.preventDefault();
                onClick();
            }}>
                <i className={`bx ${icon}`}></i>
                <p>{title}</p>
            </div>
        );
    } else {
        return (
            <div className="dropdown-link">
                <i className={`bx ${icon}`}></i>
                <p>{title}</p>
            </div>
        );
    }
}
