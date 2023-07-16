import React from "react"; 
import { useState } from "react";

function ImagemouseOver({Imagesrc,Hoversrc}){
    const [src,Setsrc] = useState(Imagesrc);
    function mouseIn(){
        Setsrc(Hoversrc)
    }
    function mouseOut(){
        Setsrc(Imagesrc)
    }
    return(
        <div>
            <img src={src} onMouseOver={mouseIn} onMouseOut={mouseOut} />
        </div>
    )
}
export default ImagemouseOver