import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'

const CardId = (props) => {

  
  return (
    <div className="card" >
      <div className="card1">
      <img className='image1' src={props.image_url} alt=''/>
      <p>{props.name}</p>
       <p>{props.tagline}</p>
       <Button onClick={()=> 
      props.addToCart({...props})} 
      className='btn' 
      variant="primary" size="lg"
      
      >
        <Link className='link' to='/cart'>My History</Link>
      </Button>
      
      </div>
     

      
    </div>
  )
}

export default CardId
