import React from "react";
class ParentRefs extends React.Component{
constructor(props){
super(props)
this.state = {}
this.parentRefs = React.createRef()
this.buttonRef = React.createRef()
}
 printRefs = () =>{ 
    console.log('Thia IA Child Refs',this.parentRefs)
    this.buttonRef.current.focus()
}
render(){
    return(
        <div>
        <div ref={this.parentRefs} onClick={this.printRefs}>This Is parentRefs******Click To Console Refs</div>
        <button ref={this.buttonRef}></button>
        </div>
    )
}
}
export default ParentRefs