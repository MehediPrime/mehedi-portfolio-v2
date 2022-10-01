import React, { useState } from "react";
import './css/ThemeSwitch.css';
import { FaSun, FaCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

export default function ThemeSwitch ({colorBG, setColorBG, colorText, setColorText, colorDynamic, setColorDynamic}) {
    const[light, setLight] = useState(true);
    const[setting, setSetting] = useState(false);
    const themeChange = () =>{
        setLight(!light);
        setColorBG(colorBG === "#fff" ? "#303134" : "#fff");
        setColorText(colorText === "#303134" ? "#fff" : "#303134")
    }
    const colorChange = (value) =>{
        setColorDynamic(value)
    }
    const settingAppear = () =>{
        setSetting(!setting);
        console.log(setting)
    }
    const style = {
        color: colorText,
        backgroundColor: "transparent",
        border: "1px solid "+colorText,
        right: "0px",
        transition: "0.5s"
    }
    const styleTwo = {
        color: colorText,
        marginTop: "-11px",
        backgroundColor: "transparent",
        border: "1px solid "+colorText,
        right: "71px",
        animation: "none",
        fontSize: "30px",
        transition: "0.5s"
    }

    const styleNone = {
        color: colorText,
        transition: "0.7s"
    }

    return(
        <div className="setting" style={setting ? style : styleNone }>
            <button className="settingBtn" style={setting ? styleTwo : styleNone } onClick={()=>settingAppear()}><AiFillSetting/></button>
            <div className="colorChange" >
                <button className="colorChangeBtn" onClick={()=>colorChange("#ff4522")} style={{color:"#ff4522"}}> <FaCircle/> </button>
                <button className="colorChangeBtn" onClick={()=>colorChange("#66b95c")} style={{color:"#66b95c"}}> <FaCircle/> </button>
                <button className="colorChangeBtn" onClick={()=>colorChange("#00d4bd")} style={{color:"#00d4bd"}}> <FaCircle/> </button>
                <button className="colorChangeBtn" onClick={()=>colorChange("#fe0000")} style={{color:"#fe0000"}}> <FaCircle/> </button>
            </div>
            <button className="themeChangeBtn" onClick={themeChange} style={style} > <FaSun/> </button>
        </div>
    )
}