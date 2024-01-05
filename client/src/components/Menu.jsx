import React, { useState } from 'react'
import { 
    Dashboard,
    PeopleAlt,
    AccountTree,
    Person,
    Add,
    Logout
} from '@mui/icons-material'
import Logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {logoutUser} from "../redux/userSlice"
const Menu = ({createTask,setCreateTask}) => {
    const dispatch=useDispatch()
    const [currentPage,setCurrentPage]=useState("dashboard")
    const {currentuser}=useSelector(state=>state.user1)
    console.log("currentuser-profile",currentuser)
  return (
    <div className='flex flex-col h-full w-full items-center gap-[30px]'>
     <div className='sm:w-[90%] md:w-[80%] flex sm:gap-[5px] lg:gap-[10px] justify-start items-center pt-[15px]'>
     <img src={Logo} alt='Logo' className='sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px]'/>
     <span className='sm:text-[24px]  lg:text-[32px]  font-medium text-transparent bg-clip-text  bg-gradient-to-r from-violet-900  to-pink-600'>Hexa</span>
     </div>
     
     <div className={`flex sm:w-[90%] md:w-[80%] bg-transparent items-center justify-start ${currentPage==="dashboard" && `bg-gradient-to-r from-violet-900  to-pink-600`} sm:p-1 lg:p-2.5  gap-2 rounded-[10px] cursor-pointer`} onClick={()=>{setCurrentPage("dashboard")}}>
      <Link to="/" className='flex items-center justify-start gap-2'>
       <Dashboard className='text-white sm:ml[5px] lg:ml-[10px]' style={{fontSize:"25px"}}/>
        <span className='text-white sm:text-[14px] lg:text-[18px]'>Dashboard</span>
       </Link>
    </div>
  
    {currentuser.role==="admin"&&(
       
    <div className={`flex sm:w-[90%] md:w-[80%] bg-transparent items-center justify-start ${currentPage==="employees" && `bg-gradient-to-r from-violet-900  to-pink-600`} p-2.5  gap-2 rounded-[10px] cursor-pointer`} onClick={()=>{setCurrentPage("employees")}}>
        <Link to="/employees" className='flex items-center justify-start gap-2' > 
        <PeopleAlt className='text-white sm:ml[5px] lg:ml-[10px]' style={{fontSize:"25px"}}/>
        <span className='text-white sm:text-[14px] lg:text-[18px]'>Employees</span>
        </Link>
    </div>
  
    )}
    <div className={`flex sm:w-[90%] md:w-[80%] bg-transparent items-center justify-start ${currentPage==="tasks" && `bg-gradient-to-r from-violet-900  to-pink-600`} p-2.5  gap-2 rounded-[10px] cursor-pointer`} onClick={()=>{setCurrentPage("tasks")}}>
        <Link to={currentuser=="admin"?`/allprojects`:`/projects`} className='flex items-center justify-start gap-2'>
        <AccountTree className='text-white sm:ml[5px] lg:ml-[10px]' style={{fontSize:"25px"}}/>
        <span className='text-white sm:text-[14px] lg:text-[18px]'>Projects</span>
        </Link>
        
    </div>
    
    <div className={`flex sm:w-[90%] md:w-[80%] bg-transparent items-center justify-start ${currentPage==="profile" && `bg-gradient-to-r from-violet-900  to-pink-600`} p-2.5  gap-2 rounded-[10px] cursor-pointer`} onClick={()=>{setCurrentPage("profile")}}>
       <Link to={`/profile/${currentuser._id}`} className='flex items-center justify-start gap-2' >
       <Person className='text-white sm:ml[5px] lg:ml-[10px]' style={{fontSize:"25px"}}/>
        <span className='text-white sm:text-[14px] lg:text-[18px]'>Profile</span>
       </Link>
    </div>
   
    <div className={`flex sm:w-[90%] md:w-[80%] bg-transparent items-center justify-start ${currentPage==="create" && `bg-gradient-to-r from-violet-900  to-pink-600`} p-2.5  gap-2 rounded-[10px] cursor-pointer`} onClick={()=>{
        setCurrentPage("create")
        setCreateTask(!createTask)
        }}>
       <Add className='text-white sm:ml[5px] lg:ml-[10px]' style={{fontSize:"25px"}}/>
        <span className='text-white sm:text-[14px] lg:text-[18px]'>Add Project</span>
       
    </div>
    
    <div className={`flex sm:w-[90%] md:w-[80%] bg-transparent items-center justify-start ${currentPage==="logout" && `bg-gradient-to-r from-violet-900  to-pink-600`} p-2.5  gap-2 rounded-[10px] cursor-pointer`} onClick={()=>{
        setCurrentPage("logout")
        dispatch(logoutUser())
        }}>
        <Logout className='text-white sm:ml[5px] lg:ml-[10px]' style={{fontSize:"25px"}}/>
        <span className='text-white sm:text-[14px] lg:text-[18px]'>Logout</span>
    </div>
    </div>
  )
}

export default Menu
