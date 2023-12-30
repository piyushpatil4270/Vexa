import React, { useEffect, useState } from 'react'
import axios from "axios"
import EmployeeCard from '../components/cards/EmployeeCard'
const Employees = () => {
  const [employees,setEmployees]=useState(null)
  const fetchEmployees=async()=>{
    const res=axios.post("http://localhost:5000/users/getallusers")
    .then((res)=>{
      setEmployees(res.data.Users)
    })
  }
  useEffect(()=>{
   fetchEmployees();
  },[])
  console.log("employees",employees)
  return (
    <div className='w-full h-full flex flex-col gap-[10px]'>
      <div className='w-full h-full gap-[10px] mt-[10px] flex flex-wrap justify-center items-start'>
      {employees && employees.map((employee)=>(
       <EmployeeCard username={employee.username} email={employee.email} status={employee.status} role={employee.role} />
      ))}
      </div>
    </div>
  )
}

export default Employees
