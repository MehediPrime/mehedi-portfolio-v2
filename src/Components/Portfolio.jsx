import React from "react";

export default function Portfolio ({colorBG, colorText, colorDynamic}) {

    const initStyle = {
        backgoundColor: colorBG,
        color: colorText,
        margin: 'auto',
        padding: '75px 20px',
        border: `1px solid ${colorDynamic}`
    }

    return(
        <div id="Portfolio" style={initStyle}>
            <h1>Portfolio</h1>
        </div>
    )
}