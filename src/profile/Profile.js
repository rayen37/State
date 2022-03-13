
import { Card , Button } from 'react-bootstrap'

 function Profile(props) {
  return (
    <div>
<Card style={{ width: '18rem' }}>
  <Card.Img style={{'borderRadius':'50%'}} variant="top" src="logo.jpg" />
  <Card.Body>
    <Card.Title><h2>{props.FullName}</h2></Card.Title>
    <Card.Text>
     <h4> {props.Bio} </h4>
      
      
    </Card.Text>
    <Card.Text>
     <h3> {props.Profession} </h3>
      
      
    </Card.Text>
    <Button onClick={props.handleName} variant="primary">Click Me</Button>
  </Card.Body>
</Card>
  
        
    </div>
  )
}
export default Profile;
