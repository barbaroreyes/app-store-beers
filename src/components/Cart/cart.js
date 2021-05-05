import React from 'react'


const Cart = ({cart ,handledelete }) => {

       
    return (
        <div className='cart'>
          {cart.map((item,index)=> {
    return (<div 
          key={item.id} 
         className ='cart-in'>
        {item.name}
        <button onClick={()=>handledelete(index) }>delete</button>
        <button >order</button>
        </div>)

       
  })} 
  
        </div>
    )
}

export default Cart

