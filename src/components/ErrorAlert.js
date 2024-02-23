import "@/styles/alerts.css"

export default function ErrorAlert({children, style}) {
    return (
        <div className="alert error" style={style}>
            {children}
        </div>
    );
}