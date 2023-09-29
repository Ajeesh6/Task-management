import axios from 'axios';
import  {React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Task() {

    const [Task, setTask] = useState({})

  const params=useParams()
  const getTask=async()=>{
    const result = await axios.get('http://localhost:8000/getATask/'+params.id)
    setTask(result.data.task);
    console.log(Task);
  }
  useEffect(()=>{
    getTask()
  },[])
  return (
    <div>
        <Card className='w-25 container mt-4'>
      <Card.Body>
        <Card.Title className='text-center'>{Task.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush text-center">
      <ListGroup.Item>description : {Task.description}</ListGroup.Item>
      </ListGroup>
      
    </Card>
    </div>
  )
}

export default Task