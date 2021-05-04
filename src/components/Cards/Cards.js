import React ,{useState,useEffect}from 'react'
import Loading from '../loading/loading'
import Card from '../Card/Card'
import Cart from '../Cart/cart'
const Cards = (props) => {
const [takeOne, setTakeOne ] =useState(null)
const [cart,setCart] = useState([])

const addedTocart = (takeOne)=> {
 console.log('takeOne,takeOne')
}


const url = 'https://api.punkapi.com/v2/beers?page=2&per_page=80'
useEffect(()=>{
    (async ()=> {
     const respo = await fetch(url)
     const data =  await respo.json()
     setTakeOne(data)
     console.log(data)
     
    })();
},[])

const loaded = () => {
  return (
    <div className="cards">
      {takeOne.map((item) =>{
          return (
          <Card key={item.id} 
          {...item}/> )})}
         
      </div>
  )
}
const loading =() => {
  return (<Loading/>)
}

 return  takeOne ? loaded(): loading()
}

export default Cards
