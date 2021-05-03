import React from 'react'
import {Card,Button} from 'react-bootstrap'
const CardId = (props) => {
  return (
    <div className='card'>
           <Card style={{ width: '18rem' }}>
  <Card.Img style={{width:'200px'}} variant="top" src={props.image_url}/>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.first_brewed}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default CardId
