
import React  from "react";
class StateManagement extends React.Component{
    constructor(props){
        super(props)
        this.state = {count : 0 } 
    }
    add = () => {
        this.setState({ count: this.state.count + 1})
    }
    
    render(){
        return(
        <div>
            count using class Component {this.state.count}
            <button onClick={this.add}>Increment</button>
        </div>
        )
    }
}
export default StateManagement