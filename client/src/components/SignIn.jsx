import React, { useEffect, useState } from 'react'
import axios from "axios"
import {
  EmailRounded,
  PasswordRounded
} from "@mui/icons-material"
import { loginUser } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
const SignIn = ({setOpenSignUp}) => {
  const dispatch=useDispatch()
  const [user,setUser]=useState("admin")
  const [userEmployee,setuserEmployee]=useState("employee")
  const [userAdmin,setUserAdmin]=useState("admin")
  const [apierror,setApierror]=useState("")
  const [formData,setFormData]=useState({
    email:"",
    password:"",
    role:"admin"
  })
  const [buttonDisabled,setButtonDisabled]=useState(true)
  const [errormessage,seterrormessage]=useState({
    email:"",
    password:"",
    apierror:""
  })
 
  const handleinputChange=(e)=>{
    const {name,value}=e.target
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        setButtonDisabled(true);
      }
      if (value && !emailRegex.test(value)) {
        seterrormessage({
          ...errormessage,
          email: "Enter correct email",
        });
        setButtonDisabled(true);
      } else {
        seterrormessage({
          ...errormessage,
          email: "",
        });
      }
    }
    if (name === "password") {
      if (!value) {
        setButtonDisabled(true);
      }
    }
    setApierror("")
    
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  }


  useEffect(()=>{
    if(!errormessage.email && formData.email && formData.password){
      setButtonDisabled(false)
    }
    else{
      setButtonDisabled(true)
    }
  },[errormessage,formData])
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await axios.post("http://localhost:5000/users/login",formData)
    .then((res)=>{
      if(res.status===230){
        setButtonDisabled(true)
        setApierror("Enter valid password")
      }
      else if(res.status===240){
        setButtonDisabled(true);
        setApierror("Enter valid Role")
        
      }
      else if(res.status===235){
        setButtonDisabled(true);
        setApierror("Enter valid Password")
      }
      else if(res.status===202){
        console.log("userres",res.data)
        dispatch(loginUser(res.data))
      }
    })
    } catch (error) {
      setButtonDisabled(true)
      setApierror(error)
    }
    
    }
    console.log("Formdata",formData)
  return (
    <div className="bg-[#0d0d0d] xs:w-[220px] sm:w-[500px] md:w-[600px]  flex flex-col xs:gap-2  sm:gap-4 rounded-[8px]">
      <h3 className="text-white xs:text-[20px] md:text-[28px] xs:ml-5 xs:mt-4 md:ml-7">Sign-In</h3>
      <div className="flex flex-col items-start  justify-center  w-full xs:gap-2 sm:gap-4">
        <div className='xs:ml-3 sm:ml-8 flex justify-start xs:gap-[20px] sm:gap-[50px]'>
        <button className={`text-white xs:text-[15px] sm:text-[18px] md:text-[22px] bg-transparent ${userEmployee===user && `border-b-2 `}`} value="employee" onClick={(e)=>{
          setUser(e.target.value);
          setFormData({
            ...formData,
            role:e.target.value
          })
          
          }
          } >Employee</button>
        <button className={`text-white xs:text-[15px] sm:text-[18px] md:text-[22px] bg-transparent ${userAdmin===user && `border-b-2 `}`} value="admin" onClick={(e)=>{
          setUser(e.target.value)
          setFormData({
            ...formData,
            role:e.target.value
          })
          }} >Admin</button>
        </div>
      <div className="w-[90%] xs:ml-3 sm:ml-8 bg-transparent border outline-none border-[#a9a9a9] mt-2 mb-2  sm:py-[7px] md:py-[10px] rounded-[7px] flex flex-row gap-3 items-center ">
      <EmailRounded className="ml-2 text-white" />
        <input name='email' value={formData.email} className="w-full bg-transparent outline-none  text-[#b6aeae]" onChange={handleinputChange}/>
        </div>
        {errormessage.email && (<span className="text text-red-700 xs:ml-3 sm:ml-8 text-[12px]">{errormessage.email}</span>)}
        <div className="w-[90%] xs:ml-3 sm:ml-8 bg-transparent border outline-none border-[#a9a9a9] mt-2 mb-2  sm:py-[7px] md:py-[10px] rounded-[7px] flex flex-row gap-3 items-center ">
        <PasswordRounded className="ml-2 text-white" />
        <input name='password' value={formData.password} className="w-full bg-transparent outline-none  text-[#b6aeae]" onChange={handleinputChange}/>
        </div>
        {apierror && (<span className="text  text-red-700 xs:ml-3 sm:ml-8 text-[12px]">{apierror}</span>)}
        <button className={`xs:ml-3 sm:ml-8 w-[90%] xs:py-1 sm:py-2 mb-4 bg-gradient-to-r from-violet-900  to-pink-600 text-white rounded-[8px] hover:bg-sky-700 ${buttonDisabled && `cursor-not-allowed`} `} onClick={(e)=>handleSubmit(e)}>Sign In</button>
        <div className='flex w-full justify-center items-center'>  
         <a href='#' className='text text-purple-800 underline' onClick={()=>{setOpenSignUp(true)}}>Don't have account? Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default SignIn
