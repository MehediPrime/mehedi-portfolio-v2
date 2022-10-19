import React from "react";
import './css/Education.css';

export default function Education ({colorBG, colorText, colorDynamic}) {

    const initStyle = {
        backgoundColor: colorBG,
        color: colorText,
        margin: 'auto',
        padding: '75px 20px',
    }

    return(
        <div id="Education" style={initStyle}>
            <h1 className="title" style={{color:colorDynamic}}>Education</h1>
            <h2>Academic Backround</h2>
            <div className="educationContainer">
                <div className="educationTypes">
                    <p className="educationYear">2018 - 2022</p>
                    <p className="educationTitle">B.Sc. in Computer Science and Engineering</p>
                    <p className="educationInstitute">Bangladesh University of Business &amp; Technology (BUBT)</p>
                    <p className="educationResult"><strong>Result:</strong> 3.94 out of 4.00</p>
                </div>
                <div className="educationTypes">
                    <p className="educationYear">2017</p>
                    <p className="educationTitle">Higher Secondary Certificate</p>
                    <p className="educationInstitute">Maestro Crown College</p>
                    <p className="educationResult"><strong>Result:</strong> 4.17 out of 5.00</p>
                </div>
                <div className="educationTypes">
                    <p className="educationYear">2015</p>
                    <p className="educationTitle">Secondary School Certificate</p>
                    <p className="educationInstitute">Suapur Nannar High School</p>
                    <p className="educationResult"><strong>Result:</strong> 4.06 out of 5.00</p>
                </div>
            </div>
        </div>
    )
}