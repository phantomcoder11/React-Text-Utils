import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
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
     
    <Navbar title="Heyaaa" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <div className='container'>
      <About mode={mode}/>
    <TextForm title="Enter your text" mode={mode} showAlert={showAlert}/>
   
    </div>
   
    </>
   
  );
}

export default App;
