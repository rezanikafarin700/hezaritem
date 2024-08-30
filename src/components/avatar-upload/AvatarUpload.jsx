import { useState,useEffect } from "react";
import "./avatar-upload.scss";

const AvatarUpload = ({onUpload,title = "عکس پروفایل"}) => {
  const [file, setFile] = useState(null);

  const createObjectUrl = (file) => {
    return URL.createObjectURL(file);
  };
  const handleInput = (e) => {
    let obj = e.target.files[0];
    console.log('file = ',obj);
    setFile(() => obj);
    
  };

  const delImage = () =>{
    setFile(()=> null)
  }

  useEffect(()=>{
    onUpload(file);
  },[file]);

  return (
    <div className="avatar" style={{...file ? {outline : '2px solid #eee'} : {}}}>
      <div className="avatar__ratio"></div>
      <input type="file" title={title} onChange={handleInput} className="avatar__input" />
      {file ? (
        <>
          {" "}
          <img
            onChange={handleInput}
            className="avatar__image"
            src={createObjectUrl(file)}
          />{" "}
          <div className="avatar__overlay">
            <div className="avatar__del-btn" onClick={delImage}></div>
            </div>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default AvatarUpload;
