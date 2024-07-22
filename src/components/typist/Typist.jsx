import { useState, useEffect } from "react";

const Typist = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrntIndex] = useState(0);

  useEffect(() => {
    let timeOut;
    if(currentIndex <= text.length){
        timeOut = setTimeout(()=>{
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrntIndex(prevIndex => prevIndex + 1);
            
        },delay);

    }
    else{
        setCurrntIndex(0);
        setCurrentText("");
    }

    return ()=>clearTimeout(timeOut);

  }, [delay,currentText,currentIndex]);

  return (
    <>
      <h1>Text Type</h1>
      <span>{currentText}</span>
    </>
  );
};

export default Typist;