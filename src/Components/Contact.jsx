import React from "react";

export default function Contact ({colorBG, colorText, colorDynamic}) {

    const initStyle = {
        backgoundColor: colorBG,
        color: colorText,
        margin: 'auto',
        padding: '75px 20px',
        border: `1px solid ${colorDynamic}`
    }

    return(
        <div id="Contact" style={initStyle}>
            <h1>Contact</h1>
        </div>
    )
}