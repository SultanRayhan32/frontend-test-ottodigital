import { useState } from 'react';

import './index.css'

function Button (props) {

  const { 
    canvasRef , 
    imageFile , 
    setButtonClick,
    dear,
    message,
    from,
  } = props

  const [errorValidation,setErrorValidation] = useState("")

  const handleDownload = () => {
    setButtonClick(true)
    if (dear==""||message===""||from==="") {
      setErrorValidation("Harap Isi Semua Form")
      return
    }
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
        <span style={{color:"red",fontSize : 14}}>
          {errorValidation}
        </span>
      }
    </div>
  )

}

export default Button;