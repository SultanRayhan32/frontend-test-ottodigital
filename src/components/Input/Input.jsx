import { useEffect, useState } from 'react';
import './input.css'

function Input (props) {

  const {label,setter,value,maxLength,buttonClick} = props

  const [errorMessage,setErrorMessage] = useState("")

  const handleChange = (e) => {
    const input = e.target.value;

    const limitedWords = input
      .split(" ")
      .map((word) => (word.length > 20 ? word.slice(0, 20) : word));
    setter(limitedWords.join(" "));
    if (value.length === maxLength) setErrorMessage("Maksimal Limit Teks adalah " + maxLength + " kata")
  };

  useEffect(()=>{
    if (buttonClick && value === "") {
      setErrorMessage(`Harap isi form ${label} ini`)
    }else if (buttonClick && value !== "") {
      setErrorMessage("")
    } 
  },[buttonClick,value])

  return (
    <div className="input-container">
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        style={{border : errorMessage === "" ? null : "1px solid red" , outline : errorMessage === "" ? null : "1px solid red"}}
      />
      {
        errorMessage !== "" &&
        <span style={{color : "red",marginTop : -2,fontSize : 14}}>
          {errorMessage}
        </span>
      }
      
    </div>
  )

}

export default Input;