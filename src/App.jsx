import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
import Container from 'react-bootstrap/esm/Container';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';
import { useState } from 'react';

import Alertcom from './component/Alertcom';


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null,null);

  const showAlert =(message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }


  const togglemode = ()=>{
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled" , "success");
    }else{
      setmode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black";
      showAlert("Dark mode has been disabled" , "success");
    }
  }
  return (
    <BrowserRouter>
        <NavBar title="TextUtils" mode={mode} togglemode={togglemode}/>
        <Alertcom alert={alert} />
      <Container>
        <Routes>
          <Route path='/' element={<TextForm mode={mode} />}/>
          <Route path='/about' element={<About mode={mode} />}/>          
        </Routes>
        
      </Container>
    </BrowserRouter>
  )
}

export default App
