import React, { useEffect, useState } from 'react'
import CreateTask from '../components/cards/CreateTask'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Profilepic from "../../src/assets/p12.jpeg"
import { useSelector } from 'react-redux'
const Profile = ({createTask,setCreateTask}) => {
  const {currentuser}=useSelector((state)=>state.user1)
  console.log("currentuser",currentuser)
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
  console.log("user-profile",user)
  return (
    <div className='h-full w-full relative flex flex-col items-center'>
       {createTask && <CreateTask setCreateTask={setCreateTask}/>}
      {user?(<div className='mt-[20px] md:ml-[20px] rounded-[20px] md:w-[70%] xs:w-[90%] bg-black h-[150px]   items-center'>
      <div className='w-full h-full flex  justify-start items-center'>
        <div className='ml-[10px] h-full w-[40%] flex justify-center items-center'>
        <img src={Profilepic} className=' w-[100px] h-[100px] rounded-full object-cover'  />
        </div>
        <div className='w-[40%] flex flex-col gap-[8px]'>
         <span className='text-white text-[18px]'>{user.username}</span>
         <span className=' text-[12px] text-[#2a4184]'>{user.email}</span>
         <div className='flex gap-[15px]'>
          <div className='w-fit py-1 px-1 bg-[#1f732e74] flex items-center justify-center rounded-[5px]'>
            <span className='text-[#40dc45] text-[14px] '>{user.role}</span>
          </div>
          <div className='w-fit py-1 px-1 bg-[#6523947a] flex items-center justify-center rounded-[5px]'>
          <span className=' text-[#b455ef] text-[14px] flex items-center justify-center'>active</span>
          </div>

         </div>
        </div>
      </div>
      </div>):(<span className='text-white'>Loading...</span>)}
     {/*{currentuser.email === user.email && (
          <div className='w-[70%]'>

          </div>
     )}*/}
     <div className='w-[70%] md:ml-[20px] mt-[20px]'>
     
     </div>
      
  
    </div>
  )
}

export default Profile
