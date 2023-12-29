import React, { useState } from 'react'
import Logo from "../assets/Logo.svg"
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
const Authentication = () => {
  const [openSignUp,setOpenSignUp]=useState(false)
  return (
    <div className='w-full h-full flex flex-col justify-center    items-center xs:gap-[10px] md:gap-4 '>
     <div className='w-full flex xs:gap-[10px] md:gap-[15px] xss:pt-10 sm:pt-[30px] md:pt-[65px]  justify-center items-center'>
      <img src={Logo} className='xs:h-9 xs:w-50 sm:h-15 sm:w-50'/>
       <span className=' font-medium xs:text-[40px] text-[50px] bg-gradient-to-r from-violet-900  to-pink-600 inline-block text-transparent bg-clip-text'>Doppler</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
       <span className='text-[#b6aeae] md:text-[25px] sm:text-[20px] text-[30]'>Welcome to Doppler</span>
       </div>
       {openSignUp?(<SignUp setOpenSignUp={setOpenSignUp}/>):(<SignIn setOpenSignUp={setOpenSignUp}/>)}
    </div>
  )
}

export default Authentication
