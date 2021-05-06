import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import  CartEmpy from '../images/spcart.png' 
import  ADDCart from '../images/add.png' 



const Nav = ({cart}) => {
  
  return (
    <div className='nav'>
       <Link to='/'>Home</Link>
       <Link to='/beers'>Beers</Link>
       <Link to='/namelist'>Register</Link>
       <Link className='only' to='/cart'>{!cart.length? <img src={CartEmpy} alt=''/> : <img src={ADDCart} alt=''/> }</Link>
       {cart.length}
    </div>
  )
}

export default Nav
