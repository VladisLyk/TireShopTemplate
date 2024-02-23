export default function InfoText({title, value, hasBolder, width}) {
    return (
        <div className={`info-text`} style={{width: width}}>
            <p className={`info-text-title ${hasBolder ? "text-bold" : ""}`}>{title}:</p>
            <p className={`info-text-value ${hasBolder ? "text-bolder" : ""}`}>{value}</p>
        </div>
    );
}