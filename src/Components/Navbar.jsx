import React from "react";
import './css/Navbar.css';

export default function Navbar ({colorBG, colorText, colorDynamic}) {

    const style = {
        backgroundColor: colorBG,
        color: colorText,
    }
    const hover = (event) =>{
        event.target.style.color = colorDynamic;
        event.target.style.borderBottom = '1px solid '+colorDynamic;
    }
    const hoverNot = (event) =>{
        event.target.style.color = colorText;
        event.target.style.borderBottom = 'none'
    }
    return(
        <nav style={style}>
            <a href="#Home" style={{color:colorText}}>Mehedi</a>
            <ul >
                <li><a href="#Home" onMouseOver={hover} onMouseOut={hoverNot} style={style}>Home</a></li>
                <li><a href="#Skill" onMouseOver={hover} onMouseOut={hoverNot} style={style}>Skills</a></li>
                <li><a href="#Portfolio" onMouseOver={hover} onMouseOut={hoverNot} style={style}>Portfolio</a></li>
                <li><a href="#Education" onMouseOver={hover} onMouseOut={hoverNot} style={style}>Education</a></li>
                <li><a href="#Contact" onMouseOver={hover} onMouseOut={hoverNot} style={style}>Contact</a></li>
            </ul>
        </nav>
    )
}