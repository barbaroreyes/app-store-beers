import React ,{useState,useEffect}from 'react'

const Clock = () => {
    const [current ,setCurrent] = useState(new Date().toLocaleString())
 

    useEffect(()=>{
     setInterval(() => {
     setCurrent(new Date().toLocaleString().toLocaleString())
     },1000)
    },[])
    return (
        <div>
            <div className='clock'>{current}</div>
        </div>
    )
}
 export default Clock