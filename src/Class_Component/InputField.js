import React from "react";
class InputField extends React.Component{
    constructor(props){
        super(props);
        this.state = {inputValue:'H'}
    }
    buttonClicked =(event) =>{
        console.log(event.key);
    }
    saveInput=(event)=>{
        this.setState({inputValue:event.target.value})
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.inputValue} onKeyDown={this.buttonClicked} onChange={this.saveInput}></input>
            </div>
        )
    }
}
export default InputField