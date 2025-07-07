import { useRef, useEffect } from 'react'
import InputFile from '../InputFile'
import './index.css'

function CanvasImageEditor (props) {

  const {
    dear,
    message,
    from,
    imageFile, 
    setImageFile, 
    canvasRef
  } = props

  const imageRef = useRef(280);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(URL.createObjectURL(file));
    }
  };

  function drawMultilineText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    let currentY = y;
    let linesUsed = 0;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const testWidth = ctx.measureText(testLine).width;

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + " ";
        currentY += lineHeight;
        linesUsed++;
      } else {
        line = testLine;
      }
    }

    ctx.fillText(line, x, currentY);
    linesUsed++;

    return linesUsed; 
  }

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = imageRef.current;

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.save();
    ctx.drawImage(image, 0, 0);

    const bgImg = new Image();
    bgImg.src =  "/bg.jpeg";
    bgImg.onload = ()=> {

      const objectSize = { label: "Medium (350x120)", x: 120, y: 180, width: 380, height: 240 }
      const { x, y, width, height } = objectSize;

      const pattern = ctx.createPattern(bgImg, "repeat");
      ctx.fillStyle = pattern;

      ctx.fillRect(x, y, width, height);
  
      ctx.fillStyle = "#5b3714";
      ctx.font = "20px 'Segoe Script', cursive";
  
      let msgY = 280;
      let fromY = 310;
  
      const dearLines = drawMultilineText(ctx, `Dear, ${dear}`, 90, 250, 300, 28);
      msgY += dearLines * 28;
  
      const messageLines = drawMultilineText(ctx, message, 90, msgY, 300, 28);
      fromY = msgY + messageLines * 28;
  
      drawMultilineText(ctx, `From, ${from}`, 90, fromY, 300, 28);

    }
    ctx.restore();
  };

  useEffect(()=>{
    if (from!==""||dear!==""||message!=="") {
      if (imageFile) {
        drawCanvas()
      }
    }
  },[from,dear,message,imageFile])

  return (
    <div style={{width : "100%",display : "flex",flexDirection : "column"}}>
      {imageFile && (
        <>
          <img
            ref={imageRef}
            src={imageFile}
            alt="Uploaded"
            onLoad={drawCanvas}
            style={{ display: "none"  }}
          />
          <canvas data-testid="canvas" className='canvas-container' ref={canvasRef} style={{ marginTop: 20 }}></canvas>
        </>
      )}
      <InputFile 
        handleImageUpload={handleImageUpload} 
        imageFile={imageFile}
      />

    </div>
  )

}

export default CanvasImageEditor