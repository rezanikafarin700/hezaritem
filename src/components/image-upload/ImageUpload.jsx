import { useState } from "react";
import ImageUploadSvg from "./ImageUploadSvg";
import "./image-upload.scss";

const ImageUpload = () => {
  const [files, setFiles] = useState([]);

  const createObjectUrl = (file) => {
    return URL.createObjectURL(file);
  };

  const handleInput = (e) => {
    let obj = e.target.files;
    setFiles((f) => [...f, ...obj]);
    console.log("files = ", files);
  };

  return (
    <div className="upload">
      {console.log("files.length = ", files.length)}
      <div className="upload__multi-image">
        {files.map((file, index) => {
          return (
            <div className="upload__image"  key={index} >
            <img src={createObjectUrl(file)} /> 
            <div className="upload__overlay">
            <div
              className="upload__del-btn"
              onClick={() => setFiles(() => files.filter((f,i) => {if (index != i ){return f}}))}
            ></div>
           </div>
          </div>
          );
        })}

      <div className="upload__con-input">
        <input  type="file" multiple className="upload__input" onChange={handleInput}  />
        <div className="upload__btn-input">
          <ImageUploadSvg />
        </div>
        <div className="upload__con-input--ratio"></div>
      </div>
    </div>
    </div>

  );
};

export default ImageUpload;
