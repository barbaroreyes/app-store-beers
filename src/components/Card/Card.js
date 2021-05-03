import React from 'react'
import {Button} from 'react-bootstrap'
const CardId = (props) => {
  return (
    <div  className ='card'>
      <div className='card1'>
      <img className='image1' src={props.image_url} alt=''/>
      <p>{props.name}</p>
       <p>{props.tagline}</p>
       
      </div>
      <Button variant="primary" size="lg">Clickme</Button>

        
    </div>
  )
}

export default CardId
