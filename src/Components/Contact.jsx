import React from "react";
import './css/Contact.css';
import {FaGithubSquare, FaFacebookSquare, FaLinkedin} from "react-icons/fa";

export default function Contact ({colorBG, colorText, colorDynamic}) {

    const initStyle = {
        backgoundColor: colorBG,
        color: colorText,
        marginTop: '40px',
        paddingTop: '75px',
        paddingBottom: '100px'
    }
    const style = {
        color: colorText,
        backgoundColor: colorBG
    }
    const hover = (event) => {
        event.target.style.backgroundColor= colorDynamic;
        event.target.style.borderColor = colorText;
        event.target.style.color = colorBG;
    }
    const notHover = (event) => {
        event.target.style.backgroundColor= "transparent";
        event.target.style.color = colorText;
    }

    return(
        <div id="Contact" style={initStyle}>
            <h1 className="title" style={{color:colorDynamic}}>Contact</h1>
            <h2>Love to hear from you!</h2>
            <div className="contactContainer">
                <div className="contactLeft">
                    <span>
                        <h3>Name</h3>
                        <p>S M Mehedi</p>
                    </span>
                    <span>
                        <h3>Email</h3>
                        <p>s.mehedi2022@gmail.com</p>
                    </span>
                    <span>
                        <h3>Phone</h3>
                        <p>+880-1891-788997</p>
                    </span>
                   <span>
                        <h3>Address</h3>
                        <p>North Dendabor, Ashulia, Savar, Dhaka, Bangladesh</p>
                   </span>
                </div>
                <div className="contactRight">
                    <h3>Find me on the internet.</h3>
                    <div className="socialLinks">    
                        <div className="socialLink" >
                            <FaFacebookSquare style={{fontSize: "30px", verticalAlign:"middle", marginRight:"10px", backgroundColor:"transparent"}}/>
                            <a style={style} onMouseOver={hover} onMouseOut={notHover} href="https://www.facebook.com/mehedi.primes/" target="_blank" rel="noreferrer" style={style}>Facebook</a>
                        </div>
                        <div className="socialLink" >
                            <FaGithubSquare style={{fontSize: "30px", verticalAlign:"middle", marginRight:"10px", backgroundColor:"transparent"}}/>
                            <a onMouseOver={hover} onMouseOut={notHover} href="https://www.facebook.com/mehedi.primes/" target="_blank" rel="noreferrer" style={style}>Facebook</a>
                        </div>
                        <div className="socialLink" >
                            <FaLinkedin style={{fontSize: "30px", verticalAlign:"middle", marginRight:"10px", backgroundColor:"transparent"}}/>
                            <a onMouseOver={hover} onMouseOut={notHover} href="https://www.facebook.com/mehedi.primes/" target="_blank" rel="noreferrer" style={style}>Facebook</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}