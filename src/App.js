//import logo from './logo.svg';

import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import React ,{useState} from 'react';
import {
  BrowserRouter as Router,
  
  Route,
  Link,
  Routes
} from "react-router-dom";

import Alert from './components/Alert';
function App() {

  const[mode,setMode] =useState('light');
   const[alert,setAlert]=useState(null);

   const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type   
    })
    setTimeout( ()=>{ setAlert(null);} ,3000);

    
   }

  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","sucess");
      document.title='Textutil-Light';
    

    }else if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#495057';
      showAlert("Dark mode has been enable","sucess");
       document.title='Textutil-Dark';
      setInterval(() => {
        document.title='Textutil is Amazing';
      }, 1000);
      setInterval(() => {
        document.title='Textutil is best';
      }, 19000);



  }
}

  return (
   <Router>
<Navbar  title = {"TextUtils"} about="About Us"  mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />

<div className="container">

<Routes>
          <Route exact path="/about" element={<About />} />
           
          
          
         
          <Route exact path="/" element ={<TextForm showAlert={showAlert} heading=" Enter your Text here"  mode={mode}/>}  />
          
            
         
        </Routes>
 
 {/* <About className="container">

</About>  */}
</div>

</Router>



      );
}


export default App;

