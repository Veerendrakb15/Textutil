// import logo from './logo.svg';
// import React ,{useState, useSyncExternalStore} from 'react';
import './App.css';
import React,{useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode,setmode]=useState('light');
  // const [AAlert,setAlert]=useState(null)

  // const showAlert=(message,type)=>{
  //     setAlert({
  //       msg:message,
  //       type:type 
  //     })
  // }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      // showAlert("dark mode has be enable","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      // showAlert('light mode has be enable','success')
    }

    }

  return (
   <>
      {/* <Alert AAlert="this is an erlert"/> */}
   
     
      {/* <Router> */}
      <Navbar title="textutil" aboutText="about Textutil" mode={mode} togglemode={togglemode} />
      {/* <Routes> */}
        {/* /user/-->component 1
        /user/home/-->component 2 */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/" element={ */}
          <div className='container'>
            <TextForm heading='Enter the text' mode={mode} />
          </div>
        {/* } /> */}
      {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}



export default App;
