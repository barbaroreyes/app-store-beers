import React from 'react'


const Cart = (props) => {
  
       
    return (
        <div className='cart'>
          {props.cart.map((item,index)=> {
    return (<div 
          key={item.id} 
         className ='cart-in'>
        {item.name}
        {item.description}
        
       <div className='btu'>
       <button  className='but' onClick={()=>
          props.handledelete(index) }>delete</button>
        <button className='but'>order</button>
       </div>
        </div>)

       
  })} 
    
        </div>
    )
}

export default Cart

