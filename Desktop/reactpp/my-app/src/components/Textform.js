import PropTypes from 'prop-types'
import React,{useState} from 'react'
//use
export default function textform(props) {
  const[text,setText]=useState("enter text here now");
  const handleUpClick=()=>{
    console.log("uppercase was clicked..."+text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase","Success");
        
      }
      const handleOnChange=(event)=>{
        console.log("handle on change..");
        setText(event.target.value);
      }
      const handlelowclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted To LowerCase","Success");
      }
      const funcClear=()=>{
        let newtext='';
        setText(newtext);
        props.showAlert("Text cleared","Success");

      }
      // text="new text"   ///wrong way to change the text...
      // setText("new text"); // correct way to change the text..
      return (
        <>

        <div className='container1'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}   style={{backgroundColor:(props.mode==='light'?'grey':'white')}} ></textarea>
            </div>
            <button className="btn btn-primary mx1" onClick={handleUpClick} alert={alert}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelowclick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={funcClear}>Clear Text</button>

         </div>
         <div className="summary">
            <h1>this is your summary </h1>
            <p>Total Characters :{text.length}</p>
            <p>{0.008*text.split("").length} Minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
         </div>

      </>

  )
}
