import { useRef } from 'react';
import { FaCloudArrowUp } from "react-icons/fa6";
import './index.css'; 

const InputFile = ({  handleImageUpload , InputFile }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="custom-file-input-container">

      <div className='custom-button'>

        <span className='custom-label-file'>File Upload</span>
        <button className="custom-file-upload-button" onClick={handleClick}>
          <FaCloudArrowUp color='#B4B9C7' fontSize={30} style={{marginTop : 20}}/>
          <span className='custom-choose-file'>
            Browse File
          </span>
            <span className='custom-tutorial-file'>
              Drag and drop files here
            </span>
        </button>

      </div>

      <input
        type="file"
        accept="image/*"
        ref={hiddenFileInput}
        onChange={handleImageUpload}
        style={{ display: 'none' }} 
      />

    </div>
  );
};

export default InputFile;