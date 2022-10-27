import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import './css/Home.css';

export default function Home ({colorBG, colorText, colorDynamic}) {
    const hover = (event) =>{
        event.target.style.color = colorDynamic;
        event.target.style.fontSize = "18px";
    }
    const hoverNot = (event) =>{
        event.target.style.color = colorText;
        event.target.style.fontSize = "16px";
    }
    const style = {
        color:colorText,
        backgroundColor: colorBG,
    }
    const styleBGDynamic = {
        backgroundColor: colorDynamic
    }
    return(
        <div id="Home" style={style}>
            <div className="homeContainer">
                <div className="left">
                    <h1 className="title" style={{color:colorDynamic}}>S M Mehedi</h1>
                    <h2>Front-end web developer in Bangladesh</h2>
                    <a href="#Contact" style={{color:colorText}} className="talk"  onMouseOver={hover} onMouseOut={hoverNot}>
                        <BsArrowReturnRight style={{verticalAlign:"middle"}}/> &nbsp; Let's talk
                    </a><br />
                    <a href="#About" style={{color:colorText}} className="talk"  onMouseOver={hover} onMouseOut={hoverNot}>
                        <BsArrowReturnRight style={{verticalAlign:"middle"}}/> &nbsp; Explore me !
                    </a>
                </div>
                <div className="right">
                    <div className="cardOne" style={styleBGDynamic}></div>
                    <div className="cardTwo"></div>
                </div>
            </div>
        </div>
    )
}