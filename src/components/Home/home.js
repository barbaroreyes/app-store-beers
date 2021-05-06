import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="logo-box"></div>
      </div>
       <div className="box">
       <h1 className="primary">
        <h1 className>
          <span className="text1">
            <p>Beer is one of the oldest</p>
          </span>
          <span className="text2">
          and most widely consumed alcoholic drinks in the world
          </span>
        </h1></h1>
        <Link to='/beers' className="btn btn-white btn-animated">Go Inside to now more</Link>
       </div>
    </div>
  )
}

export default Home
