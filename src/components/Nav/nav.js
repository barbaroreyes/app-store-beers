import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <div className='nav'>
       <Link to='/'>Home</Link>
       <Link to='/beers'>Beers</Link>
       <Link to='/namelist'>Register</Link>
       
    </div>
  )
}

export default Nav
