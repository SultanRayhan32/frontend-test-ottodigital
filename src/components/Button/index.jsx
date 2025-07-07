import { useState } from 'react';

import './index.css'

function Button (props) {

  const { canvasRef , imageFile } = props

  const [errorValidation,setErrorValidation] = useState("")

  const handleDownload = () => {
    if (!imageFile) {
      setErrorValidation("Please Upload file")
      return
    }
    setErrorValidation("")
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "greeting-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className='button-container'>
      <button onClick={handleDownload}>
        Download
      </button>
      {
        errorValidation && 
        <span style={{color:"red",top : 40,position : "absolute",fontSize : 14}}>
          {errorValidation}
        </span>
      }
    </div>
  )

}

export default Button;