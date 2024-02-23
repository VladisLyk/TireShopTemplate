import "@/styles/alerts.css"

export default function WarningAlert({children, style}) {
    return (
        <div className="alert warning" style={style}>
            {children}
        </div>
    );
}