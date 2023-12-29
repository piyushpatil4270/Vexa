import {Schema,model} from "mongoose"

const userSchema=Schema({
    username:{
        type:String,
        require:true,
    },
    
    role:{
      type:String,
      enum:["admin","employee"]
    },
    email:{
        type:String,
        require:true
    },
    password:{
        require:true,
        type:String
    },
    status:{
        type:String,
        default:"inactive"
    }
})

export const Users=model("Users",userSchema);