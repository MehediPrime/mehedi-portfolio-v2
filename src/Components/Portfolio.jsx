import React, { useState } from "react";
import './css/Portfolio.css';
import sample from '../img/sample.jpg';

export default function Portfolio ({colorBG, colorText, colorDynamic}) {

    const workList = [
        {
            image: sample,
            title: "ABC Management System",
            technologyUsed: 'React, Github',
            link: 'https://www.facebook.com/'
        },
        {
            image: sample,
            title: "ABC Management System",
            technologyUsed: 'React, Node, Github',
            link: 'https://www.facebook.com/'
        },
        {
            image: sample,
            title: "ABC Management System",
            technologyUsed: 'React, Node, MongoDB, Github',
            link: 'https://www.facebook.com/'
        },
        {
            image: sample,
            title: "ABC Management System",
            technologyUsed: 'React, Node, MongoDB',
            link: 'https://www.facebook.com/'
        }
    ]

    const initStyle = {
        backgoundColor: colorBG,
        color: colorText,
        margin: '40px auto',
        paddingTop: '75px'
    }

    return(
        <div id="Portfolio" style={initStyle}>
            <h1 className="title" style={{color:colorDynamic}}>Portfolio</h1>
            <h2>Selected Works</h2>
            <div >
                Under Construction
            </div>
        </div>
    )
}