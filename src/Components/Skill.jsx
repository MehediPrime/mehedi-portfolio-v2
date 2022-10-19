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
            <h1 className="title" style={{color:colorDynamic}}>Skills</h1>
            <h2>I am good at</h2>
            <div className="skillCards">
                <div className="skillCard">
                    <h3>JavaScript</h3>
                    <p style={{color:"#ead41c"}}><SiJavascript/></p>
                </div>
                <div className="skillCard">
                    <h3>React</h3>
                    <p style={{color:"#61dafb"}}><SiReact/></p>
                </div>
                <div className="skillCard">
                    <h3>Node.js</h3>
                    <p style={{color:"#3e863d"}}><SiNodedotjs/></p>
                </div>
                <div className="skillCard">
                    <h3>HTML</h3>
                    <p style={{color:"#dd4b25"}}><SiHtml5/></p>
                </div>
                <div className="skillCard">
                    <h3>CSS</h3>
                    <p style={{color:"#254bdd"}}><SiCss3/></p>
                </div>
                <div className="skillCard">
                    <h3>Github</h3>
                    <p style={{color:"#790079"}}><SiGithub/></p>
                </div>
            </div>
            <h2>Basic knowledge</h2>
            <div className="skillCards">
                <div className="skillCard">
                    <h3>MongoDB</h3>
                    <p style={{color:"#0fa14c"}}><SiMongodb/></p>
                </div>
                <div className="skillCard">
                    <h3>Java</h3>
                    <p style={{color:"#fe0000"}}><SiJava/></p>
                </div>
                <div className="skillCard">
                    <h3>Python</h3>
                    <p style={{color:"#30699b"}}><SiPython/></p>
                </div>
            </div>
        </div>
    )
}