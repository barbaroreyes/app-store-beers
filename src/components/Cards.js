import React ,{useState,useEffect}from 'react'
import Card from './Card'
const Cards = (props) => {
const [takeOne, setTakeOne ] =useState([])
const url = 'https://api.punkapi.com/v2/beers'
useEffect(()=>{
    (async ()=> {
     const respo = await fetch(url)
     const data =  await respo.json()
     setTakeOne(data)
     console.log(data)
     
    })();
},[])



  return (
    <div className="cards">
      {takeOne.map(item =>{
          return (<Card key={item.id} {...item}/>)
      })}
    </div>
  )
}

export default Cards
