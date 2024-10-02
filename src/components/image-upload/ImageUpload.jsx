import { useState, useEffect } from "react";
import ImageUploadSvg from "./ImageUploadSvg";
import "./image-upload.scss";

const ImageUpload = ({ onUpload, PreviousPhotos = [] }) => {
  const [files, setFiles] = useState([]);
  const [isPreviousPhotos, setIsPreviousPhotos] = useState(true);

  const createObjectUrl = (file) => {
    return URL.createObjectURL(file);
  };

  const handleInput = (e) => {
    let obj = e.target.files;
    setFiles((f) => [...f, ...obj]);
    console.log("files = ", files);
  };


  const merge = () => {
    if (PreviousPhotos.length > 0) {
      PreviousPhotos.map((pp) => {
        const blob = new Blob([pp.address]);
        const file = new File([blob], pp.address, {
          type: "image/jpeg",
        });
        file.old = true;
        setFiles((f) => [...f, file]);
        console.log("file name = ", file);
      });
    }
    setIsPreviousPhotos(false);
  };

  useEffect(() => {
    if (isPreviousPhotos) {
      merge();
    }
  }, []);

  useEffect(() => {
    onUpload(files);
    console.log("AA files = ", files);
  }, [files]);

  return (
    <div className="upload">
      <div className="upload__multi-image">
        {files.map((file, index) => {
          return (
            <div className="upload__image" key={index}>
              {console.log(
                index,
                " : createObjectUrl = ",
                createObjectUrl(file)
              )}
              <img src={file.old ? file.name : createObjectUrl(file)} />
              <div className="upload__overlay">
                <div
                  className="upload__del-btn"
                  onClick={() =>
                    setFiles(() =>
                      files.filter((f, i) => {
                        if (index != i) {
                          return f;
                        }
                      })
                    )
                  }
                ></div>
              </div>
            </div>
          );
        })}

        <div className="upload__con-input">
          <input
            type="file"
            multiple
            className="upload__input"
            onChange={handleInput}
          />
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
