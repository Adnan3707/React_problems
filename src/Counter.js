import React, { useState } from "react";
function Counter(){
           var [count,Setcount] = useState(0)
    var increment = () =>{
        Setcount(count + 1)
    }
    var decrement = () =>{
        Setcount(count - 1)
    }
    return(
        <div>
            <span>count: {count}</span>
            {    [<button onClick={increment}>Add </button>,
    <button onClick={decrement} >Sub </button>]}
        </div>
    );
}
export default Counter