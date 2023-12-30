import React from 'react'
import profile from "../../assets/p12.jpeg"
import {Email,Work,CalendarMonth} from "@mui/icons-material"
const EmployeeCard = ({username,email,status,role}) => {
  return (
    <div className='w-[30%] h-[180px] bg-black rounded-[10px] flex flex-col items-start justify-center gap-[5px]'>
      <div className='flex ml-3 items-center h-[30%] gap-[10px]'>
       <img src={profile} className='w-[50px] h-[85%] object-cover  rounded-full' />
       <div className='flex flex-col h-full justify-center items-start'>
        <span className='text-white text-[15px]'>{username}</span>
       </div>
       
      </div>
      <div className='flex flex-col gap-[10px] w-[92%] rounded-[10px] p-[2px] items-center justify-center  ml-3 bg-[#1313139d]'>
        <div className='ml-[3px] flex  w-full'>
        <div className='w-[40%] flex items-center  gap-[10px]'>
            <Email style={{color:"white",fontSize:"16px"}} />
          <span className='text-white text-[13px]'>{email}</span>
        </div>
        <div className='w-[40%] flex justify-end items-center '>
        <span className={`${status==="inactive"?`text-[#228023]`:`text-[#ff3a3a]`} text-[13px]`}>{status}</span>
        </div>
        </div>
        <div className='ml-[3px] flex w-full  items-center  gap-[10px]'>
        <Work style={{color:"white",fontSize:"16px"}} />
        <span className='text-white text-[13px]'>{role}</span>
        </div>
        <div className='ml-[3px] flex items-center  gap-[10px] w-full'>
        <CalendarMonth style={{color:"white",fontSize:"16px"}} />
        <span className='text-white text-[13px]'>01-02-2018</span>
        </div>
       
       </div>
    </div>
  )
}

export default EmployeeCard
