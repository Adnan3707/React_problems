import React from "react";
import { useContext } from "react";
import { theme } from "../index";
function TestContext(){
    const {color,setColor} = useContext(theme)
  const   handleChnage = () =>{
    console.log(setColor)
    setColor('orange')
    }
    return ( <div> This is printeded using USeContext : -  ^^^ {color} ^^^
    <div>
        <button onClick={handleChnage} >{color}</button>
    </div>
    </div>)

}
export default TestContext