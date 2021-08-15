import './index.css';

import React, {
  useEffect,
  useState,
} from 'react';

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
        <h1>Barbaro Reyes</h1>
        
         {/* {team.map((item,i)=>{
           return(<p 
              key={i}>
              {item.name}
              </p>)
         })} */}
         </div>
         
    </div>
  )
  
}

export default Footer



export default Footer
