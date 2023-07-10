import React from "react";
import ChildCommunication from "./Child_Communications";
class ParentChildCommunication extends React.Component{
    constructor(props){
        super(props)
        this.state = {message:''}
    }
    console =()=>{
        this.setState({message:'Welcome To parent Chield Communication using Class Components'})
    }
    render(){
        const {message} =this.state
        return(
            <div>
                <button onClick={this.console}>Click To Discuss</button>
                <ChildCommunication message={message}/>
            </div>
        )
    }
    
}
export default ParentChildCommunication