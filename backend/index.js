import express from "express"
import mysql from "mysql"
import cors from "cors"
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"hbl"
})

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello this is the backend")
})


//Retrieval 
app.get("/checklist",(req,res)=>{
    const q = "SELECT * FROM tasks" 
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.get("/daily_task_logs",(req,res)=>{
    const q = "SELECT * FROM daily_task_logs"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

//Posting
app.post("/checklist",(req,res)=>{
    const q = "INSERT INTO tasks (`department_id`,`task`,`type`,`status`,`remarks`) VALUES (?)"
    const values = [
        req.body.department_id,
        req.body.task,
        req.body.type,
        req.body.status,
        req.body.remarks,
    ]
    db.query(q,[values],(err,data)=>{
        if (err) return res.json(err)
        return res.json("Task Added successfully")
    })
})


app.post("/daily_task_logs", (req, res) => {
    const tasks = req.body;
    const values = tasks.map(task => [task.task_id, task.date, task.status, task.remarks]);
    const q = "INSERT INTO daily_task_logs (`task_id`, `date`, `status`, `remarks`) VALUES ?";
    console.log(values)
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Tasks added successfully");
    });
});





//Deletion
app.delete("/checklist/:id",(req,res)=>{
    const taskId = req.params.id;
    const q = "DELETE FROM tasks where task_id = ?"
    db.query(q,[taskId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Task deleted successfully")
    })
})


//Update
app.put("/checklist/:id",(req,res)=>{
    const taskId = req.params.id;
    const q = "UPDATE tasks SET `department_id` = ?, `task` = ?, `type` = ?, `status` = ?, `remarks` = ? where task_id = ?"
    const values = [
        req.body.department_id,
        req.body.task,
        req.body.type,
        req.body.status,
        req.body.remarks,
    ]
    db.query(q,[...values,taskId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Task updated successfully")
    })
})




app.listen(8800,()=>{
    console.log("Connected to backend")
})