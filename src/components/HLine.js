export default function HLine({width, height, border_radius, color, margin, opacity}) {
    return (
        <hr 
        
        style={
            {
                width: width,
                height: height,
                borderRadius: border_radius,
                color: color,
                margin: margin,
                opacity: opacity,
            }
        }

        />
    );
}