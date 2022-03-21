
import React, { Component } from "react";
import { Card , Button } from 'react-bootstrap'

class Profile extends Component {
    
        render() {
 return (
   <div>
<Card style={{ width: '18rem' }}>
 <Card.Img style={{'borderRadius':'50%'}} variant="top" src = "./logo.jpg" />
 <Card.Body>
   <Card.Title><h2>{this.props.FullName}</h2></Card.Title>
   <Card.Text>
    <h4> {this.props.Bio} </h4>
     
     
   </Card.Text>
   <Card.Text>
    <h3> {this.props.Profession} </h3>
     
     
   </Card.Text>
   
 </Card.Body>
</Card>
 
       
   </div>
 )
        } 
    }

export default Profile ;