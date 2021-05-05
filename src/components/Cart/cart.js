import React from 'react'


const Cart = ({cart}) => {

       
    return (
        <div className='cart'>
          {cart.map((item,i)=> {
    return (<div 
      key={i} 
      className ='cart-in'>
        {item.description}</div>)
       
  })} 
        </div>
    )
}

export default Cart

