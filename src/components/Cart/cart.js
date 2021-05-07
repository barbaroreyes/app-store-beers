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
        <p>Beer: {item.name}</p>
        <p>Description : {item.description}</p>
        <p>Food_Pairing : {item.food_pairing}</p>
        
        <p>Attenuation_level : {item.attenuation_level}</p>
        <p></p>
        <div className='btu'>
       <button  className='but' onClick={()=>
        props.handledelete(index) }>
        <Link to='/beers'>Detete</Link></button>
        <button 
         className='but'>
         <Link  to='/namelist'>Order
         </Link></button>
        
       </div>
           </div>
          
      
        </div>)

       
  })} 
     <ToastContainer
        position= 'bottom-left'
        autoClose={10000}
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

