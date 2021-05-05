import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'


const Nav = ({cart}) => {
  
  return (
    <div className='nav'>
       <Link to='/'>Home</Link>
       <Link to='/beers'>Beers</Link>
       <Link to='/cart'>Cart : {cart.length}</Link>
       <Link to='/namelist'>Register</Link>
       
    </div>
  )
}

export default Nav
