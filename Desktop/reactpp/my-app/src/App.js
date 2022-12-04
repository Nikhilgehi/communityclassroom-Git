import { useState } from 'react';
import Alert from './components/Alert';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import  Textform from "./components/Textform";
import React from "react";

function App() {

  const[mode,setDarkMode]=useState('light')// whehter dark mode is enabled or not..
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const toggleMode=()=>{
    if (mode==='dark') {
      setDarkMode('light');
      document.body.style.backgroundColor='grey';
      showAlert("Light mode has been enabled","success");
    }
    else{

      setDarkMode('dark');
      document.body.style.backgroundColor='white';
      showAlert("Dark mode has been enabled","success");
    }
  }
  return (
    <>
    
<Navbar title="NikUtils"  about="about this"  mode={mode} toggleMode={toggleMode}/>
              <Alert alert={alert}/>
          <div className="container my-3">
                   
                            <Textform heading="Enter the text to Analyze below " mode={mode} showAlert={showAlert}/>
                    
                
        
          
          </div>
    </>
          
  );
}

export default App;
