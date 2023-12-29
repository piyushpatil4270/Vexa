import {connect} from "mongoose"

export const connection=()=>{
    connect("mongodb://127.0.0.1:27017/Task-manager")
    .then(()=>console.log("Connected to the database"))
    .catch((err)=>console.log("error"+err))
}