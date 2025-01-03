import React ,{useState} from 'react'

export default function TextForm(props) {

  const [text, setText]=useState("Enter your text here");



  
  const handleUpChange =() =>{
    console.log("Upper Case Was Clicked" + text);
    let newtext=text.toUpperCase();
    props.showAlert("Converted to uppercase","Success")
  
setText(newtext);
  }

  const handleLoChange =() =>{
    console.log("Lower Case Was Clicked" + text);
    let newtext=text.toLowerCase();
    props.showAlert("Converted to lowercase","Success")
  
setText(newtext);
  }

  const handleOnChange =(event) =>{
    console.log("On Change")
    setText(event.target.value);
  }

  const clearTheBox =()=>{
    let text="";
    setText(text);
  }
  return (

    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      
<h1> {props.heading }</h1>
     
<div className="mb-3">
 
  <textarea className="form-control" id="mybox" rows="8"  style={{backgroundColor:props.mode==='dark'?'#6c757d':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpChange}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoChange}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={clearTheBox}>Clear</button>


    </div>
    <div className="container -my 35"style={{color:props.mode==='dark'?'white':'black'}}  >
  <h1>Your Text Summary </h1>
  Total number of words is {text.split(" ").length} and character is {text.length} 
</div>

<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
  <p>
    Time needed to count is { 0.08*text.split(" ").length} minutes.
  </p>
  <h2>Preview</h2>
  {text}
</div> 


</>


  )
}
