import { Button } from 'bootstrap'
import React from 'react'

const Cart = ( props) => {
    console.log(props)
    return (
        <div className='cart'>
   <div className='cart-in'>
       <p>Beer Information</p>
      <div className='but'>
        <button className='butt'>Pay</button>
        <button className='butt'>Delete</button>
      </div>
       </div> 
          
              
        </div>
    )
}

export default Cart

