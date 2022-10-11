import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState("light");
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#151a45'
      showAlert('Dark Mode enabled','success')
      // document.body.style.color='white'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light Mode enabled','success')
      // document.body.style.color='black'
    }
  }
   const [alert, setAlert] = useState(null)
   const showAlert = (message,type) =>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null)
     }, 2000);
   }
  return (
    <>
     {/* <Router>
    <Navbar title="Heyaaa" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <div className='container'>
      
   
    <Routes>
          <Route path="/about">
          <About mode={mode}/>
          </Route>
          <Route path="/">
          <TextForm title="Enter your text" mode={mode} showAlert={showAlert}/>
          </Route>
    </Routes>
    </div>
    </Router> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <div className='container my-5'>
        <Routes>
          <Route exact path="/about" element={ <About mode={mode}/>}/>
          <Route exact path="/" element={ <TextForm title="Enter your text" mode={mode} showAlert={showAlert}/>}/>
         
        </Routes>
    </div>
    </Router>
    </>
   
  );
}

export default App;
