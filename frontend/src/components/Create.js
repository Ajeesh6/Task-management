import axios from 'axios';
import { React, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,Link } from 'react-router-dom';
import uuid from 'react-uuid';


function Create() {

  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDes] = useState('')


  useEffect(()=>{
    setId(uuid().slice(0,3))
  },[])

  let location = useNavigate()

  const createTask=async(e)=>{
    e.preventDefault()
    setId(uuid().slice(0,3));
    
    const body={
      id,title,description
    }
    console.log(body);

   const result=await axios.post('http://localhost:8000/createTask',body)
   alert(result.data.message)
   location('/')
    
  }

  return (
    <div>
      <h1 className='text-center'>Create New Task</h1>
      <p></p>


      <Form className='w-50 container mt-4 border ' >
        <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={(e) => setDes(e.target.value)} type="text" placeholder="" />
        </Form.Group>

        <Button onClick={(e)=>createTask(e)} variant="primary" type="submit" className='mb-2 ms-4'>
          create
        </Button>
       <Link to={'/'}>
          <Button variant="primary" type="submit" className='mb-2 ms-4'>
            cancel
          </Button>
       </Link>
      </Form>
    </div>
  )
}

export default Create