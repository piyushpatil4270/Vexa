import React, { useEffect, useState } from "react";
import CreateTask from "../components/cards/CreateTask"
import axios from "axios";
const Dashboard = ({createTask,setCreateTask}) => {
  const [employees, setEmployees] = useState(null);
  const fetchEmployees = async () => {
    try {
      const res = await axios.post("http://localhost:5000/users/getallusers");
      setEmployees(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);
  console.log("employees", employees?.Users);
  return (
    <div className={`relative ${createTask && `backdrop-blur-md`}`}>
      {createTask&&<CreateTask setCreateTask={setCreateTask} createTask={createTask} />}
    <div className="flex flex-col w-full=">
      <div className="flex flex-row justify-between items-center h-[40px] w-full mt-2 pl-2 pr-5 bg-black">
        <span className="text-white text-lg flex-1">Name</span>
        <span className="text-white text-lg flex-1">Email</span>
        <span className="text-white text-lg flex-1">Department</span>
        <span className="text-white text-lg flex-1">Joining-Date</span>
        <span className="text-white text-lg  ">Status</span>
      </div>
      <div className={`flex flex-col`}>
      
        {employees?.Users &&
          employees?.Users.map((employee) => {
            return (
              <div
                className="flex flex-row justify-center items-center h-[50px] border-y-0.2 w-full  pl-2 pr-5 bg-[#181818]"
                key={employee.username}
              >
                <span className="text-white flex-1">{employee.username}</span>
                <span className="text-white flex-1 ">{employee.email}</span>
                <span className="text-white flex-1 ">Sales</span>
                <span className="text-white flex-1">22-05-2019</span>
                <button className="bg-[#9bf1a817] rounded-[5px] w-[60px]">
                  <span className="text text-[#3fda56] h-[30px]">Active</span>
                </button>
              </div>
            );
          })}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
