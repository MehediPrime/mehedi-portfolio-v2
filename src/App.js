import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Skill from './Components/Skill';
import Education from './Components/Education';
import Contact from './Components/Contact';
import ThemeSwitch from './Components/ThemeSwitch';

function App() {
  const [colorBG, setColorBG] = useState("#fff");
  const [colorText, setColorText] = useState("#303134");
  const [colorDynamic, setColorDynamic] = useState("#ff4522");


  const style={
    backgroundColor:colorBG
  }
  return (
    <div className="App" style={style}>
      <ThemeSwitch 
        colorBG={colorBG} setColorBG={setColorBG} 
        colorText={colorText} setColorText={setColorText}
        colorDynamic={colorDynamic} setColorDynamic={setColorDynamic}
      />
      <Navbar colorBG={colorBG} colorText={colorText} colorDynamic={colorDynamic}/>
      <Home colorBG={colorBG} colorText={colorText} colorDynamic={colorDynamic}/>
      <About colorBG={colorBG} colorText={colorText} colorDynamic={colorDynamic}/>
      <Skill colorBG={colorBG} colorText={colorText} colorDynamic={colorDynamic}/>
      <Portfolio colorBG={colorBG} colorText={colorText} colorDynamic={colorDynamic}/>
      <Education colorBG={colorBG} colorText={colorText} colorDynamic={colorDynamic}/>
      <Contact colorBG={colorBG} colorText={colorText} colorDynamic={colorDynamic}/>
    </div>
  );
}

export default App;
