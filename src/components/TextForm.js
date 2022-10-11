import React,{useState} from "react";

export default function TextForm(props) {
    const [text,setText] = useState("Enter Text Here");
    const changeUpperCase = () =>{
      let x=text.toUpperCase();
      setText(x);
      props.showAlert("Updated to Upper Case","success")
    }
    const changeLowerCase = () =>{
        let x=text.toLowerCase();
        setText(x);
        props.showAlert("Updated to Lower Case","success")
      }
    const handleOnChange = (event)=>{
        //console.log("onChange");
        setText(event.target.value);
    }
    const copyText = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","warning")
    }
    const clearText = () =>{
      setText("");
      props.showAlert("Text Cleared","danger")
    }
    const removeExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Space Removed","success")
    }
  return (
    <>
    <div className="container"    style={{backgroundColor: props.mode==='dark'?'#151a45':'white',color: props.mode==='light'?'black':'white'}}>
     
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
         <h1>{props.title}</h1> 
        </label>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          rows="8"
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'#151a45':'white',color: props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>
     <button className="btn btn-primary mx-1" onClick={changeUpperCase} >Convert to Upper Case</button>
     <button className="btn btn-primary mx-1" onClick={changeLowerCase} >Convert to Lower Case</button>
     <button className="btn btn-primary mx-1" onClick={copyText} >Copy Text</button>
     <button className="btn btn-primary mx-1" onClick={clearText} >Clear Text</button>
     <button className="btn btn-primary mx-1" onClick={removeExtraSpace} >Remove Extra Space</button>
    </div>
    <div className="container" class="my-4" style={{backgroundColor: props.mode==='dark'?'#151a45':'white',color: props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>Your Para has {text.split(" ").length} words and {text.length} characters</p>
        <p>You can read the para in {0.008 * text.split(" ").length} minutes</p>
    </div>
    </>
  );
}
