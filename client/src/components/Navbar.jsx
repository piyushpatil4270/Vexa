import React from 'react'
import Logo from "../assets/Logo.svg"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../redux/userSlice'
const Navbar = () => {
    const currentuser="admins"
    const dispatch=useDispatch()

  return (
    <div className='h-[65px] w-full bg-[#1a1a1a] xs:flex sm:block'>
      <div className='xs:hidden justify-start items-center xs:gap-[8px] sm:gap-[15px] ml-[10px] sm:hidden'>
      <img src={Logo} alt='Logo' className='xs:hidden sm:flex sm:w-[35px] sm:h-[35px]'/>
     <span className='text-[20px] xs:hidden sm:flex  font-medium text-transparent bg-clip-text  bg-gradient-to-r from-violet-900  to-pink-600'>Doppler</span>
      </div>
      <div className='w-full h-full flex xs:justify-center xs:ml-[5%] md:justify-between items-center xs:gap-[30px] md:gap-0'>
        <div className='xs:hidden md:flex sm:ml-2 sm:mr-2'>
        <span className='text text-white xs:text-[13px]'></span>
        </div>
        <div className='xs:flex items-center justify-center sm:hidden'>
         <Link to="/">
         <span className='text text-white xs:text-[13px]'>Home</span>
         </Link> 
        </div>
        <div className='xs:flex items-center justify-center sm:hidden'>
        <Link to={currentuser==="admin"?("/allprojects"):("/projects")}>
        <span className='text text-white xs:text-[13px]'>Projects</span>
        </Link>  
        </div>
       
        <div className='xs:flex items-center justify-center sm:hidden'>
         <Link to="/profile">
         <span className='text text-white xs:text-[13px]'>Profile</span>
         </Link> 
        </div>
        <div className='xs:flex items-center justify-center sm:hidden rounded-[50px] bg-gradient-to-r from-violet-900  to-pink-600 flex w-[70px]'>
          <span className='text text-white xs:text-[13px]' onClick={()=>dispatch(logoutUser())}>Logout</span>
        </div>
        <div className='flex justify-center items-center gap-[10px] ml-2 mr-2'>
        {/*<img src="" alt='' className='w-[30px] h-[30px] rounded-full object-contain'   style={{backgroundColor:"red"}} />*/}
        <span className='xs:hidden md:text text-white'>{currentuser.username}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
