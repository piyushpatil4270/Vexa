import {connect} from "mongoose"

export const connection=()=>{
    connect("mongodb+srv://piyushpatil4270:piyushpatil4270@cluster0.pp90y4o.mongodb.net/")
    .then(()=>console.log("Connected to the database..."))
    .catch((err)=>console.log("error"+err))
}