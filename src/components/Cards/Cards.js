import React ,{useState,useEffect}from 'react'
import Loading from '../loading/loading'
import Beer from '../Card/Card'
import './index.css'

const AllBeers = (props) => {
  
const [takeOne, setTakeOne ] =useState(null)
const url = 'https://api.punkapi.com/v2/beers?page=2&per_page=25'
useEffect(()=>{
(async ()=> {
     const respo = await fetch(url)
     const data =  await respo.json()
     setTakeOne(data)})();
},[])

const loaded = () => {
  return (
    <div className="cards">
      {takeOne.map((item) =>{
       return (
       <Beer key={item.id} 
      addToCart={props.addToCart}
     {...item}/> )})}
     </div>
  )
}
const loading =() => {
  return (<Loading/>)
}

 return  takeOne ? loaded(): loading()
}

export default AllBeers
