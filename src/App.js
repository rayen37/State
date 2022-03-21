import { Button } from "react-bootstrap";
import React, { Component } from "react";
import LifeCycle from "./profile/LifeCycle";
import Profile from "./profile/Profile";
import img from "./logo.jpg"



class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      
       FullName :'Amdouni Rayen' ,
       Bio : 'Some Bio ...' ,
       Profession : 'Web Dev' ,
    
      
    };
  }
  render() {
    return (
      <div className='App' align="center">
        <Button
          variant='primary'
          onClick={() => this.setState({ show: !this.state.show })}
        >
          show
        </Button>
        
        {this.state.show &&  <Profile FullName={this.state.FullName} Bio={this.state.Bio} Profession={this.state.Profession}  /> }
        {this.state.show && <LifeCycle />}
      </div>
    );
  }
}

export default App;