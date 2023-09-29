const express = require('express')

const server=express()

const service=require('./services/service')

const cors =require('cors')

// connect with frontend
server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

server.listen(8000,()=>{
    console.log("server started at port 8000");
})


server.get('/getAllTask',(req,res)=>{
    service.getTask().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/createTask',(req,res)=>{
    service.newTask(req.body.id,req.body.title,req.body.description).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/getATask/:id',(req,res)=>{
    service.getATask(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/upadateTask',(req,res)=>{
    service.updateTask(req.body.id,req.body.title,req.body.description).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.delete('/deleteTask/:id',(req,res)=>{
    service.deleteTask(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})