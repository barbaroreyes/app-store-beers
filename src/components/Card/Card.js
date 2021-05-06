import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const CardId = (props) => {

  
  return (
    <div  className ='card'>
      <div className='card1 '>
      <img className='image1' src={props.image_url} alt=''/>
      <p>{props.name}</p>
       <p>{props.tagline}</p>
      
      </div>
      <Button onClick={()=> 
      props.addToCart({...props})} 
      className='btn' 
      variant="primary" size="lg"
      
      >
        <Link to='/cart'>History</Link>
      </Button>

      
    </div>
  )
}

export default CardId
