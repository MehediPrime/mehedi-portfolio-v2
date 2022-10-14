import React from "react";
import './css/Skill.css';
import { SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiGithub, SiMongodb, SiJava, SiPython } from "react-icons/si";



export default function Skill ({colorBG, colorText, colorDynamic}) {

    const initStyle = {
        backgoundColor: colorBG,
        color: colorText,
        margin: 'auto',
        padding: '75px 20px'
    }

    return(
        <div id="Skill" style={initStyle}>
            <span className="title" style={{color:colorDynamic}}>Skills</span>
            <h1>I am good at</h1>
            <div className="skillCards">
                <div className="skillCard">
                    <h2>JavaScript</h2>
                    <p style={{color:"#ead41c"}}><SiJavascript/></p>
                </div>
                <div className="skillCard">
                    <h2>React</h2>
                    <p style={{color:"#61dafb"}}><SiReact/></p>
                </div>
                <div className="skillCard">
                    <h2>Node.js</h2>
                    <p style={{color:"#3e863d"}}><SiNodedotjs/></p>
                </div>
                <div className="skillCard">
                    <h2>HTML</h2>
                    <p style={{color:"#dd4b25"}}><SiHtml5/></p>
                </div>
                <div className="skillCard">
                    <h2>CSS</h2>
                    <p style={{color:"#254bdd"}}><SiCss3/></p>
                </div>
                <div className="skillCard">
                    <h2>Github</h2>
                    <p style={{color:"#790079"}}><SiGithub/></p>
                </div>
            </div>
            <h1>Basic knowledge</h1>
            <div className="skillCards">
                <div className="skillCard">
                    <h2>MongoDB</h2>
                    <p style={{color:"#0fa14c"}}><SiMongodb/></p>
                </div>
                <div className="skillCard">
                    <h2>Java</h2>
                    <p style={{color:"#fe0000"}}><SiJava/></p>
                </div>
                <div className="skillCard">
                    <h2>Python</h2>
                    <p style={{color:"#30699b"}}><SiPython/></p>
                </div>
            </div>
        </div>
    )
}