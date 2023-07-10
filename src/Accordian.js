import React, { useState } from 'react';
function Accordian({ description }){
    var [active,Setactive] = useState(-1)
    function showDescription(id){
        Setactive(id)
        console.log(description)
    }
    return (
        <div>
        <ul>
        {description.map((obj) =>
             <li key ={obj.id} onClick={()=>showDescription(obj.id)}> {obj.name} {active === obj.id && <p>{obj.description}</p>}</li>
        )}
        </ul>
        </div>
    )
}
export default Accordian