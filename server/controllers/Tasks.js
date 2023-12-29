import moment from "moment/moment.js"
import {Tasks} from "../model/Tasks.js"
import { Users } from "../model/Users.js"
export const getAllTasks=async(req,res)=>{
    try {
        const tasks=await Tasks.find({})
        res.status(202).json(tasks)
    } catch (error) {
        res.status(404).json(error)
    }
}


export const getUserTasks=async(req,res)=>{
    try {
        const {userid}=req.body
        const tasks=await Tasks.find({userid:userid})
        res.status(202).json(tasks)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const getTask=async(req,res)=>{
    try {
         const {projectId}=req.params
        const task=await Tasks.find({_id:projectId})
        res.status(202).json(task[0])
    } catch (error) {
        res.status(404).json(error)
    }
}
export const createTask=async(req,res)=>{
    const {projectTitle,projectDescription,project_type,startDate,assigned_to}=req.body
    try {
        const user=await Users.find({email:assigned_to})
        if(!user[0]) return res.status(402).json("User does not exist")
        const task=await Tasks.create({
            userid:user[0]?.username,
            title:projectTitle,
            description:projectDescription,
            created_at:moment().format("DD-MM-YYYY"),
            project_type:project_type
        })
        res.status(202).json(req.body)
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const addLog=async(req,res)=>{
    try {
        const {projectId}=req.params
        const {progress}=req.body
        const task=await Tasks.findById(projectId)
        const comment={
            date:moment().format("DD-MM-YYYY"),
            description:progress
        }
        await Tasks.updateOne(
            {_id:projectId},
            {$push:{comments:comment}}
            )
         
        const updated_task=await Tasks.findById(projectId)
        res.status(202).json(updated_task)
    } catch (error) {
        res.status(404).json(error)
    }
}