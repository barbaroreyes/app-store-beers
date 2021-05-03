import React from 'react'
import {Spinner}from 'react-bootstrap'
import './loading.scss'

 const Loading = () => {
    return (
        <div className='loading'>
            <Spinner animation='border' role='status'/>
            <h5>Loading...</h5>
        </div>
    )
}
export default Loading