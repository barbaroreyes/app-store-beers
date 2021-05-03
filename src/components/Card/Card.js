import React from 'react'
import {Card,Button} from 'react-bootstrap'
const CardId = (props) => {
  return (
    <div  className ='card'>
      <div>
      <img src={props.image_url} alt=''/>
      <p>{props.name}</p>
       
       <p>{props.tagline}</p>
      </div>

        

  {/* <Card className='card' style={{ width: '18rem' }}>
  <Card.Title>{props.name}</Card.Title>
  <Card.Img style={{width:'50px'}} variant="top" src={props.image_url}/>
  <Card.Body>
    
    <Card.Text>
      {props.first_brewed}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
    </div>
  )
}

export default CardId
