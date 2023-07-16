import React, { useState } from "react";

const Dropdown = ({ options, selectedOption }) => {
  const [currentOption, setCurrentOption] = useState(selectedOption);

  const handleChange = (event) => {
    setCurrentOption(event.target.value);
    console.log(currentOption)
  };

  const renderOptions = () => {
    return options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };
  const dragFunction = (event)=>{
    console.log(event)
  }
  return (
    <><div>
          <select onChange={handleChange} value={currentOption}>
              {renderOptions()}
          </select>
      </div><div draggable 
          onDrag={dragFunction}
          style={{
              position: "absolute",
          }}>
              This is a draggable component.
          </div></>
  );
};

export default Dropdown;
