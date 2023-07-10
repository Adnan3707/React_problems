import React, { useState } from "react";
function Toggle(){
    var [Switch,SetSwitch] =  useState(false);
    function Change(){
        Switch  ? SetSwitch(false) : SetSwitch(true )
    }
    return(
        <div>
            <button onClick={Change}>{Switch ? 'on' : 'off'}</button>
        </div>
          )
}
export default Toggle