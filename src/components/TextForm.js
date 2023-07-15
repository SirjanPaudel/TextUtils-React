//React's function based component
import React, { useState } from "react";

export default function TextForm(props) {
    const [formText, setFromData] = useState("Replace with your text");
    const handleUpClick = () => {
        if(formText!=="")
        {

            setFromData(formText.toUpperCase())
            props.showAlert("success","Text is successfully converted to uppercase")
        }
        else{
            props.showAlert("Rejected","Enter the value")
            
        }
    };
    const handleLoClick = () => {
        if(formText!==""){

            setFromData(formText.toLowerCase())
            props.showAlert("success","Text is successfully converted to lowercase")
        }
        else{
            props.showAlert("Rejected","Enter the value")
            
        }
        
    };
    const handleOnChange = (event) => {
        setFromData(event.target.value)
    };
    const handleClear = () =>
    {
        if(formText!==""){
            setFromData('')
            props.showAlert("success","Text is successfully cleared")
        }
        
    }
    const handleCopy = () =>
    {
        if(formText!==""){

            let copyText = document.getElementById('myBox') ; 
            copyText.select();
            navigator.clipboard.writeText(copyText.value)
            props.showAlert("success","Text is successfully copied to clipboard")
        }
        else{
            props.showAlert("Rejected","Enter the value")
            
        }
        
    }
    const handleSpaces = () =>
    {
        if(formText!==""){
            let spaceText = formText.split(/[ ]+/)
            setFromData(spaceText.join(" "))
            props.showAlert("success","Extra spaces are successfully cleared")
        }
        else{
            props.showAlert("Rejected","Enter the value")
            
        }
    }
    
    
    
    
    return (
        <>

            <h1>{props.EnterText}</h1>

            <div className="mb-5">
                <textarea rows={8} className={`form-control rows=8 mb-3 bg-${props.mode==='dark'?"dark":'light' } text-${props.mode==='dark'?"light":'dark'}`} id="myBox" value={formText} onChange={handleOnChange}></textarea>
                <div className="container">
                <button type="button" className="btn btn-primary" onClick={handleUpClick}>{props.btnOfForm}</button>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>{props.btnOfForm2}</button>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleClear}>{props.btnOfForm3}</button>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleCopy}>{props.btnOfForm4}</button>
                <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleSpaces}>{props.btnOfForm5}</button>
            </div>
            </div>
            <div>
                <h1>Your data</h1>
                <p>{formText}</p>
                <h2>Your Word Count is <span>{formText.split(" ").filter((element)=>{return element.length !==0}).length}</span> and the characters count is {formText.length}</h2>
            </div>
        </>
    );
}
