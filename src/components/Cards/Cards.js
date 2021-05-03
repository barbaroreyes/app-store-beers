import React ,{useState,useEffect}from 'react'
import Card from '../Card/Card'
const Cards = (props) => {
const [takeOne, setTakeOne ] =useState([])
const url = 'https://api.punkapi.com/v2/beers?page=2&per_page=80'
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
