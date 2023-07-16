import React from "react"
import  {ChildUpdateContext}  from "../index"
import { useContext } from "react"
let {childrenstate} = useContext(ChildUpdateContext)
function UpdateState_using_Context(){
return(
    <div> 
        {childrenstate}
    </div>
)
}
export default UpdateState_using_Context