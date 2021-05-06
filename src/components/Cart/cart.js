import React from 'react'
import { ToastContainer,toast } from 'react-toastify'
import './index.css'


const Cart = (props) => {
  
   return (
        <div className='cart'>
          {props.cart.map((item,index)=> {
            toast.success(`${item.name} Was Added`)
    return (<div 
          key={item.id} 
         className ='cart-in'>
        <div className='info'>
        <p>Name:{item.name}</p>
        <p>{item.description}</p>
        <div className='btu'>
       <button  className='but' onClick={()=>
        props.handledelete(index) }>delete</button>
        <button className='but'>order</button>
        
       </div>
           </div>
        
      
        </div>)

       
  })} 
     <ToastContainer
        position= 'bottom-left'
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange ={false}
        draggable
        pauseOnHover={false}
        />
        </div>
    )
}

export default Cart

