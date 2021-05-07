import React,{useState,useEffect} from 'react'
 
import './index.css'
const Footer = () => {
const [team, setTeam ]= useState([])
 const url = 'https://jsonplaceholder.typicode.com/users';
 useEffect(()=>{
   (async ()=> {
    const response = await fetch(url)
    const data = await response.json()
    setTeam(data)
   })();
 },[])



  return (
    <div className='footer'>
        {team.splice(0,3).map((item,i)=>{
             return (<div 
              key={i} 
              className='circle'>
              {item.name}
              </div>)
         })}
      
       
      
        <div className='rectangule'>
        <h3>Team</h3>
         {team.map((item,i)=>{
           return(<p 
              key={i}>
              {item.name}
              </p>)
         })}</div>
         
    </div>
  )
  
}

export default Footer
