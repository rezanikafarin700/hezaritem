import React from "react";
import "./create-elements-data.scss";

const CreateElementsData = ({ elements, fields, classElements, data }) => {
  const func = () => {
    console.log('ddd =',data)
    if (data) {
    return   elements.map((element, index) => {
        React.createElement(
          element,
          { className: classElements[index] },
          data[fields[index]]
        );
      });
    }
  };

  return <>{func()}{console.log('output = ',func())}</>;
};

export default CreateElementsData;
