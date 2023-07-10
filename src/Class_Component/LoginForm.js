import React from "react";
class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLogedin:false}
    }
    button=()=>{ this.setState({isLogedin: !this.state.isLogedin})}
    render(){
        let {isLogedin} = this.state
        return(
            <div>
                {isLogedin ?<button onClick={this.button}>logout</button> :<button onClick={this.button}>Login</button> }
                {isLogedin ?<p>You are LogedIn</p> :<p>You are LoggedOut</p> }
            </div>
        )
    }
}
export default LoginForm