import express from "express"
import userRouter from "./routes/Users.js"
import taskRouter from "./routes/Tasks.js"
import { connection } from "./connection/connectio.js"
import cors from "cors"
import bodyParser from "body-parser"
const app=express()

//middlewares
app.use(express.json())
app.use(cors())
//app.use(bodyParser.urlencoded(true))
app.use(bodyParser.json())
//connection
connection()



//routes
app.use("/users",userRouter)
app.use("/tasks",taskRouter)

const port=5000
app.listen(port,()=>console.log(`Server started at port ${port}`))