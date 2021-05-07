import React ,{useState}from 'react'
import uniqid from 'uniqid'
import { ToastContainer,toast } from 'react-toastify'


const NamesList = ({cart}) => {
 const infoCart = cart.map((item,i)=> {
   return (<div key={i}>
     <>Beer : {item.name}</>
     <p>{item.description}</p>
     </div>)
 })
    const [name,setName]= useState('');
    const [nameList ,setNameList] =useState ([])
    const [edit ,setEdit]= useState(false)
    const [id , setId] = useState('')
    const [error ,setError ]= useState(null)


    const addName= e =>{
    e.preventDefault();
    toast.success(`Congratulations, your order 
       will be shipped within the next 3 business days`) 
    if(!name.trim()){
        setError('Error')
        return
      }
    const newId ={id: uniqid(),titleName:name}
    setNameList(
    [...nameList,newId])
    setName('')
    setError(null)
    }

    const handleDelete = (id) => {
        setNameList(
        nameList
        .filter(item => 
        item.id  !==id)
        )
    }
    const handleEdit = (item)=> {
     setEdit(true)
     setName(item.titleName)
     setId(item.id)
     
    }
    const editName = (e)=> {
     e.preventDefault()
    setNameList(
         nameList
         .map(item =>
         item.id ===id
         ? {id:id,titleName:name}
         : item))
         setEdit(false)
         setName('')
        
    }
  
   
const handleChangeName = e =>
 setName( e.target.value)

 

  return (
    <div>
      
      <div className='row dad'>
           <div className='col'>
           <h2>You Order</h2>
           
            <ul >
                {nameList.map(item=>{
        return  (<div key={item.id} className='order'>
                  <img alt ='robot' src = {`https://robohash.org/${item.id}?200x200`} />
                    {item.titleName}
                    {infoCart}
                    <button className='btn btn-danger float-right'
                    onClick={()=>{handleDelete(item.id)}}
                    >
                    Delete
                  </button>
                  <button className='btn btn-info float-right'
                    onClick={()=>{handleEdit(item)}}
                    >
                   Edition
                  </button>
                </div>)
                })}
             </ul>
           </div>
           <div className='col'>
             
            <form onSubmit={edit ? editName:addName}>
           
              <input 
                 type='submit'
                 placeholder='name'
                 value={edit? 'edit-name':'registration'}/>
                <input
                type='text' 
                placeholder='your name'
                onChange={handleChangeName}
                value={name}
                />
             </form>
            {error != null ?
             (<div className='alert-danger'>{error}</div>)
             :(<div></div>)}
           </div>
           <div/>
           <ToastContainer
        position= 'bottom-left'
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange ={false}
        draggable
        pauseOnHover={false}
        />
      </div>
    </div>
  )
}

export default NamesList
