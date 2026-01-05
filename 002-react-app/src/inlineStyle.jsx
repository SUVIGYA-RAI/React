function InlineStyledBox() {
    const boxStyle = {
        backgroundColor : 'lightblue',
        color : 'yellow',
        padding : '16px',
        borderRadius : '8px',
        textAlign : 'center',
    };

    return (
        <div style={boxStyle}>
            <h3>Inline Styling</h3>
            <p>This uses Inline Style</p>
        </div>
    )
}

export default InlineStyledBox;