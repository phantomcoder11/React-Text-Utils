import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
     
    <Navbar title="Heyaaa"/>
    <div className='container'>
      <About/>
    <TextForm title="Enter your text"/>
    </div>
   
    </>
   
  );
}

export default App;
