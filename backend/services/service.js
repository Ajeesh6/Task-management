const db=require('./db')


const getTask=()=>{
    return db.Task.find().then(result=>{
         if(result){
             return{
                 statusCode:200,
                 tasks:result
             }
         }
     })
 }

const newTask=(id,title,description)=>{
    return db.Task.findOne({id}).then(result=>{
         if(result){
             return{
                 statusCode:400,
                 message:"task already exist"
             }
         }
         else{
             const newTask=new db.Task({
                 id,
                 title,
                 description
             })
 
             newTask.save()
 
             return{
                 statusCode:200,
                 message:"Task created successfully"
             }
         }
     })
 }

 const getATask=(id)=>{
    return db.Task.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                task:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"Task not present"
            }
        }
    })
}

const updateTask=(id,title,description)=>{
    return db.Task.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.title=title
            result.description=description
            

            result.save()

            return{
                statusCode:200,
                message:"Task updated"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Task present"
            }
        }
    })
}

const deleteTask = (id)=>{
    return  db.Task.deleteOne({id}).then(result=>{
           if(result) {
               return{
                   statusCode:200 ,
                   message:"task Deleted"
               }
           }
           else{
               return{
                 statusCode:404,
               message:"task not present"
   
               }
               
           }
       })
   }


 module.exports={
    newTask,getTask,getATask,updateTask,deleteTask
}