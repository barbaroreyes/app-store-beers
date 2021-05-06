import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {ReactComponent as CartEmpy}from '../images/assets/cart-empty.svg' 



const Nav = ({cart}) => {
  
  return (
    <div className='nav'>
       <Link to='/'>Home</Link>
       <Link to='/beers'>Beers</Link>
       <Link className='only' to='/cart'>{!cart.length? 'Cart': cart.length} <CartEmpy/></Link>
       <Link to='/namelist'>Register</Link>
       
    </div>
  )
}

export default Nav
