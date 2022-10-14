import React from "react";

export default function Education ({colorBG, colorText, colorDynamic}) {

    const initStyle = {
        backgoundColor: colorBG,
        color: colorText,
        margin: 'auto',
        padding: '75px 20px',
        border: `1px solid ${colorDynamic}`
    }

    return(
        <div id="Education" style={initStyle}>
            <h1>Education</h1>
        </div>
    )
}