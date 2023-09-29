import axios from 'axios';
import {React,useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';


function Update() {
  
  const [id,setId] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDes] = useState('')
 

  const params=useParams()

  const getTask=async()=>{
  const result = await axios.get('http://localhost:8000/getATask/'+params.id)
  
  
  setId(result.data.task.id)
  setTitle(result.data.task.title)
  setDes(result.data.task.description)



  }

  const location=useNavigate()

  const handleUpdate=async (e)=>{
    e.preventDefault()

    const body={
      id,
      title,
      description
    }

    const result=await axios.post('http://localhost:8000/upadateTask',body)
    alert(result.data.message)
    location('/')

  }

  useEffect(()=>{
    getTask()
  },[])
  return (
    <div><h1 className='text-center'>Update Task</h1>
    <p></p>


    <Form className='w-50 container mt-4 border ' >
      <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control  type="text" placeholder="" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control  type="text" placeholder="" value={description} onChange={(e)=>setDes(e.target.value)}/>
      </Form.Group>

      <Button  variant="primary" type="submit" className='mb-2 ms-4' onClick={(e)=>handleUpdate(e)}>
        update
      </Button>
     <Link to={'/'}>
        <Button variant="primary" type="submit" className='mb-2 ms-4'>
          cancel
        </Button>
     </Link>
    </Form></div>
  )
}

export default Update