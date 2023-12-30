import React, { useEffect, useState } from 'react'
import CreateTask from '../components/cards/CreateTask'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DemoBarChart from '../components/cards/DemoBarChart'
const Profile = ({createTask,setCreateTask}) => {
  const [user,setUser]=useState(null)
  const {userId}=useParams()
  const fetchUser=async()=>{
    try {
      const res=await axios.get("http://localhost:5000/users/getuser/"+userId)
      .then((res)=>{
        setUser(res.data)
      })
    } catch (error) {
      console.log("Profile-Error",error)
    }
  }
  useEffect(()=>{
   fetchUser()
  },[])
  return (
    <div className='h-full w-full relative'>
       {createTask && <CreateTask setCreateTask={setCreateTask}/>}
      <span className='text-white'>{user?.email}</span>
  
    </div>
  )
}

export default Profile
