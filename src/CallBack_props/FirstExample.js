import React, { useState } from "react"
function FirstExample({onSubmit}){
    var [variable,Setvariable] = useState()
  const  saveInput = (event) =>{
        Setvariable(event.target.value)
    }
 return(
    <div>This IS call Back Example in react
        <form onSubmit={onSubmit(variable)}>
        <input value={variable} onChange={saveInput}/>
        </form>
    </div>
 )
}
export default FirstExample