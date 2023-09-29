import { React, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Home() {

    const [task, setTask] = useState([])

    const getTask = async () => {
        const response = await axios.get('http://localhost:8000/getAllTask')
        setTask(response.data.tasks)

    }

    const handleDelete =async (id) => {
       const result = await axios.delete('http://localhost:8000/deleteTask/'+id)
       alert(result.data.message)
       getTask()
    }

    

    // console.log(task);

    useEffect(() => {
        getTask()
    }, [])

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Task Management App</Navbar.Brand>
      </Container>
    </Navbar>

    <Container className='text-center mt-3'><Link to={'/create'}><Button variant="outline-info"> + Create New Task</Button></Link></Container>

    <Container>
        <Table striped bordered hover className=' p-4 w-70' style={{ marginTop: '70px' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>title</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                task?.map((task,index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{task.title}</td>
                                        <td>
                                            
                                            <Link to={'task/'+task.id}><Button type="submit" className='ms-3'>View</Button></Link>
                                            <Link to={'update/'+task.id}><Button type="submit" className='ms-2'>Update</Button></Link>
                                            <Button onClick={()=>handleDelete(task.id)} type="submit" className='ms-3'>Delete</Button>
    
                                        </td>
                                    </tr>
                                ))
                            }
    
                        </tbody>
                    </Table>
    </Container>



    </div>
  )
}

export default Home