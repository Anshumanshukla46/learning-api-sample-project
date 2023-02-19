import React from "react";
import ColorBox from "./ColorBox";


export default function Color(props) {
    console.log(props.num + " " + props.color + " " + props.name)

    return (
        <div>
            {props.num} {props.name}

            <ColorBox
                color={props.color}
            />

        </div>
    )
}