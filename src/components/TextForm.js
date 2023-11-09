import React,{ useState } from 'react';


export default function TextForm(props) {
 
    const handleupclick=()=>{
        console.log("it uppercase hyrayy"+text)
        let newText=text.toUpperCase();
        settext(newText)
    }

    const handleloclick=()=>{
      let newText=text.toLowerCase();
      settext(newText)
    }

    const handleonchange=(event)=>{
      console.log("it onchange hyrayy")
      settext(event.target.value)
  }

  const handleclear=()=>
  {
    settext("")
  }
    const [text, settext] = useState('enter text here');
  return (
    <>
<div className="container"style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
    <textarea className="form-control" value={text} id="mybox" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} onChange={handleonchange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloclick}>convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleclear}>clear</button>


</div>

<div className="container my-3"style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h1>Text summary</h1>
  <p>{text.split(" ").length} words {text.length} characters</p>
  <p>{0.008*text.split(" ").length} Minuts read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"enter in text box to preview it here"}</p>
</div>
</>
  )
}
