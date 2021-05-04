import React,{useState,useEffect} from 'react'

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
      
      <div className='circle'>customer</div>
      <div className='circle'>customer</div>
      <div className='rectangule'>
        <h3>Team</h3>
         {team.map((item,i)=>{
           return(<p key={i}>{item.name}</p>)
         })}

        </div>
    </div>
  )
  
}

export default Footer
