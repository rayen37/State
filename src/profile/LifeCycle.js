import { Button, FormControl } from "react-bootstrap";
import React, { Component } from "react";


class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      
      timer: new Date(),
      
    };
    console.log("constructor");
  }
 
  
  // component did mount
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ timer: new Date() });
    }, 1000);
  }
  
  
  render() {
    console.log("render");
    return (
      <div>
        
        <div className='input'>
          
          
          <p>{this.state.timer.toLocaleTimeString()}</p>
        </div>
      </div>
    );
  }
}

export default LifeCycle;