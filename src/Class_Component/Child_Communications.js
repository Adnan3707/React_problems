import React from "react";
class ChildCommunication extends React.Component{
    render(){
        const {message} = this.props
        return(
            <div>{message}</div>
        )
    }
}
export default ChildCommunication