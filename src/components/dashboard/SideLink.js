export default function SideLink({onClick, title, icon}) {
    if(onClick) {
        return (
            <div className="side-link" onClick={(event) => {
                event.preventDefault();
                onClick();
            }}>
                <i className={`bx ${icon}`}></i>
                <p>{title}</p>
            </div>
        );
    } else {
        return (
            <div className="side-link">
                <i className={`bx ${icon}`}></i>
                <p>{title}</p>
            </div>
        );
    }
}
