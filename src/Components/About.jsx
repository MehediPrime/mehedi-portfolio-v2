import React from "react";
import './css/About.css'

export default function About ({colorBG, colorText, colorDynamic}) {

    const initStyle = {
        backgoundColor: colorBG,
        color: colorText,
        margin: '40px auto',
        paddingTop: '75px'
    }

    return(
        <div id="About" style={initStyle}>
            <h1 className="title" style={{color:colorDynamic}}>About me</h1>
            <div className="aboutContainer">
                <div className="leftPart">
                    <div className="leftPicture" >
                    </div>
                </div>
                <div className="rightPart">
                    <h1>Hello!</h1>
                    <p> I am S M Mehedi, a front-end web developer from Bangladesh. I have deep understanding of the technologies and the processes required for realising a successful web project from A to Z. I'm ready and eager to work to create something simple and unique. </p>
                    <div className="aboutContact">
                        <p><strong>Email:</strong> s.mehedi2022@gmail.com</p>
                        <p><strong>Location:</strong> Dhaka, Bangladesh.</p>
                        <p><strong>Education:</strong> B.Sc in C.S.E.</p>
                    </div>
                    <div className="aboutButton">
                        <a style={{color:colorDynamic}} href="#Portfolio">See my work!</a>
                        <button style={{backgroundColor:colorDynamic, color:colorBG}} onClick={()=>alert("Under Construction")}>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}