import { useState } from "react";

function Drag(){
    const [cordinates,Setcordinates] = useState({x:0,y:0})
    const handleDrage = (event) =>{
        const {clientX,clientY} = event ;
        Setcordinates({x:clientX,y:clientY})
    }
    // return(
    // <div
    //   onDrag={handleDrage}
    //   style={{
    //     position: "absolute",
    //     left: cordinates.x,
    //     top: cordinates.y,
    //   }}
    // >
    //   This is a draggable component.
    // </div>
    // )
}
export default Drag