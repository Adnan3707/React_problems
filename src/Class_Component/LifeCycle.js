import React from "react";
class LifeCycle extends React.Component{
    state = {
        time: new Date().toLocaleTimeString(),
      };
    
      componentDidMount() {
        console.log('component mounted')
        // Get the current time
        const now = new Date();
    
        // Set up a timer that updates the time every second
        const interval = setInterval(() => {
          // Get the new time
          const newTime = new Date();
    
          // Update the component's state with the new time
          this.setState({
            time: newTime.toLocaleTimeString(),
          });
        }, 1000);

        // Clear the timer when the component is unmounted
        this.mounted = true;
        this.onUnmount = () => {
          clearInterval(interval);
          this.mounted = false;
        };
      }
      componentDidUpdate(){
        console.log('Component Did Update')
      }
    
      componentWillUnmount() {
        console.log('component unmounted')
        alert('component unmounted')
        if (this.mounted) {
          this.onUnmount();
        }
      }
    
      render() {
        return (
          <div>
            The current time is: {this.state.time}
          </div>
        );
      }
    }
export default LifeCycle