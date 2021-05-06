import React ,{useState}from 'react'
import uniqid from 'uniqid'
import { ToastContainer,toast } from 'react-toastify'

const NamesList = () => {
    const [name,setName]= useState('');
    const [nameList ,setNameList] =useState ([])
    const [edit ,setEdit]= useState(false)
    const [id , setId] = useState('')
    const [error ,setError ]= useState(null)


    const addName= e =>{
    e.preventDefault();
    toast.success('named added')

   
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
      <h2>Crud App</h2>
      <div className='row'>
           <div className='col'>
           <h2>Names list</h2>
            <ul className='list-group'>
                {nameList.map(item=>{
        return  (<li key={item.id} className='list-group-item'>
                    {item.titleName}
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
                </li>)
                })}
             </ul>
           </div>
           <div className='col'>
            <h2>add your name to this list</h2>
            <form onSubmit={edit ? editName:addName} className='form-group'>
                <input className='form-control mb-3' 
                type='text' 
                placeholder='type your name'
                 onChange={handleChangeName}
                 
                 value={name}
                />
                <input className='btn btn-info btn-block'
                 type='submit'
                 placeholder='name'
                 value={edit? 'edit-name':'registration'}
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
