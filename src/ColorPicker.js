import React, { useState } from 'react';
function ColorPicker(){
    let colors = ["red", "green", "blue", "yellow", "purple"];
    let [selectedColor,SetselectedColor] = useState('red')
    function handleColorChange(color){
        console.log(color)
        SetselectedColor(color)
    }
  return (
    <div style={{backgroundColor: selectedColor}} >
      <select onChange={handleColorChange}>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <div style={{backgroundColor: selectedColor}} />
    </div>
  );
};
export default ColorPicker