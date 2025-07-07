import { useState , useRef } from 'react'

import Input from '../Input/Input'
import CanvasImageEditor from '../CanvasImageEditor';

import './index.css'
import Button from '../Button';

function BoxContainer () {

  const [dear, setDear] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [buttonClick, setButtonClick] = useState(false)

  const canvasRef = useRef(null);

  return (
    <div className='box-container'>
      <h2>
        Gift Card
      </h2>
      <hr/>
      <CanvasImageEditor
        from={from}
        dear={dear}
        message={message}
        imageFile={imageFile}
        setImageFile={setImageFile}
        canvasRef={canvasRef}
      />
      <Input 
        setter={setDear} 
        value={dear} 
        label={"Dear"}
        maxLength={100}
        imageFile={imageFile}
        buttonClick={buttonClick}
      />
      <Input 
        setter={setMessage} 
        value={message} 
        label={"Messages"}
        maxLength={100}
        imageFile={imageFile}
        buttonClick={buttonClick}

      />
      <Input 
        setter={setFrom} 
        value={from} 
        label={"From"}
        maxLength={100}
        imageFile={imageFile}
        buttonClick={buttonClick}
      />
      <Button
        canvasRef={canvasRef}
        imageFile={imageFile}
        setButtonClick={setButtonClick}
        dear={dear}
        message={message}
        from={from}
      />
    </div>
  )

}

export default BoxContainer