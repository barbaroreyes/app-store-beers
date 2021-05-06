import React from 'react'
import {Link} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import './index.css'



const Cart = (props) => {
  
   return (
        <div className='cart'>
          {props.cart.map((item,index)=> {
            toast.success(`${item.name} Was Added to your cart`)
    return (<div 
          key={item.id} 
         className ='cart-in'>
        <div className='info'>
        <p>Name:{item.name}</p>
        <p>{item.description}</p>
        <p></p>
        <div className='btu'>
       <button  className='but' onClick={()=>
        props.handledelete(index) }>
           <Link to='/'>Detete</Link></button>
        <button onClick={()=> toast.success(`Congratulations, your order ${item.name}  will be shipped within the next 3 business days`) } className='but'>order</button>
        
       </div>
           </div>
        
      
        </div>)

       
  })} 
     <ToastContainer
        position= 'bottom-left'
        autoClose={5000}
        hideProgressBar={false}
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

