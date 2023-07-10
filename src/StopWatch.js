import React, { useEffect, useState } from "react";
function Timer(){
    var [running,Setrunning] = useState(true)
    var [seconds,Setseconds] = useState(0);

    useEffect(function(){
        var tick =() => {
            Setseconds(seconds+1)
        }
        if(running){
            const interval = setInterval(tick, 1000);
            return () => clearInterval(interval);
        }
        console.log('hello')
    },[seconds,running])
    function reset(){
    Setseconds(0);
    Setrunning(false)
    }
    function stop(){
        Setrunning(false)
    }
    function Start(){
        Setrunning(true)
    }
    return(
        <div>
            <h1>Timer</h1>
            <span>Time: {seconds}s</span>
            <button onClick={Start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Timer