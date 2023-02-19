import React from 'react';

function ColorBox(props) {

    console.log("this is props", props);

    const colorBox = {
        width: `40px`,
        height: "40px",
        backgroundColor: `${props.color}`,
        display: `inline-block`
    }

    return (
        <div>
            <span style={colorBox} ></span>
        </div>
    );
}

export default ColorBox;
